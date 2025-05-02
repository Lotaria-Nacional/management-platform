import { useState } from "react"
import { uploadPos } from "../services/pos-service"

export function useUploadPos() {
  const [sucess, setSucess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const upload = async (file: File) => {
    setIsLoading(true)
    setError(null)
    setSucess(false)

    try {
      await uploadPos({ file })
      setSucess(true)
    } catch (error: any) {
      setError(error?.message || "Erro ao enviar os ficheiros")
    } finally {
      setIsLoading(false)
    }
  }

  return { upload, isLoading, error, sucess }
}
