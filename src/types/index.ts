export interface Request extends Express.Request {
  // 自定义请求属性可以在这里添加
}

export interface Response extends Express.Response {
  // 自定义响应属性可以在这里添加
}

interface advertisementMeta {
  id: string;
  title: string;
  publisher: string;
  redirectUrl: string;
  price: number;
  clickCount: number;
}
