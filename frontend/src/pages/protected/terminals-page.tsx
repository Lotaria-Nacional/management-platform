import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog"
import Icon from "@/components/shared/icon"
import { Button } from "@/components/ui/button"
import InputSearch from "@/components/shared/search"
import { Separator } from "@/components/ui/separator"
import { useSearchParams } from "react-router-dom"
import { useFetchZones } from "@/app/hooks/use-fetch-zones"
import { useFetchAreas } from "@/app/hooks/use-fetch-areas"
import { useFetchCities } from "@/app/hooks/use-fetch-cities"
import { useInView } from "react-intersection-observer"
import PageHeader from "@/components/shared/page-header"
import { TerminalEntity } from "@/features/terminal/types"
import FetchLoader from "@/components/shared/fetch-loader"
import PageContainer from "@/components/layout/page-container"
import PageHeaderTitle from "@/components/shared/page-header-title"
import PageHeaderActions from "@/components/shared/page-header-actions"
import TerminalTable from "@/features/terminal/components/terminal-table"
import { useFetchInfiniteData } from "@/app/hooks/use-fetch-infinite-data"
import { useFetchAllAgents } from "@/features/agents/hooks/use-fetch-agents"
import AddTerminalForm from "@/features/terminal/components/add-terminal-form"
import TerminalFilter from "@/features/terminal/components/terminal-filter"
import { useFetchProvinces } from "@/app/hooks/use-fetch-provinces.ts"
import { useFetchInfiniteTerminals } from "@/features/terminal/hooks/use-fetch-infinite-terminals"
import TerminalTableSkeleton from "@/features/terminal/components/skeleton/terminal-table-skeleton"

export default function TerminalsPage() {
  const [searchParams] = useSearchParams()
  const filters = Object.fromEntries(searchParams.entries())

  const {
    data: terminals,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useFetchInfiniteTerminals(filters)

  const agents = useFetchAllAgents()
  const provinces = useFetchProvinces()
  const cities = useFetchCities()
  const areas = useFetchAreas()
  const zones = useFetchZones()

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  })

  useFetchInfiniteData<TerminalEntity>({
    inView,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  })

  const flattenedTerminals = terminals?.pages.flatMap((page) => page.data)

  return (
    <PageContainer>
      <PageHeader className="items-end md:center">
        <PageHeaderActions className="flex-col items-start md:items-center md:flex-row">
          <PageHeaderTitle>Terminais</PageHeaderTitle>
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
              <TerminalFilter
                zones={{ data: zones.data, isLoading: zones.isLoading }}
                cities={{ data: cities.data, isLoading: cities.isLoading }}
                areas={{ data: areas.data, isLoading: areas.isLoading }}
                provinces={{
                  data: provinces.data,
                  isLoading: provinces.isLoading,
                }}
              />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="red">
                <Icon name="adicionar_br" className="size-3" />
                <span className="hidden md:block">Adicionar terminal</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Adicionar terminal</DialogTitle>
              <DialogDescription>
                Preencha os dados abaixo para cadastrar um novo terminal no
                sistema.
              </DialogDescription>
              <Separator className="my-2" />
              <AddTerminalForm
                agents={agents?.data?.data}
                isLoading={agents.isLoading}
              />
            </DialogContent>
          </Dialog>
        </PageHeaderActions>
      </PageHeader>
      {isLoading ? (
        <TerminalTableSkeleton />
      ) : (
        <TerminalTable
          agents={agents?.data?.data}
          terminals={flattenedTerminals}
        />
      )}

      <div ref={ref} className="h-1" />
      {isFetchingNextPage && <FetchLoader />}
    </PageContainer>
  )
}
