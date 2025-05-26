import { useMemo } from "react";

export function useDependentData<P,C>(
    data:P[] | undefined,
    selectedId: string,
    getId:(item:P)=> string,
    getChildren: (item:P)=> C[]
){

    return useMemo(()=>{
        if(!data || !selectedId) return []
        const found = data.find(item => getId(item) === selectedId)
        return found ? getChildren(found) : []
    },[data, selectedId, getId, getChildren])

}