import { useQuery } from "@tanstack/react-query"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { fetchManyAdministrations } from "@/app/services/administration"
import { AdministrationEntity } from "../types"

export function useFetchAdministrations() {
  return useQuery<AdministrationEntity[]>({
    queryKey: [TANSTACK_KEY.administration.fetch_many],
    queryFn: fetchManyAdministrations,
  })
}
