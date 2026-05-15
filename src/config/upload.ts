import multer from "multer";
import path from "path";

const storage = multer.diskStorage({

  destination(req, file, callback) {

    callback(null, "uploads/");
  },

  filename(req, file, callback) {

    const nomeArquivo =
      Date.now() +
      "-" +
      file.originalname.replace(/\s/g, "");

    callback(null, nomeArquivo);
  },
});

export const upload = multer({

  storage,

  fileFilter(req, file, callback) {

    const tiposPermitidos = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "application/pdf",
    ];

    if (!tiposPermitidos.includes(file.mimetype)) {

      return callback(
        new Error("Tipo de arquivo não permitido")
      );
    }

    callback(null, true);
  },

  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});