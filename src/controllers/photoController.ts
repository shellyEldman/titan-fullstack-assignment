import { Request, Response } from "express";
import { getPhotoUrls } from "../services/unsplashService";

export const getPhotos = async (req: Request, res: Response) => {
  const count = parseInt(req.query.count as string) || 10;

  if (count > 30) {
    return res
      .status(400)
      .json({ error: "Cannot request more than 30 photos at a time." });
  }

  try {
    const photoUrls = await getPhotoUrls(count);
    res.json(photoUrls);
  } catch (error) {
    res.status(500).json({ error: "Error fetching photos from Unsplash" });
  }
};
