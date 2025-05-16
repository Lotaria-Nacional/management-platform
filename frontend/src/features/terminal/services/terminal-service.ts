import axios from "@/app/config/axios"
import { RegisterTerminalRequestDTO } from "../types"

export async function fetchAllTerminals() {
  const { data } = await axios.get("/terminal/all")
  return data
}

export async function uploadTerminals({ sim_card }: RegisterTerminalRequestDTO) {
  const formData = new FormData()
  formData.append("file", sim_card)

  const result = await axios.post("/terminal/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })

  return result
}
