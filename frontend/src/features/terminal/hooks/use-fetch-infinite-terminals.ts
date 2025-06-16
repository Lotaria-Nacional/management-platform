// use-fetch-infinite-terminals.ts
import { useInfiniteQuery } from "@tanstack/react-query"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { fetchInfiniteTerminals } from "../services/terminal-service"

type Filters = Record<string, string>

export function useFetchInfiniteTerminals(filters?: Filters) {
  return useInfiniteQuery({
    queryKey: [TANSTACK_KEY.terminal.fetch_infinite, filters],
    queryFn: ({ pageParam = 1 }) => fetchInfiniteTerminals(pageParam, filters),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.currentPage + 1
      return nextPage <= lastPage.totalPages ? nextPage : undefined
    },
  })
}
