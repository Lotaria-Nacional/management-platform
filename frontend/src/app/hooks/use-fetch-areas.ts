import { useQuery } from "@tanstack/react-query"
import { fetchManyAreas } from "@/app/services/area"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { AreaEntity } from "../types"

export function useFetchAreas() {
  return useQuery<AreaEntity[]>({
    queryKey: [TANSTACK_KEY.area.fetch_many],
    queryFn: fetchManyAreas,
  })
}
