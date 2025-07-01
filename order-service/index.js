const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('Order service is healthy');
});

// Order endpoint
app.get('/order', (req, res) => {
  res.json({
    orderId: 5001,
    userId: 1,
    productId: 101,
    status: 'Confirmed'
  });
});

app.listen(port, () => {
  console.log(`Order Service running on port ${port}`);
});

