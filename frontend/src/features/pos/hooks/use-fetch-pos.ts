import { Pos } from "../types"
import { useEffect, useState } from "react"
import { fetchAllPos } from "../services/pos-service"

export function useFetchPos() {
  const [pos, setPos] = useState<Pos[]>([])

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchAllPos()
      setPos(data)
    }
    fetch()
  }, [])

  return { pos }
}
