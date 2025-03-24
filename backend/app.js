const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Home Stock Backend Running');
});

app.listen(3000, () => {
  console.log('Backend running on port 3000');
});