import { editPos } from "../services/pos-service"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useEditPos() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [TANSTACK_KEY.pos.update],
    mutationFn: editPos,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [TANSTACK_KEY.pos.fetch_many],
      }),
  })
}
