import { editAgent } from "../services/agent-service"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useEditAgent() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationKey:["edit-agent"],
    mutationFn:editAgent,
    onSuccess: ()=> queryClient.invalidateQueries({ queryKey: [ "fetch-agents" ] })
  })
}
