import { IUser } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";

export class UserService {
  
  async create(user: IUser) {
    return await UserModel.create(user);
  }

}