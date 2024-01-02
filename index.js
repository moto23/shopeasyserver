import express from 'express';
import { Connection } from './database/db.js';


import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './routes/route.js';
import categoryRoutes from './routes/category.js';
import productRoutes from './routes/product.js';
import { DefaultData } from './default.js';

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
app.use('/', Router);
app.use('/api', categoryRoutes);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('./api', productRoutes);

const port = 3000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);
DefaultData();
app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Hello from server',
  });
});

app.post('/data', (req, res, next) => {
  res.status(200).json({
    message: req.body,
  });
});

app.listen(port, () => {
  console.log(`Server Running Successfully on Port ${port}`);
});
