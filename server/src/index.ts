import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";
config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/");

// connect database and server
mongoose.connect(process.env.MONGODB_URL!).then(() => {
  app.listen(8080, () => {
    console.log("server started bitch");
  });
});
