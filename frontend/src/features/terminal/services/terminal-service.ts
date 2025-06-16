import axios from "@/app/config/axios"
import { ApiMessageResponse } from "@/app/types"
import { IFetchTerminalResponse } from "../types"
import { handleApiError } from "@/app/utils/handle-api-error"
import { AddTerminalDTO } from "../validations/add-terminal-schema"
import { EditTerminalDTO } from "../validations/edit-terminal-schema"

export async function addTerminal(data: AddTerminalDTO) {
  try {
    const response = await axios.post<ApiMessageResponse>("/terminals", data)
    return {
      sucess: true,
      message: response.data.message,
    }
  } catch (error) {
    return handleApiError(error)
  }
}

export async function editTerminal(data: EditTerminalDTO) {
  try {
    const response = await axios.put<ApiMessageResponse>(
      `/terminals/${data.id}`,
      data
    )
    return { message: response.data.message, sucess: true }
  } catch (error) {
    return handleApiError(error)
  }
}

export async function getTerminalById(id: string) {
  const response = await axios.get(`/terminals/${id}`)
  return response.data
}

export async function removeTerminal(id: string) {
  try {
    const response = await axios.delete<ApiMessageResponse>(`/terminals/${id}`)
    return { message: response.data.message, sucess: true }
  } catch (error) {
    return handleApiError(error)
  }
}

export async function fetchManyTerminals() {
  const response = await axios.get<IFetchTerminalResponse>("/terminals")

  const { data, total, totalPages } = response.data

  console.log(data)

  return {
    data,
    total,
    totalPages,
  }
}

export async function fetchInfiniteTerminals(
  page: number = 1,
  filters?: Record<string, string>
) {
  const params = new URLSearchParams()

  params.set("page", String(page))
  params.set("limit", "10")

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
  }

  const response = await axios.get<IFetchTerminalResponse>(
    `/terminals?${params.toString()}`
  )

  const { data, total, totalPages } = response.data

  return {
    data,
    total,
    totalPages,
    currentPage: page,
  }
}
