from flask import Flask, request, jsonify
from flask_cors import CORS
from config import Config
from database import db
from models import Prediction, User
from joblib import load
import pandas as pd
from werkzeug.security import generate_password_hash, check_password_hash
from flask_bcrypt import Bcrypt


app = Flask(__name__)
bcrypt = Bcrypt(app)

app.config.from_object(Config)
db.init_app(app)
CORS(app)

model = load("stroke_prediction_model.joblib")

with app.app_context():
    db.create_all()
    print("Database tables created successfully!")
    
@app.route('/')
def home():
    return "StrokeSense API is live!"



@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not name or not email or not password:
        return jsonify({'error': 'Missing fields'}), 400

    # Check if user already exists
    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'Email already registered'}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    user = User(name=name, email=email, password=hashed_password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({'error': 'Invalid email or password'}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({'error': 'Invalid email or password'}), 401

    return jsonify({'message': 'Login successful', 'name': user.name, 'email': user.email}), 200




@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    print("DEBUG: Data received from frontend:", data)

    try:
        df = pd.DataFrame(data, index=[0])
        df = df.astype({
            "gender": "string",
            "age": "float",
            "hypertension": "int",
            "heart_disease": "int",
            "ever_married": "string",
            "work_type": "string",
            "Residence_type": "string",
            "avg_glucose_level": "float",
            "bmi": "float",
            "smoking_status": "string"
        })

        prediction = model.predict(df)
        probability = model.predict_proba(df)[:, 1]

        record = Prediction(
            gender=data['gender'],
            age=float(data['age']),
            hypertension=int(data['hypertension']),
            heart_disease=int(data['heart_disease']),
            ever_married=data['ever_married'],
            work_type=data['work_type'],
            Residence_type=data['Residence_type'],
            avg_glucose_level=float(data['avg_glucose_level']),
            bmi=float(data['bmi']),
            smoking_status=data['smoking_status'],
            prediction=int(prediction[0]),
            probability=float(probability[0])
        )

        db.session.add(record)
        db.session.commit()

        return jsonify({
            'prediction': int(prediction[0]),
            'probability': float(probability[0])
        }), 200

    except Exception as e:
        print("DEBUG: ERROR during prediction or DB insert:", str(e))
        return jsonify({'error': 'Database error'}), 500



@app.route('/history', methods=['GET'])
def get_history():
    try:
        records = Prediction.query.order_by(Prediction.id.desc()).all()
        data = [
            {
                'id': record.id,
                'gender': record.gender,
                'age': record.age,
                'prediction': record.prediction,
                'probability': record.probability,
                'timestamp': record.timestamp.strftime("%Y-%m-%d %H:%M:%S") if record.timestamp else "N/A"
            }
            for record in records
        ]
        return jsonify(data), 200
    except Exception as e:
        print("DEBUG: Error in fetching history:", str(e))
        return jsonify({'error': 'Failed to fetch history'}), 500



if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host="0.0.0.0", port=5000, debug=True)


