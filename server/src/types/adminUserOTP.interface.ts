import { Types } from "mongoose";

export interface IAdminUserOTP {
  email: string;
  otp: string;
  createdAt?: Date;
}

export type IAdminUserOTPWithMeta = IAdminUserOTP & {
  _id: Types.ObjectId;
  __v?: number;
};
