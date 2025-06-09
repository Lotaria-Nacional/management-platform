import { ApiMessageResponse } from "../types"

export function handleApiError(error: any): ApiMessageResponse {
  const message =
    error.response?.data?.message || "Erro de requisição inesperado"

  return {
    sucess: false,
    message,
  }
}
