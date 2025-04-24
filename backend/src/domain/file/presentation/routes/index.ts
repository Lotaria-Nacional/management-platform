import multer from "multer"
import express from "express"
import { UploadFileController } from "../controllers/upload-file.controller"
import { adaptExpressRoute } from "../adapters/express-controller.adapter"
import { ProcessFileUseCase } from "../../application/use-cases/process-file.useCase"
import { ExcelFileReader } from "../../infrastructure/services/excel-file.reader"

const upload = multer({ storage:multer.memoryStorage() })

const fileRoutes = express.Router()
const excelFileReader = new ExcelFileReader()

const processFileUseCase = new ProcessFileUseCase(excelFileReader)
const uploadFileController = new UploadFileController(processFileUseCase)

fileRoutes.post("/upload", upload.single("file"), adaptExpressRoute(uploadFileController))
// fileRoutes.get("/get-", upload.single("file"), adaptExpressRoute(uploadFileController))

export default fileRoutes