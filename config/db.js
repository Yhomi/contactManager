const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async()=>{
  try {
    const conn = await mongoose.connect(db,{
      useNewUrlParser:true,
      useCreateIndex:true,
      useFindAndModify:false,
      useUnifiedTopology:true
    });
    console.log('Mongo DB connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectDB;
