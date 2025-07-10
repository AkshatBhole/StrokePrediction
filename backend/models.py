from datetime import datetime
from database import db

class Prediction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    gender = db.Column(db.String(10))
    age = db.Column(db.Float)
    hypertension = db.Column(db.Integer)
    heart_disease = db.Column(db.Integer)
    ever_married = db.Column(db.String(10))
    work_type = db.Column(db.String(50))
    Residence_type = db.Column(db.String(10))
    avg_glucose_level = db.Column(db.Float)
    bmi = db.Column(db.Float)
    smoking_status = db.Column(db.String(50))
    prediction = db.Column(db.Integer)
    probability = db.Column(db.Float)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)  

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(200))

