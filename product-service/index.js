const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('Product service is healthy');
});

// Product endpoint
app.get('/product', (req, res) => {
  res.json({
    id: 101,
    name: 'Laptop',
    price: 49999
  });
});

app.listen(port, () => {
  console.log(`Product Service running on port ${port}`);
});

