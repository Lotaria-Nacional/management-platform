import { FaFileUpload } from "react-icons/fa"
import Button from "@/components/shared/button"
import PageHeader from "@/components/shared/page-header"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import PageContainer from "@/components/layout/page-container"
import AgentTable from "@/features/agents/components/agent-table"
import PageHeaderTitle from "@/components/shared/page-header-title"
import PageHeaderActions from "@/components/shared/page-header-actions"
import { useFetchAllAgents } from "@/features/agents/hooks/use-fetch-agents"
import UploadAgentsForm from "@/features/agents/components/upload-agent-form"

export default function AgentsPage() {
  const { agents } = useFetchAllAgents()

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderTitle>Agentes</PageHeaderTitle>
        <PageHeaderActions>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <FaFileUpload />
                Upload
              </Button>
            </DialogTrigger>
            <UploadAgentsForm />
          </Dialog>
        </PageHeaderActions>
      </PageHeader>
      <AgentTable agents={agents} />
    </PageContainer>
  )
}
