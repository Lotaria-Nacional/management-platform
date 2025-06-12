import { editAgent } from "../services/agent-service"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useEditAgent() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [TANSTACK_KEY.agent.update],
    mutationFn: editAgent,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [TANSTACK_KEY.agent.fetch_infinite],
      }),
  })
}
