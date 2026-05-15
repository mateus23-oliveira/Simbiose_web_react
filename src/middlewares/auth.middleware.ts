import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const authHeader = req.headers.authorization;

  if (!authHeader) {

    return res.status(401).json({
      erro: "Token não informado",
    });

  }

    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
    return res.status(401).json({ erro: "Token não fornecido" });
}

  try {

    jwt.verify(token, "SEGREDO_JWT");

    next();

  } catch {

    return res.status(401).json({
      erro: "Token inválido",
    });

  }
}