import { advertisementMeta } from "@/types";

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

// URL 正则表达式
const URL_REGEX = /^(https?:\/\/)?(localhost|(\d{1,3}\.){3}\d{1,3}|([\w-]+\.)+[\w-]+)(:\d+)?(\/\S*)?$/;

/**
 * 校验广告表单数据
 */
export const validateAdvertisement = (
  data: Partial<advertisementMeta>,
  isEdit: boolean = false
): ValidationResult => {
  const errors: ValidationError[] = [];

  // 编辑时必须有 id
  if (isEdit && !data.id) {
    errors.push({ field: "id", message: "编辑时必须提供广告 ID" });
  }

  // title: 必填，最多 50 字符
  if (!data.title || data.title.trim() === "") {
    errors.push({ field: "title", message: "请输入广告标题" });
  } else if (data.title.length > 50) {
    errors.push({ field: "title", message: "标题最多 50 个字符" });
  }

  // publisher: 必填，最多 20 字符
  if (!data.publisher || data.publisher.trim() === "") {
    errors.push({ field: "publisher", message: "请输入发布人" });
  } else if (data.publisher.length > 20) {
    errors.push({ field: "publisher", message: "发布人名称最多 20 个字符" });
  }

  // content: 必填，最多 200 字符
  if (!data.content || data.content.trim() === "") {
    errors.push({ field: "content", message: "请输入内容文案" });
  } else if (data.content.length > 200) {
    errors.push({ field: "content", message: "内容文案最多 200 个字符" });
  }

  // redirectUrl: 必填，URL 格式
  if (!data.redirectUrl || data.redirectUrl.trim() === "") {
    errors.push({ field: "redirectUrl", message: "请输入落地页" });
  } else if (!URL_REGEX.test(data.redirectUrl.trim())) {
    errors.push({ field: "redirectUrl", message: "请输入正确的 URL 格式" });
  }

  // price: 必填，大于 0
  if (data.price === undefined || data.price === null) {
    errors.push({ field: "price", message: "请输入出价" });
  } else if (typeof data.price !== "number" || data.price <= 0) {
    errors.push({ field: "price", message: "出价必须大于 0" });
  }

  // videosInfo: 可选校验（如果需要必填可以取消注释）
  // if (!data.videosInfo || data.videosInfo.length === 0) {
  //   errors.push({ field: "videosInfo", message: "请上传视频" });
  // }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
