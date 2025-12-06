import { advertisementMeta, ApiResponse } from "@/types";
import { Request, Response } from "express";

const PORT = process.env.PORT || 3000;

export const uploadFile = (req: Request, res: Response) => {
  try {
    if (!req.files) {
      const response: ApiResponse<null> = {
        code: -1,
        data: null,
        message: "No file uploaded",
      };
      return res.status(400).json(response);
    }
    console.log("resovle file!");
    const fileArray = req.files as Express.Multer.File[];
    const filesInfo = fileArray.map((file) => {
      return {
        uid: file.filename.split("-")[1],
        name: file.filename,
        url: `http://localhost:${PORT}/static/videos/${file.filename}`,
      };
    });

    const response: ApiResponse<advertisementMeta["videosInfo"]> = {
      code: 0,
      data: filesInfo,
      message: "video file uploaded successfully",
    };
    console.log("response ", response);
    res.status(200).json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      code: -1,
      data: null,
      message: "video upload failed",
    };
    res.status(500).json(response);
  }
};
