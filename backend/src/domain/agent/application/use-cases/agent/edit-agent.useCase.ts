import { IEditAgentRequestDTO } from "../../dto/agent/edit-agent.dto";
import { IAgentRepository } from "../../interfaces/agent-repository.interface";

export class EditAgentUseCase {
  constructor(private agentRepository: IAgentRepository) {}

  async execute(request: IEditAgentRequestDTO) {
    
    const { id, ...updates } = request;
    const agent = await this.agentRepository.findById(id);
    
    if (!agent) {
      throw new Error("Agent Not Found");
    }

    const fieldMap: Record<string, keyof typeof agent> = {
      first_name:   "first_name",
      last_name:    "last_name",
      phone:        "phone",
      terminal_id:  "terminal",
      city:         "city",
      province:     "province",
      zone:         "zone",
      status:       "status",
      agent_id:     "agent_id",
      afrimoney:    "afrimoney",
    };

    for (const [key, value] of Object.entries(updates) as [keyof typeof updates, any][]) {
      if (value !== undefined) {
        const agentProp = fieldMap[key];
        const targetProp = agentProp ?? key;
        (agent as any)[targetProp] = value;
      }
    }

    await this.agentRepository.save(agent);
  }
}
