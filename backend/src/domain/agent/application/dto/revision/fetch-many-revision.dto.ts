import { Revision } from "@/domain/agent/enterprise/entities/revision.entity";

export interface IFetchManyRevisionRequestDTO {
    revisions:Revision[]
}