import { Request, Response } from "express";
import WaifuModel from "../models/Waifu";

export const deleteWaifuController = async (req: Request, res: Response) => {
  try {
    const { waifuId } = req.params;
    const waifu = await WaifuModel.findByIdAndDelete(waifuId);
    res.status(200).json(waifu);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
};
