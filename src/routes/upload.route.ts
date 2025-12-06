import { Router } from "express";
import { uploadFile } from "../controllers/upload.controller";
import { upload } from "../middlewares/upload.middleware";

const router = Router();

router.post("/upload_file", upload.array("video"), uploadFile);

export default router;
