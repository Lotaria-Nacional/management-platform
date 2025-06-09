import axios from "@/app/config/axios"
import { IFetchPosResponse } from "../types"
import { ApiMessageResponse } from "@/app/types"
import { AddPosDTO } from "../validation/add-pos-schema"
import { EditPosDTO } from "../validation/edit-pos-schema"
import { handleApiError } from "@/app/utils/handle-api-error"

export async function addPos(data: AddPosDTO) {
  try {
    const response = await axios.post<ApiMessageResponse>("/pos", data)
    const { message, sucess } = response.data
    return { message, sucess }
  } catch (error) {
    return handleApiError(error)    
  }
}

export async function editPos(data: EditPosDTO) {
  try {
    const response = await axios.put<ApiMessageResponse>(`/pos/${data.id}`, data)
    const { message, sucess } = response.data
    return { sucess, message }
  } catch (error) {
    return handleApiError(error)
  }
}

export async function removePos(id: string) {
  try {
    const response = await axios.delete<ApiMessageResponse>(`/pos/${id}`)
    const { message, sucess } = response.data
    return { sucess, message }
  } catch (error) {
    return handleApiError(error)
  }
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
