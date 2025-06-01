import { useInfiniteQuery } from "@tanstack/react-query"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { fetchInfiniteTerminals } from "../services/terminal-service"

export function useFetchInfiniteTerminals() {
  return useInfiniteQuery({
    queryKey: [TANSTACK_KEY.terminal.fetch_infinite],
    queryFn: ({ pageParam = 1 }) => fetchInfiniteTerminals(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.currentPage + 1
      return nextPage <= lastPage.totalPages ? nextPage : undefined
    },
  })
}
