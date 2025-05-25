import axios from "@/app/config/axios"

export const fetchManyAreas = async () => {
  const response = await axios.get("/areas")
  return response.data
}
