import axios from "@/app/config/axios";
import { IAddLicenceDTO, IEditLicenceDTO, IFetchLicencesResponse } from "../components/types";

export async function addLicence(data:IAddLicenceDTO){
    const response = await axios.post("/licences", data)
    return response.data
}

export async function editLicence(data:IEditLicenceDTO){
    const response = await axios.put(`/licences/${data.id}`, data)
    return response.data
}

export async function removeLicence(id:string){
    const response = await axios.delete(`/licences/${id}`)
    return response.data
}

export async function getLicenceById(id:string){
    const response = await axios.get(`/licences/${id}`)
    return response.data
}

export const fetchManyLicences = async () => {
    const response = await axios.get<IFetchLicencesResponse>("/licences")
    const { data,total, totalPages } = response.data
    return { data, total, totalPages }
}

export async function fetchInfiniteLicences(page:number){
    const response = await axios.get<IFetchLicencesResponse>("/licences", { params:{ page, limit:10 }
    })
    const { data, total,totalPages } = response.data
    return {
        data,
        total,
        totalPages,
        currentPage:page
    }
}

  