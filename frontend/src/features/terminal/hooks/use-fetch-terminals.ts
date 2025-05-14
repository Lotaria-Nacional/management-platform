import { useQuery } from "@tanstack/react-query"
import { fetchAllTerminals } from "../services/terminal-service"
import { TerminalEntity } from "../types"

export function useFetchTerminals() {

  return useQuery<TerminalEntity[]>({
    queryKey:["fetch-terminals"],
    queryFn:fetchAllTerminals,
  })

}
