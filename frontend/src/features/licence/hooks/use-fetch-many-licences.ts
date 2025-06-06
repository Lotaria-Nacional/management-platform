import { useQuery } from "@tanstack/react-query"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { fetchManyLicences } from "../services"

export function useFetchLicences() {
  return useQuery({
    queryKey: [TANSTACK_KEY.licence.fetch_many],
    queryFn: fetchManyLicences,
  })
}
