import { useState } from "react";

export function useSuccess(){
    const [isSuccess, setIsSuccess] = useState(false)

    const onSuccess = (value:boolean)=> setIsSuccess(value)

    return { isSuccess, onSuccess }
}