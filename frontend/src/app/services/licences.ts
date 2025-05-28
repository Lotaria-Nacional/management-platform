import axios from "@/app/config/axios"

export const fetchManyLicences = async () => {
  const response = await axios.get("/licences")
  return response.data
}
