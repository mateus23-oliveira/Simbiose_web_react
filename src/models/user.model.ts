import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../interfaces/user.interface";

export interface IUserDocument extends IUser, Document {}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const UserModel = mongoose.model<IUserDocument>("User", UserSchema);