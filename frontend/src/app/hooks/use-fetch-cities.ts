import { useQuery } from "@tanstack/react-query"
import { fetchManyCities } from "@/app/services/city"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"

export function useFetchCities() {
  return useQuery({
    queryKey: [TANSTACK_KEY.city.fetch_many],
    queryFn: fetchManyCities,
  })
}
