import axios from "@/config/axios"
import { AgentRequestDTO } from "../types"

export async function fetchAgents() {
  const result = await axios.get("/agents/all")
  return result.data
}

export async function uploadAgents({ file }: AgentRequestDTO) {
  const formData = new FormData()
  formData.append("file", file)

  const result = await axios.post("/agents/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })

  return result
}
