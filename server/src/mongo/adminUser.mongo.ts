import { IAdmin } from "@customTypes/adminUser.interface";
import mongoose, { Model, Schema } from "mongoose";

export interface IAdminDocument extends IAdmin, Document {}

const adminUserSchema: Schema<IAdminDocument> =
  new mongoose.Schema<IAdminDocument>(
    {
      name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 6,
      },
    },
    {
      timestamps: true,
    }
  );

const AdminUser: Model<IAdminDocument> = mongoose.model<IAdminDocument>(
  "adminUser",
  adminUserSchema
);

export default AdminUser;
