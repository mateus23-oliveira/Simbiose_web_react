import express from "express";
import userRoutes from "./routes/user.routes";
import { Database } from "./config/database";

const app = express();

app.use(express.json());

Database.connect();

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});