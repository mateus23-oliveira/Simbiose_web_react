import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {

  private authService = new AuthService();

  async registrar(req: Request, res: Response) {

    try {

      const usuario = await this.authService.registrar(req.body);

      return res.json(usuario);

    } catch (error: any) {

      return res.status(400).json({
        erro: error.message,
      });

    }
  }

  async login(req: Request, res: Response) {

    try {

      const { email, senha } = req.body;

      const resultado = await this.authService.login(
        email,
        senha
      );

      return res.json(resultado);

    } catch (error: any) {

      return res.status(400).json({
        erro: error.message,
      });

    }
  }
}