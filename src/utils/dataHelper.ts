import { config } from "@/configs";
import { DBjson } from "@/types";
import fs from "fs/promises";
import path from "path";

const DB_PATH = config.DB_PATH;

export const readFromJson = async (): Promise<DBjson> => {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Failed to read db.json:", error);
    await ensureDbFile();
    return { ads: [] };
  }
};

export const writeToJson = async (data: DBjson): Promise<void> => {
  try {
    await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Failed to write db.json:", error);
    throw error;
  }
};

async function ensureDbFile() {
  try {
    await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
    await fs.writeFile(DB_PATH, JSON.stringify({ ads: [] }, null, 2), "utf-8");
    console.log("Created db.json at:", DB_PATH);
  } catch (error) {
    console.error("Failed to create db.json:", error);
  }
}
