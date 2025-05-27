import { useQuery } from "@tanstack/react-query"
import { fetchManyLicences } from "@/app/services/licences"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { LicenceEntity } from "../types"

export function useFetchLicences() {
  return useQuery<LicenceEntity[]>({
    queryKey: [TANSTACK_KEY.licence.fetch_many],
    queryFn: fetchManyLicences,
  })
}
