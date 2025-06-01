import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchInfinitePos } from "../services/pos-service"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"

export function useFetchInfinitePos() {
  return useInfiniteQuery({
    queryKey: [TANSTACK_KEY.pos.fetch_infinite],
    queryFn: ({ pageParam }) => fetchInfinitePos(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.currentPage + 1
      return nextPage <= lastPage.totalPages ? nextPage : undefined
    },
  })
}
