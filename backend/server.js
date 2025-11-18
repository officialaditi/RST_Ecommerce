import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors'
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();


app.get('/', (req, res) => {
      res.send('hello world')
});


app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
      console.log(`Serverr running on ${process.env.NODE_ENV} mode on port ${PORT}`.bgMagenta)
})