console.log("--- Starting server.js ---"); // DEBUG LINE 1

const express = require('express');
console.log("--- Express required ---"); // DEBUG LINE 2

const cors = require('cors');
console.log("--- CORS required ---"); // DEBUG LINE 3

// Make sure mockData.js is in the same directory (backend/)
// and that it correctly exports the data.
let serverDetails;
try {
    serverDetails = require('./mockData'); // Ensure this path is correct
    console.log("--- mockData required successfully ---"); // DEBUG LINE 4
    console.log("Type of serverDetails:", typeof serverDetails); // DEBUG LINE 4.1
    if (typeof serverDetails !== 'object' || serverDetails === null) {
        console.error("--- mockData did not export an object or is null! ---");
        // Optionally, provide a default structure to prevent further crashes
        serverDetails = { settings: [], advanced: [], rules: [] };
    } else {
        console.log("Content of serverDetails (keys):", Object.keys(serverDetails)); // DEBUG LINE 4.2
    }
} catch (error) {
    console.error("--- CRITICAL ERROR requiring mockData.js: ---", error); // DEBUG LINE 4.E
    // If mockData fails to load, the server likely won't work correctly.
    // Provide a default structure so other parts don't immediately crash.
    serverDetails = { settings: [], advanced: [], rules: [] };
}


const app = express();
console.log("--- Express app created ---"); // DEBUG LINE 5

const PORT = process.env.PORT || 3001;
console.log(`--- PORT is ${PORT} ---`); // DEBUG LINE 6

// Middleware
app.use(cors()); // Enable CORS for all routes
console.log("--- CORS middleware used ---"); // DEBUG LINE 7

app.use(express.json()); // To parse JSON request bodies
console.log("--- express.json middleware used ---"); // DEBUG LINE 8

// Routes
app.get('/api/server-details', (req, res) => {
    console.log("--- /api/server-details route hit ---"); // DEBUG LINE 9
    if (!serverDetails || typeof serverDetails !== 'object') {
        console.error("--- serverDetails is invalid or missing inside /api/server-details route! ---");
        return res.status(500).json({ error: "Server configuration data is missing or invalid on the server." });
    }
    // Check if the expected keys exist
    if (!serverDetails.settings || !serverDetails.advanced || !serverDetails.rules) {
        console.error("--- serverDetails is missing expected keys (settings, advanced, rules) inside route! ---");
        return res.status(500).json({ error: "Server data structure is incomplete on the server." });
    }
    res.json(serverDetails);
});
console.log("--- /api/server-details route defined ---"); // DEBUG LINE 10

// Start the server
app.listen(PORT, () => {
    console.log(`--- Backend server running on http://localhost:${PORT} ---`); // DEBUG LINE 11
});

console.log("--- Reached end of server.js script (before listen callback is executed) ---"); // DEBUG LINE 12