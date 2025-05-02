import axios from "@/config/axios"

export async function fetchAllTerminals() {
  const { data } = await axios.get("/terminal/all")
  return data
}
