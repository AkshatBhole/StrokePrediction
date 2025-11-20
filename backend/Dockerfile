# backend/Dockerfile
FROM python:3.11-slim

# Create folder inside container
WORKDIR /app

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy rest of backend code
COPY . .

# Make Flask listen on all interfaces
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_APP=app.py

# Flask default port
EXPOSE 5000

# Run your app
CMD ["python", "app.py"]
