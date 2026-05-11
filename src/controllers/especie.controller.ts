import { Request, Response } from "express";
import { EspecieService } from "../services/user.service";

export class EspecieController {
  private especieService = new EspecieService();

  async create(req: Request, res: Response) {
    const especie = await this.especieService.criar(req.body);
    return res.json(especie);
  }
  
  async listar(req: Request, res: Response) {

    const especies = await this.especieService.listar();

    return res.json(especies);
  }

  async buscarPorId(req: Request, res: Response) {

    const especie = await this.especieService.buscarPorId(req.params.id as string);

    return res.json(especie);
  }

  async atualizar(req: Request, res: Response) {

    const especie = await this.especieService.atualizar(
      req.params.id as string,
      req.body
    );

    return res.json(especie);
  }

  async deletar(req: Request, res: Response) {

    await this.especieService.deletar(req.params.id as string);

    return res.json({
      mensagem: "Espécie deletada com sucesso"
    });

  }
}
