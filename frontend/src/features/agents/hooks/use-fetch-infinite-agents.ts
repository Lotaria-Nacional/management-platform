import { useInfiniteQuery } from "@tanstack/react-query"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { fetchInfiniteAgents } from "../services/agent-service"
import { useSearchParams } from "react-router-dom"

export function useFetchInfiniteAgents() {
  const [searchParams] = useSearchParams()

  const filters = Object.fromEntries(searchParams.entries())

  return useInfiniteQuery({
    queryKey: [TANSTACK_KEY.agent.fetch_infinite, filters],
    queryFn: ({ pageParam = 1 }) => fetchInfiniteAgents(pageParam, filters),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.currentPage + 1
      return nextPage <= lastPage.totalPages ? nextPage : undefined
    },
  })
}
