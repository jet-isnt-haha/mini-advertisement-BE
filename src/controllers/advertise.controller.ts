import createAdServices from "@/services/advertise.services";
import { advertisementMeta, ApiResponse } from "@/types";
import { Request, Response } from "express";

type AdServices = ReturnType<typeof createAdServices>;
const createAdController = (adServices: AdServices) => {
  const getAllAdertiseMents = async (req: Request, res: Response) => {
    try {
      const ads = await adServices.getAllAdertiseMents();
      const response: ApiResponse<advertisementMeta[]> = {
        code: 0,
        data: ads,
        message: "Advertisements retrieved successfully",
      };
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse<null> = {
        code: -1,
        data: null,
        message: "Failed to retrieve advertisement",
      };
      res.status(500).json(response);
    }
  };
  const queryAdertiseMent = () => {};
  const getAdFormConfig = async(req:Request,res:Response)=>{
    try {
      const formConfig = await adServices.getAdFormConfig();
      const response:ApiResponse<any>={
        code:0,
        data:formConfig,
        message:"get form config successfully",
      }
      res.status(200).json(response);
    } catch (error) {
      
    }
  }
  const createAdertiseMent = async (req: Request, res: Response) => {
    try {
      const adData = req.body;
      console.log(adData);
      await adServices.createAdertiseMent(adData);
      const response: ApiResponse<null> = {
        code: 0,
        data: null,
        message: "Advertisement created successfully",
      };
      res.status(201).json(response);
    } catch (error) {
      const response: ApiResponse<null> = {
        code: -1,
        data: null,
        message: "Failed to create advertisement",
      };
      res.status(500).json(response);
    }
  };
  const editAdertiseMent = async (req: Request, res: Response) => {
    const adData = req.body;
    try {
      await adServices.editAdertiseMent(adData);
      const response: ApiResponse<null> = {
        code: 0,
        data: null,
        message: "Advertisement edited successfully",
      };
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse<null> = {
        code: -1,
        data: null,
        message: "Failed to edit advertisement",
      };
      res.status(500).json(response);
    }
  };
  const deleteAdertiseMent = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      await adServices.deleteAdertiseMent(data.id);
      const response: ApiResponse<null> = {
        code: 0,
        data: null,
        message: "Advertisement deleted successfully",
      };
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse<null> = {
        code: -1,
        data: null,
        message: "Failed to delete advertisement",
      };
      res.status(500).json(response);
    }
  };
  const countUpAdertiseMent = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      await adServices.countUpAdertiseMent(data.id);
      const response: ApiResponse<null> = {
        code: 0,
        data: null,
        message: "Advertisement count incremented successfully",
      };
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse<null> = {
        code: -1,
        data: null,
        message: "Failed to increment advertisement count",
      };
      res.status(500).json(response);
    }
  };

  return {
    getAllAdertiseMents,
    queryAdertiseMent,
    getAdFormConfig,
    createAdertiseMent,
    editAdertiseMent,
    deleteAdertiseMent,
    countUpAdertiseMent,
  };
};

export default createAdController;
