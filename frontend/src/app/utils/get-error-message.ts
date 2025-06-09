import { isAxiosError } from "axios"

export function getErrorMessage(error: unknown): string {
  const unknownError = "Erro desconhecido"
  if (isAxiosError(error)) {
    return error.response?.data.message || error.message || unknownError
  }
  if (error instanceof Error) {
    return error.message
  }
  return unknownError
}
