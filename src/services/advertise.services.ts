import { advertisementMeta, DataAccess } from "@/types";

const createAdServices = (dataAccess: DataAccess) => {
  const getAllAdertiseMents = async () => {
    const dbData = await dataAccess.read();
    return dbData.ads;
  };
  const createAdertiseMent = async (data: advertisementMeta) => {
    const dbData = await dataAccess.read();
    dbData.ads.push(data);
    await dataAccess.write(dbData);
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

export default createAdServices;
