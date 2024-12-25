import fs from 'node:fs/promises';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

// Middleware to serve static files from 'images' folder
app.use(express.static('images'));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// CORS handling - Allow requests from any origin (this is an open configuration)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH'); // Allow methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow Content-Type header

  // Handle preflight requests (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Respond with 200 OK for OPTIONS requests
  }

  next(); // Proceed to next middleware
});

// Get places data (returns the content of places.json)
app.get('/places', async (req, res) => {
  try {
    const fileContent = await fs.readFile('./data/places.json', 'utf-8');
    const placesData = JSON.parse(fileContent);
    res.status(200).json({ places: placesData });
  } catch (error) {
    res.status(500).json({ message: 'Error reading places data', error: error.message });
  }
});

// Get user-specific places (returns the content of user-places.json)
app.get('/user-places', async (req, res) => {
  try {
    const fileContent = await fs.readFile('./data/user-places.json', 'utf-8');
    const places = JSON.parse(fileContent);
    res.status(200).json({ places });
  } catch (error) {
    res.status(500).json({ message: 'Error reading user places data', error: error.message });
  }
});

// PUT /user-places - Replace user places with the provided data
app.put('/user-places', async (req, res) => {
  const places = req.body.places;

  // Validate the request body to ensure `places` is provided
  if (!places || !Array.isArray(places)) {
    return res.status(400).json({ message: 'Invalid data. Expected an array of places.' });
  }

  try {
    // Write the updated places data to user-places.json
    await fs.writeFile('./data/user-places.json', JSON.stringify(places, null, 2));
    res.status(200).json({ message: 'User places updated!' });
  } catch (error) {
    res.status(500).json({ message: 'Error writing user places data', error: error.message });
  }
});

// 404 handler - catch all route for non-matching requests
app.use((req, res) => {
  res.status(404).json({ message: '404 - Not Found' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
