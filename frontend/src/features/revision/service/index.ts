import axios from "@/app/config/axios"
import { IMakeAgentRevisionRequestDTO } from "../types"

export const makeAgentRevision = async (data: IMakeAgentRevisionRequestDTO) => {
  try {
    const response = await axios.post("/revisions", data)
    return response.data
  } catch (error: any) {
    console.log(error.message)
  }
}

export const fetchManyRevisions = async () => {
  try {
    const response = await axios.get("/revisions")
    return response.data
  } catch (error: any) {
    console.log(error.message)
  }
}
