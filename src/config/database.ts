import mongoose from "mongoose";

export class Database {
  static async connect() {
    try {
      await mongoose.connect("mongodb://localhost:27017/api-especies");
      console.log("MongoDB conectado");
    } catch (error) {
      console.error("Erro ao conectar no MongoDB", error);
    }
  }
}