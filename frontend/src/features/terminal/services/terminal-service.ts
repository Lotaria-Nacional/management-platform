import axios from "@/app/config/axios"
import { IAddTerminalRequestDTO, IEditTerminalRequestDTO } from "../types"

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
  const response  = await axios.get("/terminals")
  return response.data
}
