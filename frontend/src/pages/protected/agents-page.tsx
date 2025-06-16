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
import { useFetchTerminals } from "@/features/terminal/hooks/use-fetch-many-terminals"
import AgentFilter from "@/features/agents/components/agent-filter"
import { useFetchProvinces } from "@/app/hooks/use-fetch-provinces.ts"
import { useFetchCities } from "@/app/hooks/use-fetch-cities"
import { useFetchAreas } from "@/app/hooks/use-fetch-areas"
import { useFetchZones } from "@/app/hooks/use-fetch-zones"
import { useFetchTypes } from "@/app/hooks/use-fetch-types"

export default function AgentsPage() {
  const {
    data: agents,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useFetchInfiniteAgents()

  const { data: pos, isLoading: isLoadingPos } = useFetchPos()
  const { data: terminals, isLoading: isLoadingTerminals } = useFetchTerminals()

  const { data: provinces, isLoading: isLoadingProvinces } = useFetchProvinces()
  const { data: cities, isLoading: isLoadingCities } = useFetchCities()
  const { data: areas, isLoading: isLoadingAreas } = useFetchAreas()
  const { data: zones, isLoading: isLoadingZones } = useFetchZones()
  const { data: types, isLoading: isLoadingTypes } = useFetchTypes()

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
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="white">
                <Icon name="filtro" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <AgentFilter
                type={{ data: types, isLoading: isLoadingTypes }}
                provinces={{
                  data: provinces,
                  isLoading: isLoadingProvinces,
                }}
                cities={{
                  data: cities,
                  isLoading: isLoadingCities,
                }}
                zones={{
                  data: zones,
                  isLoading: isLoadingZones,
                }}
                area={{
                  data: areas,
                  isLoading: isLoadingAreas,
                }}
              />
            </DialogContent>
          </Dialog>

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
                terminals={{
                  data: terminals?.data,
                  isLoading: isLoadingTerminals,
                }}
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
