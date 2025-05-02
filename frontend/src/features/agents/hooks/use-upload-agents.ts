import { uploadAgents } from "../services/agent-service"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useUploadAgents() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationKey:["upload-agents"],
    mutationFn:uploadAgents,
    onSuccess: ()=> queryClient.invalidateQueries({ queryKey: [ "fetch-agents" ] })
  })
}
