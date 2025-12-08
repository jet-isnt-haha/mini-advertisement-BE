import express from "express";
import createAdController from "@/controllers/advertise.controller";
import createAdServices from "@/services/advertise.services";
import { readFromJson, writeToJson } from "@/utils/dataHelper";
import {
  validateCreateAd,
  validateEditAd,
  validateAdId,
} from "@/middlewares/validator.middleware";

const ad_router = express.Router();

//数据访问对象
const dataAccess = {
  read: readFromJson,
  write: writeToJson,
};

const adServices = createAdServices(dataAccess);
const adController = createAdController(adServices);

const GET_ALL_ADS = "/ads";
const QUERY_AD = "/advertise/:id";
const FORM_CONFIG = "/form_config";
const CREATE_AD = "/create_ad";
const EDIT_AD = "/edit_ad";
const DELETE_AD = "/delete_ad";
const COUNTBYCLICK = "/count_click";

ad_router.get(GET_ALL_ADS, adController.getAllAdertiseMents);
ad_router.get(QUERY_AD, adController.queryAdertiseMent);
ad_router.get(FORM_CONFIG, adController.getAdFormConfig);

// 添加校验中间件
ad_router.post(CREATE_AD, validateCreateAd, adController.createAdertiseMent);
ad_router.post(EDIT_AD, validateEditAd, adController.editAdertiseMent);
ad_router.post(DELETE_AD, validateAdId, adController.deleteAdertiseMent);
ad_router.post(COUNTBYCLICK, validateAdId, adController.countUpAdertiseMent);

export default ad_router;
