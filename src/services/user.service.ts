import { IEspecie } from "../interfaces/user.interface";
import { EspecieModel } from "../models/user.model";

export class UserService {
  
  async criar(eSpecie: IEspecie) {
    return await EspecieModel.create(eSpecie);
  }

}