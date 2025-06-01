import axios from "@/app/config/axios"
import {
  EditAgentRequestDTO,
  IAgentsResponse,
  RegisterAgentRequestDTO,
} from "../types"

export async function fetchInfiniteAgents(
  page?: number
): Promise<IAgentsResponse> {
  const result = await axios.get(`/agents?page=${page}&limit=10`)

  return {
    agents: result.data.agents,
    currentPage: page ?? 0,
    totalPages: result.data.totalPages,
  }
}
export async function fetchAgents() {
  const result = await axios.get("/agents")
  return result.data
}

export async function registerAgent(data: RegisterAgentRequestDTO) {
  const result = await axios.post("/agents", data)
  return result.data
}

export async function editAgent(data: EditAgentRequestDTO) {
  const result = await axios.put(`/agents/${data.id}`, data)
  return result.data
}
