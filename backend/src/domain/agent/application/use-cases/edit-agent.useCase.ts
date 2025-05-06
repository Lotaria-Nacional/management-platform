import { IEditAgentRequest } from "../../application/dto/edit-agent.dto";
import { IAgentRepository } from "../../application/interfaces/agent-repository.interface";

export class EditAgentUseCase {
  constructor(private agentRepository: IAgentRepository) {}

  async execute(request: IEditAgentRequest) {
    
    const { id, ...updates } = request;
    const agent = await this.agentRepository.findById(id);
    
    if (!agent) {
      throw new Error("Agent Not Found");
    }


    const fieldMap: Record<string, keyof typeof agent> = {
      name:        "first_name",
      lastname:    "last_name",
      phone_number:"phone",
      terminal_id: "terminal",
      area:        "area",
      city:        "city",
      province:    "province",
      zone:        "zone",
      status:      "status",
      agent_id:    "agent_id",
      afrimoney:   "afrimoney",
    };

    for (const [key, value] of Object.entries(updates) as [keyof typeof updates, any][]) {
      if (value !== undefined) {
        const agentProp = fieldMap[key];
        const targetProp = agentProp ?? key;
        (agent as any)[targetProp] = value;
      }
    }

    const editedAgent = await this.agentRepository.save(agent);
    return { agent: editedAgent };
  }
}
