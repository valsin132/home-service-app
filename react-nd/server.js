import express from "express";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Express.js server!");
  });
  
  app.listen(3000, () => {
    console.log("Server listening on port 3000.");
  });

  export default app;