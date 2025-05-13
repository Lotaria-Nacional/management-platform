import axios from "@/config/axios"
import { EditAgentRequestDTO, RegisterAgentRequestDTO, VerifyAgentRequestDTO } from "../types"

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

export async function verifyAgent({ additional_info,image,items  }: VerifyAgentRequestDTO) {
  const formData = new FormData()

  formData.append("image", image)
  formData.append("items", JSON.stringify(items))
  formData.append("additional_info", additional_info)

  const result = await axios.post("/agents/verify", formData)

  return result
}
