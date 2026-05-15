import mongoose from "mongoose";
import{ createAdmin } from "./createAdmin";

export class Database {
  static async connect() {
    try {
      await mongoose.connect("mongodb://localhost:27017/api-especies");
      console.log("MongoDB conectado");
      await createAdmin();
    } catch (error) {
      console.error("Erro ao conectar no MongoDB", error);
    }
  }
}