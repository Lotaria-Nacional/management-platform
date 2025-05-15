import { useQuery } from "@tanstack/react-query";
import { fetchManyRevisions } from "../service";
import { RevisionEntity } from "../types";

export function useFetchManyRevisions(){
    return useQuery<RevisionEntity[]>({
        queryKey:["fetch-many-revisions"],
        queryFn: fetchManyRevisions
    })
}