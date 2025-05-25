import axios from "@/app/config/axios"

export const fetchManyProvinces = async () => {
  const response = await axios.get("/provinces")
  return response.data
}
