import { useInfiniteQuery } from "@tanstack/react-query"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { fetchInfiniteAgents } from "../services/agent-service"

export function useFetchInfiniteAgents() {
  return useInfiniteQuery({
    queryKey: [TANSTACK_KEY.agent.fetch_infinite],
    queryFn: ({ pageParam = 1 }) => fetchInfiniteAgents(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.currentPage + 1
      return nextPage <= lastPage.totalPages ? nextPage : undefined
    },
  })
}
