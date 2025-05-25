import { useQuery } from "@tanstack/react-query"
import { fetchManyTypes } from "@/app/services/type"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"

export function useFetchTypes() {
  return useQuery({
    queryKey: [TANSTACK_KEY.types.fetch_many],
    queryFn: fetchManyTypes,
  })
}
