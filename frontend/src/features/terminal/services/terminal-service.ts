import axios from "@/app/config/axios"
import {
  IAddTerminalRequestDTO,
  IEditTerminalRequestDTO,
  ITerminalResponse,
} from "../types"

export async function addTerminal(data: IAddTerminalRequestDTO) {
  const response = await axios.post("/terminals", data)
  return response.data
}

export async function editTerminal(data: IEditTerminalRequestDTO) {
  const response = await axios.put(`/terminals/${data.id}`, data)
  return response.data
}

export async function getTerminalById(id: string) {
  const response = await axios.get(`/terminals/${id}`)
  return response.data
}

export async function removeTerminal(id: string) {
  const response = await axios.delete(`/terminals/${id}`)
  return response.data
}

export async function fetchManyTerminals() {
  const response = await axios.get("/terminals")
  return response.data
}

export async function fetchInfiniteTerminals(
  page?: number
): Promise<ITerminalResponse> {
  const response = await axios.get(`/terminals?page=${page}&limit=10`)

  return {
    terminals: response.data,
    currentPage: page ?? 0,
    totalPages: response.data.totalPages,
  }
}
