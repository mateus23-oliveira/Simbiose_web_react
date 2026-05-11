import { Router } from "express";
import { EspecieController } from "../controllers/especie.controller";

const router = Router();
const controller = new EspecieController();

router.post("/", (req, res) => controller.create(req, res));
router.get("/", (req, res) => controller.listar(req, res));
router.get("/:id", (req, res) => controller.buscarPorId(req, res));
router.put("/:id", (req, res) => controller.atualizar(req, res));
router.delete("/:id", (req, res) => controller.deletar(req, res));

export default router;