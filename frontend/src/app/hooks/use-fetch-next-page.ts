import { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult } from "@tanstack/react-query";
import { useEffect } from "react";

type Props<T> = {
    inView:boolean
    hasNextPage:boolean
    isFetchingNextPage:boolean
    fetchNextPage:(options?: FetchNextPageOptions | undefined)=> Promise<InfiniteQueryObserverResult<InfiniteData<{
        data: T[];
        total: number;
        totalPages: number;
        currentPage: number 
    }, unknown>, Error>>
}

export function useFetchNextPage<T>({ fetchNextPage, hasNextPage, inView, isFetchingNextPage }:Props<T>){
      useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);
}