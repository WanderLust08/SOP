const mongoose = require("mongoose");

const connectDB = (url)=>{
    return mongoose.connect(url,{},console.log("Connected to Mongoose..."));

};

module.exports = connectDB;