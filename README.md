# 🧠 StrokeSense — AI-Powered Stroke Risk Predictor

StrokeSense is a full-stack web application that predicts the risk of stroke based on user health inputs using a trained Machine Learning model.  
It also includes **user authentication**, a **dashboard to track previous predictions**, and a beautifully designed frontend.

---

## 🚀 Features

- 🔐 User Signup & Login with JWT Authentication
- 🧠 Machine Learning model (LDA) for stroke risk prediction
- 📊 Dashboard with history of past predictions
- 🎨 Modern UI built with Tailwind CSS + animations (Framer Motion & Lottie)
- 🔌 Flask-based REST API with CORS enabled
- 💾 SQLite database for storing predictions and users

---

## 🛠 Tech Stack

### ⚙️ Backend (Flask)
- Flask
- Flask-CORS
- Flask-JWT-Extended
- SQLAlchemy
- Werkzeug (password hashing)
- Scikit-learn (LDA model)
- Joblib

### 🌐 Frontend (React.js)
- React with Router
- Tailwind CSS
- Framer Motion (animations)
- Lottie React (animated illustrations)

### 🧠 Machine Learning
- **Model Used:** Linear Discriminant Analysis (LDA)
- **Dataset:** Stroke Prediction Dataset (Kaggle or similar)
- **Libraries:** scikit-learn, pandas

---

## 🔐 Authentication

- User data is stored securely in the database.
- Passwords are hashed using `generate_password_hash` from `werkzeug.security`.
- JWT is used to protect private routes and verify logged-in sessions.

---

## 📂 Project Structure

StrokeSense/
│
├── backend/
│ ├── app.py # Flask app & route definitions
│ ├── auth.py # Signup/Login routes (Blueprint)
│ ├── models.py # SQLAlchemy models (User, Prediction)
│ ├── database.py # DB init
│ ├── config.py # Config class for SQLite
│ ├── stroke_prediction_model.joblib # Trained LDA model
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx # Route definitions (public/private)
│ │ ├── pages/ # Login, Signup, Home, Result, Dashboard, About
│ │ ├── components/ # Header, Footer, PredictionCard, Layout
│ │ ├── context/ # Auth context with user state
│ │ ├── utils/ # PrivateRoute component
│ │ └── assets/ # Lottie/illustrations
│
└── README.md


---

## 📦 How to Run

### 🔹 Backend (Flask)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py

### 🔹 Frontend (React)

cd frontend
npm install
npm run dev   # or npm start

🌟 Live Demo (Optional)
If deployed, add a Netlify/Vercel or Render link here

📈 Future Improvements
Email verification

Admin panel for managing users

Better visualizations on dashboard

Deploy to cloud (Render, Vercel, etc.)

🙌 Acknowledgements
Dataset from Kaggle

React + Tailwind for frontend inspiration

Flask documentation & JWT community for backend support

🔗 Connect
Made with ❤️ by Akshat Bhole

GitHub Repo 👉 https://github.com/akshatbhole/StrokePrediction




