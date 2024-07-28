const mongoose = require("mongoose");
const dotenv=require("dotenv").config()

const url=process.env.mongo_url

const connectToDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected to db");
    } catch (error) {
        console.log("failed to connect db file")
    }
   
   
  };

module.exports=connectToDB