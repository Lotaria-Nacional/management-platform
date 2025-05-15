import axios from "@/config/axios"

export const fetchManyRevisions = async()=>{
    try {
        const response = await axios.get("/revision")
        console.log(response.data)
        return response.data
    } catch (error:any) {
        console.log(error.message)
    }
}