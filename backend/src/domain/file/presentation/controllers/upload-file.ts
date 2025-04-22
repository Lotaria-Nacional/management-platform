import fs from "fs";
import path from "path";
import { Request, Response } from "express";
import { ProcessFileUseCase } from "../../application/use-cases/process-file";

export class UploadFileController {
  constructor(private processFileUseCase: ProcessFileUseCase) {}

  async handle(req: Request, res: Response) {
    const file = req.file as Express.Multer.File;

    if (!file) {
      return res.status(400).json({ error: "Arquivo não enviado." });
    }

    try {
      // 1. Define o caminho do arquivo salvo
      const uploadDir = path.resolve("src/app/upload");
      const filePath = path.join(uploadDir, file.originalname);

      // 2. Cria a pasta se não existir
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      // 3. Salva o arquivo no servidor
      fs.writeFileSync(filePath, file.buffer);

      // 4. Processa o conteúdo do arquivo
      const result = await this.processFileUseCase.execute(file.buffer);

      // 5. Salva o resultado no formato JSON
      const resultJsonPath = path.join(uploadDir, "sales_&_reconciliation.json");
      fs.writeFileSync(resultJsonPath, JSON.stringify(result, null, 2));

      res.status(200).json({ message: "Arquivo processado com sucesso.", result });
    } catch (error) {
      console.error("Erro no upload:", error);
      res.status(500).json({ error: "Erro ao processar o arquivo." });
    }
  }
}
