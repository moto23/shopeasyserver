import express from 'express';
import { Connection } from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './routes/route.js';
import categoryRoutes from './routes/category.js';
import productRoutes from './routes/product.js';
import { DefaultData } from './default.js';

dotenv.config();

const app = express();

// app.use("/", (req, res) => {
//   res.send("server is running");
// });


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials","true")
  
  res.send("hello");
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);

const port = process.env.PORT || 3000;
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

Connection(username, password);
DefaultData();

app.listen(port, () => {
  console.log(`Server Running Successfully on Port ${port}`);
});
