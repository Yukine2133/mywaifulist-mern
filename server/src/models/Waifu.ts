import mongoose, { Schema } from "mongoose";

const WaifuSchema = new Schema({
  name: String,
  from: String,
  imageURL: String,
});

const WaifuModel = mongoose.model("Waifu", WaifuSchema);

export default WaifuModel;
