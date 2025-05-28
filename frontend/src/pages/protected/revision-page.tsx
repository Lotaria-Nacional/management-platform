import Icon from "@/components/shared/icon"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/shared/page-header"
import PageContainer from "@/components/layout/page-container"
import PageHeaderTitle from "@/components/shared/page-header-title"
import PageHeaderActions from "@/components/shared/page-header-actions"
import RevisionTable from "@/features/revision/components/revision-table"
import { useFetchAllAgents } from "@/features/agents/hooks/use-fetch-agents"

export default function RevisionPage() {
  const { data, isLoading } = useFetchAllAgents()
  return (
    <PageContainer>
      <PageHeader className="items-end md:center">
        <PageHeaderActions className="flex-col items-start md:items-center md:flex-row">
          <PageHeaderTitle>Revisão de Agentes</PageHeaderTitle>
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
            Filtros
          </Button>
        </PageHeaderActions>
      </PageHeader>
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <span>Carregando...</span>
        </div>
      ) : (
        <RevisionTable agents={data} />
      )}
    </PageContainer>
  )
}
