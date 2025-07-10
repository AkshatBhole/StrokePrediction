from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required
from models import db, User

auth = Blueprint('auth', __name__)

@auth.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    existing_user = User.query.filter_by(email=data['email']).first()
    if existing_user:
        return jsonify({"error": "User already exists"}), 400

    hashed_password = generate_password_hash(data['password'])
    user = User(name=data['name'], email=data['email'], password=hashed_password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()

    if user and check_password_hash(user.password, data['password']):
        token = create_access_token(identity=user.id)
        return jsonify({"token": token, "user": {"id": user.id, "name": user.name}}), 200

    return jsonify({"error": "Invalid credentials"}), 401
