import axios from "@/config/axios"
import { PosRequestDTO } from "../types"

export async function fetchAllPos() {
  const { data } = await axios.get("/pos/all")
  return data
}

export async function uploadPos({ file }: PosRequestDTO) {
  const formData = new FormData()
  formData.append("file", file)

  const result = await axios.post("/pos/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })

  return result
}
