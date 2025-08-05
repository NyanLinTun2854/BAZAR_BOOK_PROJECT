import AdminUser from "mongo/adminUser.mongo";
import { IAdmin, IAdminUserWithMeta } from "@customTypes/adminUser.interface";

const getAllAdminUsers = async (): Promise<IAdmin[]> => {
  return await AdminUser.find({}, { _id: 0, __v: 0 }).lean();
};

const createAdminUser = async (user: IAdmin): Promise<void> => {
  await AdminUser.create(user);
};

const verifyAdminUserByEmail = async (email: string): Promise<void> => {
  await AdminUser.updateOne({ email }, { $set: { email_verified: "1" } });
};

const updateAdminUserPassword = async (
  email: string,
  hashPassword: string
): Promise<void> => {
  await AdminUser.updateOne({ email }, { $set: { password: hashPassword } });
};

const getAdminUserByEmail = async (
  email: string
): Promise<IAdminUserWithMeta | null> => {
  return await AdminUser.findOne({ email }).lean();
};

const isAdminUserExisting = async (email: string): Promise<Boolean> => {
  return !!(await getAdminUserByEmail(email));
};

const getAdminUserByID = async (id: string): Promise<IAdmin | null> => {
  return await AdminUser.findById(id, { _id: 0, __v: 0 }).lean();
};

export {
  getAllAdminUsers,
  createAdminUser,
  isAdminUserExisting,
  getAdminUserByID,
  getAdminUserByEmail,
  verifyAdminUserByEmail,
  updateAdminUserPassword,
};
