import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { editTerminal } from "../services/terminal-service"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useEditTerminal() {
  const querClient = useQueryClient()

  return useMutation({
    mutationKey: TANSTACK_KEY.terminal.edit,
    mutationFn: editTerminal,
    onSuccess: () =>
      querClient.invalidateQueries({
        queryKey: TANSTACK_KEY.terminal.fetch_many,
      }),
  })
}
