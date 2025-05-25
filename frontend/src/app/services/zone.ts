import axios from "@/app/config/axios"

export const fetchManyZones = async () => {
  const response = await axios.get("/zones")
  return response.data
}
