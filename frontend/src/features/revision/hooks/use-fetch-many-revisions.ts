import { RevisionEntity } from "../types";
import { fetchManyRevisions } from "../service";
import { useQuery } from "@tanstack/react-query";
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys";

export function useFetchManyRevisions(){
    return useQuery<RevisionEntity[]>({
        queryKey:[TANSTACK_KEY.revision.fetch_many],
        queryFn: fetchManyRevisions
    })
}