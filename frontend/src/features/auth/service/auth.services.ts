import axios from "@/app/config/axios"
import { ApiMessageResponse } from "@/app/types"
import { LoginDTO } from "../validations/login-schema"
import { RegisterDTO } from "../validations/register-schema"
import { handleApiError } from "@/app/utils/handle-api-error"

export const loginUser = async (data:LoginDTO)=>{
    try {
        const response = await axios.post<ApiMessageResponse>("/users/auth/sign-in", data)
        const { message } = response.data
        return {message, sucess:true}

    } catch (error) {
        return handleApiError(error)
    }
}

export const registerUser = async (data:RegisterDTO)=>{
    const response = await axios.post("/users/auth/sign-un", data)
    return response.data
}