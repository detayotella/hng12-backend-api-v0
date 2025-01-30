# HNG12 Public API

This is a simple **public API** built with **Node.js** and **Express.js**. It provides essential information about a participant in the HNG12 program, including:
- The participant's registered email (from the HNG12 Slack workspace).
- The current date and time in **ISO 8601** format.
- The GitHub URL of the project's codebase.

## Features
- Well-structured and scalable **Express.js** API.
- Uses **environment variables** for sensitive data.
- Returns JSON responses in a structured format.
- Includes error handling for missing environment variables.

---

## Project Structure
```
hng12-api/
│── src/
│   ├── controllers/
│   │   ├── infoController.js  # Handles API logic
│   ├── routes/
│   │   ├── infoRoutes.js      # Defines API routes
│── .env                       # Stores environment variables
│── server.js                  # Starts the server
│── package.json               # Node.js package config
│── README.md                  # Documentation
```

---

## Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/detayotella/hng12-backend-api-v0.git
cd hng12-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Create a `.env` File
Create a `.env` file in the project root and add:
```env
EMAIL=your_registered_email@example.com
GITHUB_URL=https://github.com/yourusername/yourrepo
PORT=3000
```

### 4️⃣ Start the Server
Run the API locally:
```sh
npm start
```
Or use **nodemon** for development:
```sh
npm install -g nodemon
nodemon server.js
```

### 5️⃣ Test the API
Open your browser or use `curl`:
```sh
curl http://localhost:3000/api
```
You should get a response like:
```json
{
  "success": true,
  "email": "your_registered_email@example.com",
  "current_datetime": "2025-01-29T12:34:56.789Z",
  "github_url": "https://github.com/yourusername/yourrepo"
}
```

---

## API Endpoints
### **GET /api**
**Response:**
```json
{
  "success": true,
  "email": "your_registered_email@example.com",
  "current_datetime": "2025-01-29T12:34:56.789Z",
  "github_url": "https://github.com/yourusername/yourrepo"
}
```

**Error Responses:**
- `400 Bad Request` → When `EMAIL` or `GITHUB_URL` is missing.
- `500 Internal Server Error` → If the server encounters an issue.

---

## Deployment
You can deploy this API using:
- **Render**
- **Railway**
- **Vercel**
- **Fly.io**

Example for deploying to **Render**:
1. Push your code to GitHub.
2. Go to [Render](https://render.com/) and create a new Web Service.
3. Connect your GitHub repo and deploy.

---

## License
This project is **open-source** and free to use.

---

## Contributors
Developed by **Your Name** 🚀

