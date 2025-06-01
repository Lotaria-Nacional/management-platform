import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { useQuery } from "@tanstack/react-query"
import { fetchAgents } from "../services/agent-service"
import { AgentsResponse } from "./use-fetch-infinite-agents"

export function useFetchAllAgents() {
  return useQuery<AgentsResponse>({
    queryKey: [TANSTACK_KEY.agent.fetch_many],
    queryFn: fetchAgents,
  })
}
