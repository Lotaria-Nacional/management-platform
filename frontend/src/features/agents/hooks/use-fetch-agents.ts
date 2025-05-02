import { useQuery } from "@tanstack/react-query"
import { fetchAgents } from "../services/agent-service"

export function useFetchAllAgents() {

  return useQuery({
    queryKey:["fetch-agents"],
    queryFn: fetchAgents,
  })

}
