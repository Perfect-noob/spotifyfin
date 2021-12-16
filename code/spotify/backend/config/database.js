const mongoose = require('mongoose');

const uri = "mongodb+srv://perfect_noob: QWERTYUIOP@123$123 @cluster0.ecjsq.mongodb.net/spotifydb?retryWrites=true&w=majority";

const database = async()=>{
  await mongoose.connect(uri);
}

console.log('connected to db');

module.exports=database;