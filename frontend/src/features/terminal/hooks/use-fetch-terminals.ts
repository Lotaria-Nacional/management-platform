import { Terminal } from "../types"
import { useEffect, useState } from "react"
import { fetchAllTerminals } from "../services/terminal-service"

export function useFetchTerminals() {
  const [terminals, setTerminals] = useState<Terminal[]>([])

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchAllTerminals()
      setTerminals(data)
    }
    fetch()
  }, [])

  return { terminals }
}
