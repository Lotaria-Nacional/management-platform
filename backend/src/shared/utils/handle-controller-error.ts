import { AppError } from "@/core/errors/app-error"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { HttpResponse } from "@/core/http/http"
import { ZodError } from "zod"

export function handleControllerError(error: unknown): HttpResponse {
  if (error instanceof AppError) {
    return {
      body: { message: error.message },
      statusCode: error.statusCode,
    }
  }

  if (error instanceof ZodError) {
    return {
      body: { message: error.errors[0].message },
      statusCode: HttpStatusCode.BAD_REQUEST,
    }
  }

  console.error("Unhandled Error: " + error)

  return {
    body: { message: "Erro interno no servidor" },
    statusCode: 500,
  }
}
