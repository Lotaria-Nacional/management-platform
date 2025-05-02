import { uploadPos } from "../services/pos-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUploadPos() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["upload-pos"],
    mutationFn: uploadPos,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["fetch-pos"] }),
  });
}
