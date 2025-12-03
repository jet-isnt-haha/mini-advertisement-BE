import { advertisementMeta, DataAccess } from "@/types";

const createAdServices = (dataAccess: DataAccess) => {
  const getAllAdertiseMents = async () => {
    const dbData = await dataAccess.read();
    return dbData.ads;
  };
  const createAdertiseMent = async (data: advertisementMeta) => {
    console.log("data ", data);
    const dbData = await dataAccess.read();
    dbData.ads.push(data);
    await dataAccess.write(dbData);
  };
  const editAdertiseMent = async (data: advertisementMeta) => {
    const id = data.id;
    const dbData = await dataAccess.read();
    const adIndex = dbData.ads.findIndex((ad) => ad.id === id);
    if (adIndex !== -1) {
      dbData.ads[adIndex] = data;
      await dataAccess.write(dbData);
    } else {
      throw new Error();
    }
  };
  const deleteAdertiseMent = async (id: advertisementMeta["id"]) => {
    const dbData = await dataAccess.read();
    console.log(id);

    const deletedDbData = dbData.ads.filter((ad) => ad.id !== id);

    await dataAccess.write({ ads: deletedDbData });
  };
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

export default createAdServices;
