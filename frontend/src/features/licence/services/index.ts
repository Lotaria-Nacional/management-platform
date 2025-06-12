import axios from "@/app/config/axios";
import { ApiMessageResponse } from "@/app/types";
import { handleApiError } from "@/app/utils/handle-api-error";
import { IFetchLicencesResponse } from "../components/types";
import { AddLicenceDTO } from "../validations/add-licence-schema";
import { EditLicenceDTO } from "../validations/edit-licence-schema";

export async function addLicence(data:AddLicenceDTO){
    try {
        const response = await axios.post<ApiMessageResponse>("/licences", data)
        const { message } = response.data
        return { sucess: true, message}
    } catch (error) {
        return handleApiError(error)
    }
}

export async function editLicence(data:EditLicenceDTO){
    try {
        const response = await axios.put<ApiMessageResponse>(`/licences/${data.id}`, data)
        const { message } = response.data
        return { sucess:true, message }
    } catch (error) {
        return handleApiError(error)
    }
}

export async function removeLicence(id:string){
    try {
        const response = await axios.delete<ApiMessageResponse>(`/licences/${id}`)
        const { message } = response.data
        return {sucess:true, message }
    } catch (error) {
        return handleApiError(error)
    }
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

  