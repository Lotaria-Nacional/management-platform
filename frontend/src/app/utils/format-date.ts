export function formatDate(date:Date){
    const newDate = date.toString().split("T")[0].split("-").reverse().join("/")
    return newDate
}