export const checkArrayData =<T>(data?:T[])=> {
    if(data && Array.isArray(data)){   
        if(data.length > 0){
            return true
        }
    }
    return false
}