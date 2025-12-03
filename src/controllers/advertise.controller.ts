import createAdServices from "@/services/advertise.services";
import { Request, Response } from "express";

type AdServices = ReturnType<typeof createAdServices>;
const createAdController = (adServices: AdServices) => {
  const getAllAdertiseMents = async (req: Request, res: Response) => {
    try {
      console.log("aa");
      const ads = await adServices.getAllAdertiseMents();
      res.status(200).json(ads);
    } catch (error) {
      res.status(500).json({ message: "Failed to get advertisements" });
    }
  };
  const createAdertiseMent = async (req: Request, res: Response) => {
    try {
      const adData = req.body;
      console.log(adData);
      await adServices.createAdertiseMent(adData);
      res.status(201).json({ message: "Advertisement created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to create advertisement" });
    }
  };
  const editAdertiseMent = () => {};
  const deleteAdertiseMent = () => {};
  const queryAdertiseMent = () => {};
  const countUpAdertiseMent = () => {};

  return {
    getAllAdertiseMents,
    createAdertiseMent,
    editAdertiseMent,
    deleteAdertiseMent,
    queryAdertiseMent,
    countUpAdertiseMent,
  };
};

export default createAdController;
