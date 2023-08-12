import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";
import { addWaifuController } from "./controllers/addWaifuController";
config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/waifus", addWaifuController);

// connect database and server
mongoose.connect(process.env.MONGODB_URL!).then(() => {
  app.listen(8080, () => {
    console.log("server started bitch");
  });
});
