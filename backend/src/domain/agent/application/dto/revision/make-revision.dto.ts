export interface IMakeRevisionRequestDTO {
    agent_id:string
    image:string
    additional_info:string | null
    items:Record<string, boolean>
}