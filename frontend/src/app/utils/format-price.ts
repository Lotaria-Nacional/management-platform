export function formatPrice(value:number | string){
    const newValue = typeof value === "string" ? parseInt(value) : value
    const formatedValue = new Intl.NumberFormat("pt-PT",{
        style:"currency",
        currency:"AKZ",
        maximumFractionDigits:2
    }).format(newValue)
    return formatedValue
}