import axios from "@/app/config/axios"
import { IFetchPosResponse } from "../types"
import { ApiMessageResponse } from "@/app/types"
import { AddPosDTO } from "../validation/add-pos-schema"
import { EditPosDTO } from "../validation/edit-pos-schema"
import { handleApiError } from "@/app/utils/handle-api-error"

export async function addPos(data: AddPosDTO) {
  try {
    const response = await axios.post<ApiMessageResponse>("/pos", data)
    const { message } = response.data
    return { sucess: true, message }
  } catch (error) {
    return handleApiError(error)
  }
}

export async function editPos(data: EditPosDTO) {
  try {
    const response = await axios.put<ApiMessageResponse>(
      `/pos/${data.id}`,
      data
    )
    const { message } = response.data
    return { sucess: true, message }
  } catch (error) {
    return handleApiError(error)
  }
}

export async function removePos(id: string) {
  try {
    const response = await axios.delete<ApiMessageResponse>(`/pos/${id}`)
    const { message } = response.data
    return { sucess: true, message }
  } catch (error) {
    return handleApiError(error)
  }
}

export async function fetchManyPos() {
  const response = await axios.get<IFetchPosResponse>("/pos?page=&limit=")
  const { data, total, totalPages } = response.data
  
  console.log(data);
  
  return { data, total, totalPages }
}

export async function fetchInfinitePos(
  page: number,
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

  const response = await axios.get<IFetchPosResponse>(
    `/pos?${params.toString()}`
  )
  const { data, total, totalPages } = response.data

  return { data, total, totalPages, currentPage: page }
}

export async function getPosById(id: string) {
  const response = await axios.get(`/pos/${id}`)
  return response.data
}
