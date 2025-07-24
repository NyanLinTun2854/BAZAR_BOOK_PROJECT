import User from "mongo/authUser.mongo";
import { IUser, IUserWithMeta } from "@customTypes/authUser.interface";

const getAllUsers = async (): Promise<IUser[]> => {
  return await User.find({}, { _id: 0, __v: 0 }).lean();
};

const createUser = async (user: IUser): Promise<void> => {
  await User.create(user);
};

const getUserByEmail = async (email: string): Promise<IUserWithMeta | null> => {
  return await User.findOne({ email }).lean();
};

const isUserExisting = async (email: string): Promise<Boolean> => {
  return !!(await getUserByEmail(email));
};

const getUserByID = async (id: string): Promise<IUser | null> => {
  return await User.findById(id, { _id: 0, __v: 0 }).lean();
};

export { getAllUsers, createUser, isUserExisting, getUserByID, getUserByEmail };
