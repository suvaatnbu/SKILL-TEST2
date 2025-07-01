const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3003;

// Forward /user → user-service:3000
app.use('/user', createProxyMiddleware({
  target: 'http://user-service:3000',
  changeOrigin: true,
  pathRewrite: { '^/user': '' }
}));

// Forward /product → product-service:3001
app.use('/product', createProxyMiddleware({
  target: 'http://product-service:3001',
  changeOrigin: true,
  pathRewrite: { '^/product': '' }
}));

// Forward /order → order-service:3002
app.use('/order', createProxyMiddleware({
  target: 'http://order-service:3002',
  changeOrigin: true,
  pathRewrite: { '^/order': '' }
}));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});

