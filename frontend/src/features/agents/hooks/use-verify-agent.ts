import { useMutation } from "@tanstack/react-query";
import { verifyAgent } from "../services/agent-service";

export function useVerifyAgent(){
    return useMutation({
        mutationKey:[""],
        mutationFn:verifyAgent
    })   
}