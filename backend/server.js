import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// routes
app.get("/", (req, res) => {
    res.json({mssg: "Welcome to the app!"})
})

app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)
});

// connect to DB
mongoose.connect(process.env.URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((err) => console.log(err))