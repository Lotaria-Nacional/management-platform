import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import Icon from "@/components/shared/icon"
import { Button } from "@/components/ui/button"
import InputSearch from "@/components/shared/search"
import { Separator } from "@/components/ui/separator"
import { AgentEntity } from "@/features/agents/types"
import { useInView } from "react-intersection-observer"
import PageHeader from "@/components/shared/page-header"
import FetchLoader from "@/components/shared/fetch-loader"
import PageContainer from "@/components/layout/page-container"
import { useFetchPos } from "@/features/pos/hooks/use-fetch-pos"
import AgentTable from "@/features/agents/components/agent-table"
import PageHeaderTitle from "@/components/shared/page-header-title"
import PageHeaderActions from "@/components/shared/page-header-actions"
import { useFetchInfiniteData } from "@/app/hooks/use-fetch-infinite-data"
import RegisterAgentForm from "@/features/agents/components/register-agent-form"
import { useFetchInfiniteAgents } from "@/features/agents/hooks/use-fetch-infinite-agents"
import AgentTableSkeleton from "@/features/agents/components/skeleton/agent-table-skeleton"

export default function AgentsPage() {
  const {
    data: agents,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useFetchInfiniteAgents()

  const { data: pos, isLoading: isLoadingPos } = useFetchPos()

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  })

  useFetchInfiniteData<AgentEntity>({
    inView,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  })

  const flattenedAgents = agents?.pages.flatMap((page) => page.data)

  return (
    <PageContainer>
      <PageHeader className="items-end md:center">
        <PageHeaderActions className="flex-col items-start md:items-center md:flex-row">
          <PageHeaderTitle>Agentes</PageHeaderTitle>
          <InputSearch />
        </PageHeaderActions>

        <PageHeaderActions className="">
          <Button variant="white">
            <Icon name="filtro" />
          </Button>

          <Dialog>
            <DialogTrigger>
              <Button variant={"red"}>
                <Icon name="adicionar_br" className="size-3" />
                <span className="hidden md:block">Adicionar agente</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar Agente</DialogTitle>
                <DialogDescription>
                  Preencha os dados abaixo para cadastrar um novo agente no
                  sistema.
                </DialogDescription>
                <Separator className="my-2" />
              </DialogHeader>
              <RegisterAgentForm
                pos={{ data: pos?.data, isLoading: isLoadingPos }}
              />
            </DialogContent>
          </Dialog>
        </PageHeaderActions>
      </PageHeader>

      {isLoading ? (
        <AgentTableSkeleton />
      ) : (
        <AgentTable agents={flattenedAgents} />
      )}

      <div ref={ref} className="h-2" />
      {isFetchingNextPage && <FetchLoader />}
    </PageContainer>
  )
}
