const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON
app.use(express.json());

// Home route - serves the 3D scene
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API route example
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API', status: 'success' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Open the URL in your browser to see the 3D scene!');
});
