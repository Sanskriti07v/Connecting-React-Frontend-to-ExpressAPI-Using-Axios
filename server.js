// Import required modules
const express = require('express');
const cors = require('cors');

// Create express app
const app = express();
app.use(cors());

// Sample products data
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 45 },
];

// API endpoint to send product list
app.get('/products', (req, res) => {
  res.json(products);
});

// Run server
app.listen(5000, () => {
  console.log(' Server running on http://localhost:5000');
});
