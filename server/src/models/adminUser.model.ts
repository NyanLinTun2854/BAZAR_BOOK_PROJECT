import AdminUser from "mongo/adminUser.mongo";
import { IAdmin, IUserWithMeta } from "@customTypes/adminUser.interface";

const getAllAdminUsers = async (): Promise<IAdmin[]> => {
  return await AdminUser.find({}, { _id: 0, __v: 0 }).lean();
};

const createAdminUser = async (user: IAdmin): Promise<void> => {
  await AdminUser.create(user);
};

const getAdminUserByEmail = async (
  email: string
): Promise<IUserWithMeta | null> => {
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
};
