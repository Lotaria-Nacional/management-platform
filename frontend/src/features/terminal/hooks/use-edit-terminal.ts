import { editTerminal } from "../services/terminal-service"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useEditTerminal() {
  const querClient = useQueryClient()

  return useMutation({
    mutationKey: [TANSTACK_KEY.terminal.update],
    mutationFn: editTerminal,
    onSuccess: () =>
      querClient.invalidateQueries({
        queryKey: [TANSTACK_KEY.terminal.fetch_infinite],
      }),
  })
}
