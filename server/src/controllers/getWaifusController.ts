import { Request, Response } from "express";
import WaifuModel from "../models/Waifu";

export const getWaifusController = async (req: Request, res: Response) => {
  try {
    const waifus = await WaifuModel.find();
    res.status(200).json(waifus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
};
