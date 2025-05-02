import axios from "@/config/axios"
import { TerminalRequestDTO } from "../types"

export async function fetchAllTerminals() {
  const { data } = await axios.get("/terminal/all")
  return data
}

export async function uploadTerminals({ file }: TerminalRequestDTO) {
  const formData = new FormData()
  formData.append("file", file)

  const result = await axios.post("/terminal/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })

  return result
}
