import express from "express";
import createAdController from "@/controllers/advertise.controller";

const ad_router = express.Router();

const adController = createAdController();

const CREATE_AD = "/create_ad";

const EDIT_AD = "/edit_ad";

const DELETE_AD = "/delete_ad";

const QUERY_AD = "/advertise/:id";

const COUNTBYCLICK = "/count_click";

ad_router.post(CREATE_AD, adController.createAdertiseMent);
ad_router.post(EDIT_AD, adController.editAdertiseMent);
ad_router.post(DELETE_AD, adController.deleteAdertiseMent);
ad_router.get(QUERY_AD, adController.queryAdertiseMent);
ad_router.post(COUNTBYCLICK, adController.countUpAdertiseMent);

export default ad_router;
