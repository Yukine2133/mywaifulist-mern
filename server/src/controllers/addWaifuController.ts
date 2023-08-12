import { Request, Response } from "express";
import WaifuModel from "../models/Waifu";

export const addWaifuController = async (req: Request, res: Response) => {
  try {
    const { name, from, imageURL } = req.body;

    // Create a new instance of the WaifuModel
    const newWaifu = new WaifuModel({
      name,
      from,
      imageURL,
    });

    // Save the new waifu to the database
    const createdWaifu = await newWaifu.save();

    // Respond with the created waifu
    res.status(201).json(createdWaifu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};
