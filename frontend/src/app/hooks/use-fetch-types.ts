import { useQuery } from "@tanstack/react-query"
import { fetchManyTypes } from "@/app/services/type"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { TypeEntity } from "../types"

export function useFetchTypes() {
  return useQuery<TypeEntity[]>({
    queryKey: [TANSTACK_KEY.types.fetch_many],
    queryFn: fetchManyTypes,
  })
}
