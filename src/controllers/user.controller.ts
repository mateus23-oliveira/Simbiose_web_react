import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  private userService = new UserService();

  async create(req: Request, res: Response) {
    const user = await this.userService.criar(req.body);
    return res.json(user);
  }

}