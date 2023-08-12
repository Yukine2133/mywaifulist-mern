import { Request, Response } from "express";
import WaifuModel from "../models/Waifu";

export const addWaifuController = async (req: Request, res: Response) => {
  const { name, from, imageURL } = req.body;
  const newWaifu = new WaifuModel({
    name,
    from,
    imageURL,
  });
  const createdWaifu = await newWaifu.save();
  res.json(createdWaifu);
};
