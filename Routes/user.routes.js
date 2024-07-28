const express = require("express");
const userModel = require("../Schemas/user.schema");
const userRoutes = express.Router();

userRoutes.post("/", async (req, res) => {
  try {
    let myuser= await userModel.find({name:req.body.name})
     
    if(myuser.length!=0){
        res.json({"msg":"user already present"})
        return
    }

    let user = new userModel(req.body);

    await user.save();
    res.send("user added");
  } catch (error) {
    res.send("something went wrong");
  }
});

userRoutes.get("/", async (req, res) => {
  let data = await userModel.find();
 
  res.json({ msg: "Here is all the users list", data });
});

userRoutes.get("/:id", async (req, res) => {
  let data = await userModel.findById({ _id: req.params.id });
  res.json({ msg: "Here is the unique user", data });
});

userRoutes.put("/:id", async (req, res) => {
  let data = await userModel.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  res.json({ msg: "Here is the updated user", data });
});

userRoutes.delete("/:id", async (req, res) => {
  await userModel.findByIdAndDelete({ _id: req.params.id });
  res.json({ msg: "user deleted" });
});

module.exports = userRoutes;
