import { useState } from "react"
import { uploadTerminals } from "../services/terminal-service"

export function useUploadTerminals() {
  const [sucess, setSucess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const upload = async (file: File) => {
    setIsLoading(true)
    setError(null)
    setSucess(false)

    try {
      await uploadTerminals({ file })
      setSucess(true)
    } catch (error: any) {
      setError(error?.message || "Erro ao enviar os ficheiros")
    } finally {
      setIsLoading(false)
    }
  }

  return { upload, isLoading, error, sucess }
}
