import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { addTerminal } from "../services/terminal-service"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useAddTerminal() {
  const querClient = useQueryClient()

  return useMutation({
    mutationKey: [TANSTACK_KEY.terminal.make],
    mutationFn: addTerminal,
    onSuccess: () =>
      querClient.invalidateQueries({
        queryKey: [TANSTACK_KEY.terminal.fetch_many],
      }),
  })
}
