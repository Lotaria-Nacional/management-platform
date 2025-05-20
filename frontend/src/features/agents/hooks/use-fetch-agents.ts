import { AgentEntity } from "../types"
import { useQuery } from "@tanstack/react-query"
import { fetchAgents } from "../services/agent-service"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"

export function useFetchAllAgents() {

  return useQuery<AgentEntity[]>({
    queryKey:[TANSTACK_KEY.agent.fetch_many],
    queryFn: fetchAgents,
  })

}
