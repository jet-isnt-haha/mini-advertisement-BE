import multer from "multer";
import path from "path";
import fs from "fs";

const videoDir = "public/videos/";

// 确保目录存在，如果不存在则创建
fs.mkdirSync(videoDir, { recursive: true });

// 配置 multer 用于处理文件上传
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, videoDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

export const upload = multer({ storage: storage });
