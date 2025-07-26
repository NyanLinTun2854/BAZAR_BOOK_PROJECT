export interface ICommonRsp<T = any> {
  status: string;
  status_code: string;
  data?: T;
  message?: string;
}

export interface data {
  access_token: string;
}
