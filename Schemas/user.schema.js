const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    gender: String,
  });
  
  const userModel = mongoose.model("user", userSchema);

  module.exports=userModel