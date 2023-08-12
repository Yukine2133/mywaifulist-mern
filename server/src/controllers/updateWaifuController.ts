import { Request, Response } from "express";
import WaifuModel from "../models/Waifu";

export const updateWaifuController = async (req: Request, res: Response) => {
  try {
    const { waifuId } = req.params;
    const { name, from, imageURL } = req.body;

    const updatedWaifu = await WaifuModel.findByIdAndUpdate(
      waifuId,
      { name, from, imageURL },
      { new: true }
    );

    if (!updatedWaifu) {
      return res.status(404).json({ error: "Waifu not found" });
    }

    res.status(200).json(updatedWaifu);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
};
