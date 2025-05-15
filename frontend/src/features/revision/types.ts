export interface RevisionEntity {
    id: string,
    additional_info: string,
    agent_id: string,
    image: string,
    items: Record<string,boolean>
    agent:{
        id:string
        first_name:string
        last_name:string
    }
}