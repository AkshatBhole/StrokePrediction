# frontend/Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# ⬇️ use docker-start instead of start (no backend)
CMD ["npm", "run", "docker-start"]
