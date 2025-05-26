import { useQuery } from "@tanstack/react-query"
import { fetchManyCities } from "@/app/services/city"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { CityEntity } from "../types"

export function useFetchCities() {
  return useQuery<CityEntity[]>({
    queryKey: [TANSTACK_KEY.city.fetch_many],
    queryFn: fetchManyCities,
  })
}
