import { Agent } from "../types"
import { fetchAgents } from "../services/agent-service"
import { useEffect, useState } from "react"

export function useFetchAllAgents(): { agents: Agent[] } {
  const [agents, setAgents] = useState<Agent[]>([])

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchAgents()
      setAgents(data)
    }
    fetch()
  }, [])

  return { agents }
}
