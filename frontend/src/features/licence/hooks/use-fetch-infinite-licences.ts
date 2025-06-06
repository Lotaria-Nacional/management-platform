import { TANSTACK_KEY } from "@/app/constants/tanstack-keys";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchManyLicences } from "../services";

export function useFetchInfiniteLicences(){
    return useInfiniteQuery({
        queryKey:[TANSTACK_KEY.licence.fetch_infinite],
        queryFn:({ pageParam })=>fetchManyLicences(pageParam),
        initialPageParam:1,
        getNextPageParam:(lastPage)=> {
            const nextPage = lastPage.currentPage + 1
            return nextPage <= lastPage.totalPages ? nextPage : undefined
        }
    })
}