import express from "express";
import ad_router from "./routes/advertise.route";
import upload_router from "./routes/upload.route";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/static", express.static("public"));
app.use("/v1/api", ad_router);
app.use("/v1/api", upload_router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
