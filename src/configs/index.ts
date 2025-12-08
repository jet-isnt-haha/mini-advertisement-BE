import path from "path";

/**
 * 应用配置中心
 * 所有环境变量和配置统一管理
 */
export const config = {
  // 环境
  NODE_ENV: process.env.NODE_ENV || "development",

  // 服务器
  PORT: process.env.PORT || 3000,

  // 基础 URL（用于生成静态资源链接）
  BASE_URL:
    process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`,

  // CORS
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(",")
    : ["http://localhost:5173"],

  // 数据库路径
  DB_PATH:
    process.env.DB_PATH || path.resolve(process.cwd(), "dist/data/db.json"),

  // 辅助方法
  isDevelopment: () => process.env.NODE_ENV !== "production",
  isProduction: () => process.env.NODE_ENV === "production",
};

// 启动时打印配置（排除敏感信息）
console.log("=== Application Config ===");
console.log("Environment:", config.NODE_ENV);
console.log("Port:", config.PORT);
console.log("Base URL:", config.BASE_URL);
console.log("DB Path:", config.DB_PATH);
console.log("Allowed Origins:", config.ALLOWED_ORIGINS);
console.log("========================");
