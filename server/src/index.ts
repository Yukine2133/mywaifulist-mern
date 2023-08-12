import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {
  addWaifuController,
  deleteWaifuController,
  getWaifusController,
} from "./controllers/index";

const app = express();
app.use(cors());
app.use(express.json());

// get waifu endpoint
app.get("/waifus", getWaifusController);

// delete waifu endpoint
app.delete("/waifus/:waifuId", deleteWaifuController);

// add waifu endpoint
app.post("/waifus", addWaifuController);

// connect database and server
mongoose.connect(process.env.MONGODB_URL!).then(() => {
  app.listen(8080, () => {
    console.log("server started bitch");
  });
});
