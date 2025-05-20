import { addPos } from "../services/pos-service"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useAddPos() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey:[TANSTACK_KEY.pos.post],
    mutationFn: addPos,
    onSuccess:()=> queryClient.invalidateQueries({
      queryKey:[TANSTACK_KEY.pos.fetch_many]
    })
  })
}
