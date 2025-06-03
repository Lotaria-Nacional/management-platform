import axios from "@/app/config/axios"
import { IAddPosRequestDTO, IEditPosRequestDTO, IFetchPosResponse } from "../types"

export async function addPos(data: IAddPosRequestDTO) {
  const response = await axios.post("/pos", data)
  return response.data
}

export async function fetchManyPos() {
  const response = await axios.get<IFetchPosResponse>("/pos")
  const { data, total, totalPages } = response.data
  return { data, total, totalPages }
}

export async function fetchInfinitePos(page: number) {
  const response = await axios.get<IFetchPosResponse>(`/pos?page=${page}&limit=10`)
  const { data,total,totalPages } = response.data
  return { data,total,totalPages,currentPage: page }
}

export async function getPosById(id: string) {
  const response = await axios.get(`/pos/${id}`)
  return response.data
}

export async function editPos(data: IEditPosRequestDTO) {
  const response = await axios.put(`/pos/${data.id}`, data)
  return response.data
}

export async function removePos(id: string) {
  const response = await axios.delete(`/pos/${id}`)
  return response.data
}
