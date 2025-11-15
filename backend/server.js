const express = require('express');
const products = require('./data/products');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


app.get('/', (req, res) => {
      res.send('hello world')
});

app.get('/api/products', (req, res) => {
      res.json(products);
})

app.get('/api/products/:id', (req, res) => {
      const product = products.find((prod) => prod._id === req.params.id);
      res.send(product)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
      console.log(`Serverr running on ${process.env.NODE_ENV} mode on port ${PORT}`)
})