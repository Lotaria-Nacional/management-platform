import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { removeTerminal } from "../services/terminal-service"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useRemoveTerminal() {
  const querClient = useQueryClient()

  return useMutation({
    mutationKey: TANSTACK_KEY.terminal.remove,
    mutationFn: removeTerminal,
    onSuccess: () =>
      querClient.invalidateQueries({
        queryKey: TANSTACK_KEY.terminal.fetch_many,
      }),
  })
}
