import { JwtPayload } from "jsonwebtoken";
import { Types } from "mongoose";

export interface IAdmin {
  name: string;
  email: string;
  password?: string;
}

export interface IUserFromTokenDecode extends JwtPayload {
  _id: Types.ObjectId;
  name: string;
  email: string;
}

export type IUserWithMeta = IAdmin & { _id: Types.ObjectId; __v?: number };

export interface ILoginServiceResp {
  accessToken: string;
  refreshToken: string;
}

export interface IRefreshServiceResp {
  newAccessToken: string;
  newRefreshToken: string;
}
