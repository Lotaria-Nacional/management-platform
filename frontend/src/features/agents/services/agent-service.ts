import axios from "@/app/config/axios"
import { EditAgentRequestDTO, RegisterAgentRequestDTO } from "../types"

export async function fetchAgents(page = 1, limit = 10) {
  const result = await axios.get(`/agents?page=${page}&limit=${limit}`);
  console.log(result.data);
  return result.data; 
}

export async function registerAgent(data: RegisterAgentRequestDTO) {
  const result = await axios.post("/agents", data)
  return result.data
}

export async function editAgent(data: EditAgentRequestDTO) {
  const result = await axios.put(`/agents/${data.id}`, data)
  return result.data
}
