// import { set, connect } from 'mongoose';

// const mongoURI = "mongodb+srv://prasad21:COder21@cluster0.f3zcvbs.mongodb.net/";

// const connectToMongo = async () => {
//     set('strictQuery', false);

//     try {
//         await connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         console.log('Mongo connected successfully');
//     } catch (error) {
//         console.error(error);
//         process.exit(1); // Exit with a non-zero status code to indicate an error
//     }
// };

// export default connectToMongo;

// In ./database/db.js
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
function Connection(username, password) {
  const mongoURI = `mongodb+srv://prasad21:COder21@cluster0.f3zcvbs.mongodb.net/`;

  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('MongoDB connected successfully');
  });
}

module.exports = Connection;
