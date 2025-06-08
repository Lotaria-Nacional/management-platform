import { HttpStatusCode } from "../http/http-status-code"
import { AppError } from "./app-error"

export class BadRequestError extends AppError {
  constructor(message = "Bad Request") {
    super(message, HttpStatusCode.BAD_REQUEST)
  }
}
