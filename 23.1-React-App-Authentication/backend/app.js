const bodyParser = require("body-parser");
const express = require("express");
const path = require("path"); // For handling paths
require("dotenv").config(); // For environment variables

const eventRoutes = require("./routes/events");
const authRoutes = require("./routes/auth");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  const allowedOrigins = ["http://localhost:3000", "https://yourfrontend.com"]; // Add your frontend URL here
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// // Use routes
app.use(authRoutes);
app.use("/events", eventRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
