const express = require('express');
const Connection = require('./database/db.js');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./routes/route.js');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product')
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
app.use('/', Router);
app.use('/api',  categoryRoutes);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('./api', productRoutes);

const port = 3000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.get('/',(req,res,next)=>{
  res.status(200).json({
      message:'Hello from server'
  });
});

app.post('/data',(req,res,next)=>{
  res.status(200).json({
      message:req.body
  });
});

app.listen(port, () => {
  console.log(`Server Running Successfully on Port ${port}`);
});
