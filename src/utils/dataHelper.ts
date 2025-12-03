import { DBjson } from "@/types";
import fs from "fs/promises";
import path from "path";

const DB_PATH = path.resolve(__dirname, "../data/db.json");
console.log(DB_PATH);

export const readFromJson = async (): Promise<DBjson> => {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return { ads: [] };
  }
};

export const writeToJson = async (data: DBjson): Promise<void> => {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
};
