import axios from "@/app/config/axios"
import {
  IAddTerminalRequestDTO,
  IEditTerminalRequestDTO,
  IFetchTerminalResponse,
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

  const response = await axios.get<IFetchTerminalResponse>("/terminals")
  
  const { data, total, totalPages } = response.data

  return {
    data,
    total,
    totalPages
  }
}

export async function fetchInfiniteTerminals(page?: number){

  const response = await axios.get<IFetchTerminalResponse>(`/terminals?page=${page}&limit=10`)
  const { data, total, totalPages }  = response.data 

  return {
    data,
    total,
    totalPages,
    currentPage: page ?? 0,
  }
}
