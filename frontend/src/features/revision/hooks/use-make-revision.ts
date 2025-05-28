import { makeAgentRevision } from "../service"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useMakeRevision() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [TANSTACK_KEY.revision.post],
    mutationFn: makeAgentRevision,

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [TANSTACK_KEY.agent.fetch_many],
      }),
  })
}
