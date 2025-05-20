import axios from "@/app/config/axios"
import { IAddPosRequestDTO, IEditPosRequestDTO } from "../types"

export async function addPos(data:IAddPosRequestDTO) {
  const response = await axios.post("/pos", data)
  return response.data
}

export async function fetchManyPos() {
  const response = await axios.get("/pos")
  return response.data
}

export async function getPosById(id:string) {
  const response = await axios.get(`/pos/${id}`)
  return response.data
}

export async function editPos(data:IEditPosRequestDTO) {
  const response = await axios.put(`/pos/${data.id}`, data)
  return response.data
}

export async function removePos(id:string) {
  const response = await axios.get(`/pos/${id}`)
  return response.data
}

