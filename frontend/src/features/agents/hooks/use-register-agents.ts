import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { registerAgent } from "../services/agent-service"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useRegisterAgents() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationKey:TANSTACK_KEY.agent.register,
    mutationFn:registerAgent,
    onSuccess: ()=> queryClient.invalidateQueries({ queryKey: TANSTACK_KEY.agent.fetch_many })
  })
}
