const express = require("express");
 
const server = express();

const connectToDB = require("./config");
const userRoutes = require("./Routes/user.routes");
server.use(express.json());

server.use("/user", userRoutes);

const port = 8080;

server.listen(port, async() => {
  try {
    await connectToDB();
    console.log(`server is running on port ${port}`);
  } catch (error) {
    console.log("Either server or db connection failed");
  }
});
