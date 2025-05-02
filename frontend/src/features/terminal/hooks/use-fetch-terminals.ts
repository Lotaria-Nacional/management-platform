import { useQuery } from "@tanstack/react-query"
import { fetchAllTerminals } from "../services/terminal-service"
import { Terminal } from "../types"

export function useFetchTerminals() {

  return useQuery<Terminal[]>({
    queryKey:["fetch-terminals"],
    queryFn:fetchAllTerminals,
  })

}
