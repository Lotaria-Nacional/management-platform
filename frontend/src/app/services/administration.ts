import axios from "@/app/config/axios"

export const fetchManyAdministrations = async () => {
  const response = await axios.get("/administrations")
  
  return response.data
}
