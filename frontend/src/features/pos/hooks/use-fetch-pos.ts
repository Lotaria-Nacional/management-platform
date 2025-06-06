import { IFetchPosResponse } from "../types"
import { useQuery } from "@tanstack/react-query"
import { fetchManyPos } from "../services/pos-service"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"

export function useFetchPos() {
  return useQuery<IFetchPosResponse>({
    queryKey: [TANSTACK_KEY.pos.fetch_many],
    queryFn: fetchManyPos,
  })
}
