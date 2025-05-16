import axios from "@/app/config/axios"
import { EditAgentRequestDTO, RegisterAgentRequestDTO } from "../types"

export async function fetchAgents() {
  const result = await axios.get("/agents/all")
  return result.data
}

export async function registerAgent(data: RegisterAgentRequestDTO) {
  const result = await axios.post("/agents/register", data)
  return result.data
}

export async function editAgent(data: EditAgentRequestDTO) {
  console.log(data)

  const result = await axios.put(`/agents/${data.id}`, data)

  return result.data
}

