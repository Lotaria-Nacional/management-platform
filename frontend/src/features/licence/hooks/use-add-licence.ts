import { addLicence } from "../services";
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddLicence(){
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey:[TANSTACK_KEY.licence.post],
        mutationFn:addLicence,
        onSuccess:()=> queryClient.invalidateQueries({queryKey: [TANSTACK_KEY.licence.fetch_infinite]})
    })
}