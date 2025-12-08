import { Request, Response, NextFunction } from "express";
import { validateAdvertisement, ValidationResult } from "@/utils/validator";
import { ApiResponse } from "@/types";

/**
 * 创建广告的校验中间件
 */
export const validateCreateAd = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: ValidationResult = validateAdvertisement(req.body, false);

  if (!result.isValid) {
    const response: ApiResponse<null> = {
      code: -1,
      data: null,
      message: result.errors.map((e) => e.message).join("; "),
    };
    return res.status(400).json(response);
  }

  next();
};

/**
 * 编辑广告的校验中间件
 */
export const validateEditAd = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: ValidationResult = validateAdvertisement(req.body, true);

  if (!result.isValid) {
    const response: ApiResponse<null> = {
      code: -1,
      data: null,
      message: result.errors.map((e) => e.message).join("; "),
    };
    return res.status(400).json(response);
  }

  next();
};

/**
 * 删除/点击计数的 ID 校验中间件
 */
export const validateAdId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;

  if (!id || typeof id !== "string" || id.trim() === "") {
    const response: ApiResponse<null> = {
      code: -1,
      data: null,
      message: "请提供有效的广告 ID",
    };
    return res.status(400).json(response);
  }

  next();
};
