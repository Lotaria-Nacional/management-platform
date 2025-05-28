import { Link } from "react-router-dom"
import Icon from "@/components/shared/icon"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/shared/page-header"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import PageContainer from "@/components/layout/page-container"
import AgentTable from "@/features/agents/components/agent-table"
import PageHeaderTitle from "@/components/shared/page-header-title"
import PageHeaderActions from "@/components/shared/page-header-actions"
import { useFetchAllAgents } from "@/features/agents/hooks/use-fetch-agents"
import RegisterAgentForm from "@/features/agents/components/register-agent-form"
import AgentTableSkeleton from "@/features/agents/components/skeleton/agent-table-skeleton"
import { useFetchPos } from "@/features/pos/hooks/use-fetch-pos"

export default function AgentsPage() {
  const { data: agents, isLoading } = useFetchAllAgents()
  const { data: pos, isLoading: isLoadingPos } = useFetchPos()

  return (
    <PageContainer>
      <PageHeader className="items-end md:center">
        <PageHeaderActions className="flex-col items-start md:items-center md:flex-row">
          <PageHeaderTitle>Agentes</PageHeaderTitle>
          <div className="w-[140px] md:w-[278px] h-button px-3 flex items-center border border-zinc-300 rounded-[4px] bg-white">
            <Input
              placeholder="Pesquisar..."
              className="w-full shadow-none !h-full bg-white border-none"
            />
            <Icon name="search" className="text-zinc-300 cursor-pointer" />
          </div>
        </PageHeaderActions>

        <PageHeaderActions className="">
          <Button variant="white">
            <Icon name="filtro" />
          </Button>

          <Dialog>
            <Link to={"/agentes/revisao"}>
              <Button variant="white">
                <Icon name="avaliar" />
                <span className="hidden md:block">Revisão</span>
              </Button>
            </Link>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <Button variant={"red"}>
                <Icon name="adicionar_br" className="size-3" />
                <span className="hidden md:block">Adicionar agente</span>
              </Button>
            </DialogTrigger>
            <RegisterAgentForm pos={{ data: pos, isLoading: isLoadingPos }} />
          </Dialog>
        </PageHeaderActions>
      </PageHeader>

      {isLoading ? <AgentTableSkeleton /> : <AgentTable agents={agents} />}
    </PageContainer>
  )
}
