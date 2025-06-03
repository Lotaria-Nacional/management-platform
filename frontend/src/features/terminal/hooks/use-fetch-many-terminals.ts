import { useQuery } from "@tanstack/react-query"
import { IFetchTerminalResponse } from "../types"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { fetchManyTerminals } from "../services/terminal-service"

export function useFetchTerminals() {
  return useQuery<IFetchTerminalResponse>({
    queryKey: [TANSTACK_KEY.terminal.fetch_many],
    queryFn: fetchManyTerminals,
  })
}
