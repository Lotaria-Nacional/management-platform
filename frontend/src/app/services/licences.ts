import axios from "@/app/config/axios"

export const fetchManyLicences = async () => {
  const response = await axios.get("/licences")
  console.log(response.data)
  return response.data
}