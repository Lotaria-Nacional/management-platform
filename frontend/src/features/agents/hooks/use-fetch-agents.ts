import { AgentEntity } from "../types";
import { useQuery } from "@tanstack/react-query";
import { fetchAgents } from "../services/agent-service";
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys";

type AgentsResponse = {
  agents: AgentEntity[];
  total: number;
  totalPages: number;
};

export function useFetchAllAgents(page?:number, limit?:number) {
  return useQuery<AgentsResponse>({
    queryKey: [TANSTACK_KEY.agent.fetch_many, page, limit],
    queryFn: () => fetchAgents(page, limit),
  });
}