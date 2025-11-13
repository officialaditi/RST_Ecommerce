const express = require('express');
const products = require('./data/products');

const app = express();
const port = 3000;

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

app.listen(port, () => {
      console.log(`Server running of port ${port}`)
})