const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Health check endpoint (used by Kubernetes probes)
app.get('/health', (req, res) => {
  res.status(200).send('User service is healthy');
});

// Simulated user endpoint
app.get('/user', (req, res) => {
  res.json({
    id: 1,
    name: 'Suvabrata',
    email: 'suvaatnbu@gmail.com'
  });
});

// Start server
app.listen(port, () => {
  console.log(`User Service running on port ${port}`);
});

