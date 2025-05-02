import { uploadTerminals } from "../services/terminal-service"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useUploadTerminals() {
  const querClient = useQueryClient()
  
  return useMutation({
    mutationKey:["upload-terminals"],
    mutationFn: uploadTerminals,
    onSuccess: ()=> querClient.invalidateQueries({ queryKey:["fetch-terminals"]})
  })
  
}
