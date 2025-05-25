import { useQuery } from "@tanstack/react-query"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { fetchManyAdministrations } from "@/app/services/administration"

export function useFetchAdministrations() {
  return useQuery({
    queryKey: [TANSTACK_KEY.administration.fetch_many],
    queryFn: fetchManyAdministrations,
  })
}
