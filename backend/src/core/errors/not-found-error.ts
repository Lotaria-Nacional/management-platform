import { HttpStatusCode } from "../http/http-status-code"
import { AppError } from "./app-error"

export class NotFoundError extends AppError {
  constructor(message = "Not Found") {
    super(message, HttpStatusCode.NOT_FOUND)
  }
}
