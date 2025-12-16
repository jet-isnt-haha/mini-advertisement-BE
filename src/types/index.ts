export interface Request extends Express.Request {
  // 自定义请求属性可以在这里添加
}

export interface Response extends Express.Response {
  // 自定义响应属性可以在这里添加
}

export interface advertisementMeta {
  id: string;
  title: string;
  publisher: string;
  content: string;
  redirectUrl: string;
  price: number;
  clickCount: number;
  videosInfo?: videoInfoMeta[];
  sourceId?: string;
}

export interface videoInfoMeta {
  uid: string;
  name: string;
  url: string;
}

export interface DBjson {
  ads: advertisementMeta[]; // 广告列表
}

export interface DataAccess {
  read: () => Promise<DBjson>;
  write: (data: DBjson) => Promise<void>;
}

export interface ApiResponse<T> {
  code: number;
  data: T | null;
  message?: string;
}
