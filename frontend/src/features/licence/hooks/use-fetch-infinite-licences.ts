import { fetchInfiniteLicences } from "../services";
import { useInfiniteQuery } from "@tanstack/react-query";
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys";

export function useFetchInfiniteLicences(){
    return useInfiniteQuery({
        queryKey:[TANSTACK_KEY.licence.fetch_infinite],
        queryFn:({ pageParam })=>fetchInfiniteLicences(pageParam),
        initialPageParam:1,
        getNextPageParam:(lastPage)=> {
            const nextPage = lastPage.currentPage + 1
            return nextPage <= lastPage.totalPages ? nextPage : undefined
        }
    })
}