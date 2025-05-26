import axios from "@/app/config/axios"


export const fetchManyCities = async () => {
  const response = await axios.get("/cities")
  
  return response.data
}
