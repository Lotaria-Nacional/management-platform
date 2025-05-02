import { useQuery } from "@tanstack/react-query"
import { fetchAllPos } from "../services/pos-service"

export function useFetchPos() {
  return useQuery({
    queryKey:["fetch-pos"],
    queryFn: fetchAllPos
  })
}
