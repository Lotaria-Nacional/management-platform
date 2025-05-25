import { useQuery } from "@tanstack/react-query"
import { fetchManyZones } from "@/app/services/zone"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { ZoneEntity } from "../types"

export function useFetchZones() {
  return useQuery<ZoneEntity[]>({
    queryKey: [TANSTACK_KEY.zone.fetch_many],
    queryFn: fetchManyZones,
  })
}
