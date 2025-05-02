import axios from "@/config/axios"

export async function fetchAgents() {
  const result = await axios.get("/agents/all")
  return result.data
}
