import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {
  addWaifuController,
  deleteWaifuController,
  getWaifusController,
  updateWaifuController,
} from "./controllers/index";

const app = express();
app.use(cors());
app.use(express.json());

// add waifu endpoint
app.post("/waifus", addWaifuController);

// get waifu endpoint
app.get("/waifus", getWaifusController);

// update waifu endpoint
app.put("/waifus/:waifuId", updateWaifuController);

// delete waifu endpoint
app.delete("/waifus/:waifuId", deleteWaifuController);

// connect database and server
mongoose.connect(process.env.MONGODB_URL!).then(() => {
  app.listen(8080, () => {
    console.log("server started bitch");
  });
});
