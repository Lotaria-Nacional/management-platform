import axios from "@/app/config/axios"

export const fetchManyTypes = async () => {
  const response = await axios.get("/types")
  return response.data
}
