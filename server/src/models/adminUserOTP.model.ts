import {
  IAdminUserOTP,
  IAdminUserOTPWithMeta,
} from "@customTypes/adminUserOTP.interface";
import AdminUserOTP from "mongo/adminUserOTP.mongo";

const getAdminUserOTPByOTP = async (
  otp: string
): Promise<IAdminUserOTPWithMeta | null> => {
  return await AdminUserOTP.findOne({ otp }).lean();
};

const getMostRecentAdminUserOTPByEmail = async (
  email: string
): Promise<IAdminUserOTPWithMeta[] | null> => {
  return await AdminUserOTP.find({ email })
    .sort({ createdAt: -1 })
    .limit(1)
    .lean();
};

const isAdminUserOTPExisting = async (otp: string): Promise<Boolean> => {
  return !!(await getAdminUserOTPByOTP(otp));
};

const createAdminUserOTP = async (data: IAdminUserOTP): Promise<void> => {
  await AdminUserOTP.create(data);
};

export {
  getAdminUserOTPByOTP,
  isAdminUserOTPExisting,
  createAdminUserOTP,
  getMostRecentAdminUserOTPByEmail,
};
