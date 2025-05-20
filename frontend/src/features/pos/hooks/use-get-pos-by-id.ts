import { PosEntity } from "../types"
import { useQuery } from "@tanstack/react-query"
import {  getPosById } from "../services/pos-service"
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys"

export function useGetPosById(id:string) {
  return useQuery<PosEntity>({
    queryKey:[TANSTACK_KEY.pos.get_by_id],
    queryFn:()=> getPosById(id)
  })
}
