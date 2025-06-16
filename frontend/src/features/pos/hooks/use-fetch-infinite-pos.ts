import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchInfinitePos } from "../services/pos-service"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"

type Filters = Record<string, string>

export function useFetchInfinitePos(filters?: Filters) {
  return useInfiniteQuery({
    queryKey: [TANSTACK_KEY.pos.fetch_infinite, filters],
    queryFn: ({ pageParam = 1 }) => fetchInfinitePos(pageParam, filters),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.currentPage + 1
      return nextPage <= lastPage.totalPages ? nextPage : undefined
    },
  })
}
