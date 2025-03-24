const express = require('express');
const app = express();

app.get('/shopping-list', (req, res) => {
  res.json({ items: ['Milk', 'Bread'] });
});

app.listen(3001, () => {
  console.log('Microservice running on port 3001');
});