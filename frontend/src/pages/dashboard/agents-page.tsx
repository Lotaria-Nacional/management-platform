import PageContainer from "@/components/layout/page-container"
import AgentTable from "@/features/agents/components/agent-table"
import { useFetchAllAgents } from "@/features/agents/hooks/use-fetch-agents"

export default function AgentsPage() {
  const { agents } = useFetchAllAgents()

  return (
    <PageContainer>
      <AgentTable agents={agents} />
    </PageContainer>
  )
}
