import { TerminalEntity } from "../types"
import { useQuery } from "@tanstack/react-query"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { fetchManyTerminals } from "../services/terminal-service"

export function useFetchTerminals() {
  return useQuery<TerminalEntity[]>({
    queryKey: [TANSTACK_KEY.terminal.fetch_many],
    queryFn: fetchManyTerminals,
  })
}
