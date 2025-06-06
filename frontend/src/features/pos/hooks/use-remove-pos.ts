import { removePos } from "../services/pos-service"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"
import {  useMutation, useQueryClient } from "@tanstack/react-query"

export function useRemovePos() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey:[TANSTACK_KEY.pos.delete],
    mutationFn: removePos,
    onSuccess:()=> queryClient.invalidateQueries({ 
      queryKey:[TANSTACK_KEY.pos.fetch_infinite]
    })
  })
}
