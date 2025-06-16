import axios from "@/app/config/axios"
import { ApiMessageResponse } from "@/app/types"
import { IFetchAgentsResponse } from "../types"
import { handleApiError } from "@/app/utils/handle-api-error"
import { EditAgentDTO } from "../validations/edit-agent-schema"
import { RegisterAgentDTO } from "../validations/register-agent-schema"

export async function fetchInfiniteAgents(
  page?: number,
  filters?: Record<string, string | undefined>
) {
  const params = new URLSearchParams()
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
  }
  params.set("page", String(page ?? 1))
  params.set("limit", "10")

  const result = await axios.get<IFetchAgentsResponse>(`/agents?${params}`)
  const { data, total, totalPages } = result.data

  return { data, total, totalPages, currentPage: page ?? 0 }
}

export async function fetchAgents() {
  const response = await axios.get<IFetchAgentsResponse>("/agents")
  const { data, total, totalPages } = response.data
  return { data, total, totalPages }
}

export async function registerAgent(
  data: RegisterAgentDTO
): Promise<ApiMessageResponse> {
  try {
    const response = await axios.post<ApiMessageResponse>("/agents", data)
    return {
      sucess: true,
      message: response.data.message,
    }
  } catch (error: any) {
    return handleApiError(error)
  }
}

export async function editAgent(data: EditAgentDTO) {
  try {
    const response = await axios.put<ApiMessageResponse>(
      `/agents/${data.id}`,
      data
    )
    return {
      sucess: true,
      message: response.data.message,
    }
  } catch (error) {
    console.log(error)
    return handleApiError(error)
  }
}
