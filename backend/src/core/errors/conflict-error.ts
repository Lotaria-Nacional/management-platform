import { HttpStatusCode } from "../http/http-status-code"
import { AppError } from "./app-error"

export class ConflictError extends AppError {
  constructor(message = "Conflict") {
    super(message, HttpStatusCode.CONFLICT)
  }
}
