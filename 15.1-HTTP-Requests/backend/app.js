import fs from "fs/promises";
import express from "express";
import bodyParser from "body-parser";

const app = express();

// Static file serving
app.use(express.static("images"));

// Body parser middleware
app.use(bodyParser.json());

// CORS handling - Ensure proper handling of preflight requests (OPTIONS)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins, adjust this to specific origins for more security if needed
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT"); // Allow only GET and PUT methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow the Content-Type header in requests

  // Handle preflight requests (OPTIONS)
  if (req.method === "OPTIONS") {
    return res.status(200).end(); // Respond with 200 OK for OPTIONS requests
  }

  next(); // Proceed to the next middleware if it's not an OPTIONS request
});

// Get places data
app.get("/places", async (req, res) => {
  try {
    const fileContent = await fs.readFile("./data/places.json", "utf-8");
    const placesData = JSON.parse(fileContent);
    res.status(200).json({ places: placesData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error reading places data", error: error.message });
  }
});

// Get user-specific places
app.get("/user-places", async (req, res) => {
  try {
    const fileContent = await fs.readFile("./data/user-places.json", "utf-8");
    const places = JSON.parse(fileContent);
    res.status(200).json({ places });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error reading user places data",
        error: error.message,
      });
  }
});

// Update user places data
app.put("/user-places", async (req, res) => {
  console.log(req.body); // Add this line to log the incoming request body

  const places = req.body.places;

  if (!places) {
    return res.status(400).json({ message: "No places provided" });
  }

  try {
    await fs.writeFile(
      "./data/user-places.json",
      JSON.stringify(places, null, 2)
    );
    res.status(200).json({ message: "User places updated!" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error writing user places data",
        error: error.message,
      });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "404 - Not Found" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
