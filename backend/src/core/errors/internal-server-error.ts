import { HttpStatusCode } from "../http/http-status-code"
import { AppError } from "./app-error"

export class InternalServerError extends AppError {
  constructor(message = "Internal Server Error") {
    super(message, HttpStatusCode.INTERNAL_SERVER_ERROR)
  }
}
