import { useQuery } from "@tanstack/react-query"
import { fetchManyProvinces } from "@/app/services/province"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { ProvinceEntity } from "../types"

export function useFetchProvinces() {
  return useQuery<ProvinceEntity[]>({
    queryKey: [TANSTACK_KEY.province.fetch_many],
    queryFn: fetchManyProvinces,
  })
}
