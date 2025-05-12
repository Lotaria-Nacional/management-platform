import { registerAgent } from "../services/agent-service"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useRegisterAgents() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationKey:["upload-agents"],
    mutationFn:registerAgent,
    onSuccess: ()=> queryClient.invalidateQueries({ queryKey: [ "fetch-agents" ] })
  })
}
