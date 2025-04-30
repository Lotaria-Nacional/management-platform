import axios from "axios";

export type Agent = {
    _id:string
    props:{
        agent_id:string
        afrimoney:boolean
        area:string
        city:string
        first_name:string
        last_name:string
        phone:string
        province:string
        status:string
        zone:string
    }
}

export async function getAgents(){
    const result  = await axios.get("http://localhost:8080/api/agents/all");
    console.log(result.data)
    return result.data
}