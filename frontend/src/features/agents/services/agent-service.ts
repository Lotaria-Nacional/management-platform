import axios from "@/app/config/axios"
import { EditAgentRequestDTO, IFetchAgentsResponse, RegisterAgentRequestDTO } from "../types"

export async function fetchInfiniteAgents(page?: number) {
  const result = await axios.get<IFetchAgentsResponse>(`/agents?page=${page}&limit=10`)
  const { data,total,totalPages } = result.data
  return { data, total, totalPages, currentPage: page ?? 0 }
}

export async function fetchAgents()  {
  const response = await axios.get<IFetchAgentsResponse>("/agents")
  const { data,total,totalPages } = response.data
  return {  data,  total,  totalPages }
}

export async function registerAgent(data: RegisterAgentRequestDTO) {
  const result = await axios.post("/agents", data)
  return result.data
}

export async function editAgent(data: EditAgentRequestDTO) {
  const result = await axios.put(`/agents/${data.id}`, data)
  return result.data
}
