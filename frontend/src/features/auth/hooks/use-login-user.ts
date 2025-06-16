import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../service/auth.services";

export function useLoginUser() {
    return useMutation({
        mutationKey:["login"],
        mutationFn:loginUser,
    })
}