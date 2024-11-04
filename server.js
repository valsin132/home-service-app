import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";


mongoose.connect('mongodb+srv://node1user:qwerty132@node1.44ayzka.mongodb.net/?retryWrites=true&w=majority&appName=Node1');

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the Express.js server!");
  });
  
app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});

export default app;