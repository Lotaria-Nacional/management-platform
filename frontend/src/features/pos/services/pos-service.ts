import axios from "@/config/axios"

export async function fetchAllPos() {
  const { data } = await axios.get("/pos/all")
  return data
}
