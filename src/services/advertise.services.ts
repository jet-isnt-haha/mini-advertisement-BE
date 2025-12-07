import { AdFormConfig } from "@/configs/AdFormConfig";
import { advertisementMeta, DataAccess } from "@/types";
import { getRankedAds } from "@/utils/rankHelper";

const createAdServices = (dataAccess: DataAccess) => {
  const getAllAdertiseMents = async () => {
    const dbData = await dataAccess.read();
    return dbData.ads;
  };
  const queryAdertiseMent = () => {};
  const getAdFormConfig =async()=>{
    return AdFormConfig;
  }
  const createAdertiseMent = async (data: advertisementMeta) => {
    const dbData = await dataAccess.read();
    const newAds = [...dbData.ads, data];
    dbData.ads = getRankedAds(newAds);
    await dataAccess.write(dbData);
  };
  const editAdertiseMent = async (data: advertisementMeta) => {
    const id = data.id;
    if (!id) {
      throw new Error();
    }
    const dbData = await dataAccess.read();
    const updatedAds = dbData.ads.map((ad) => {
      if (ad.id === id) {
        return { ...ad, ...data };
      }
      return ad;
    });
    dbData.ads = getRankedAds(updatedAds);
    await dataAccess.write(dbData);
  };
  const deleteAdertiseMent = async (id: advertisementMeta["id"]) => {
    if (!id) {
      throw new Error();
    }
    const dbData = await dataAccess.read();
    const deletedAds = dbData.ads.filter((ad) => ad.id !== id);
    dbData.ads = getRankedAds(deletedAds);
    await dataAccess.write(dbData);
  };
  const countUpAdertiseMent = async (id: advertisementMeta["id"]) => {
    if (!id) {
      throw new Error();
    }
    const dbData = await dataAccess.read();
    const updatedAds = dbData.ads.map((ad) => {
      if (ad.id === id) {
        return { ...ad, clickCount: ad.clickCount + 1 };
      }
      return ad;
    });
    dbData.ads = getRankedAds(updatedAds);
    await dataAccess.write(dbData);
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

export default createAdServices;
