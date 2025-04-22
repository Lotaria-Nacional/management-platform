import multer from "multer"
import express from "express"
import { UploadFileController } from "../controllers/upload-file"
import { adaptExpressRoute } from "../adapters/express-controller-adapter"
import { ProcessFileUseCase } from "../../application/use-cases/process-file"
import { ExcelFileReader } from "../../infrastructure/readers/excel-file-reader"

const upload = multer({ storage:multer.memoryStorage() })

const fileRoutes = express.Router()

const excelFileReader = new ExcelFileReader()
const processFileUseCase = new ProcessFileUseCase(excelFileReader)
const uploadFileController = new UploadFileController(processFileUseCase)

fileRoutes.post("/upload", upload.single("file"), adaptExpressRoute(uploadFileController))

export default fileRoutes