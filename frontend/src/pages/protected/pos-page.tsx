import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import Icon from "@/components/shared/icon"
import { Button } from "@/components/ui/button"
import { PosEntity } from "@/features/pos/types"
import InputSearch from "@/components/shared/search"
import { Separator } from "@/components/ui/separator"
import { dataIsNotValid } from "@/app/utils/check-data"
import { useInView } from "react-intersection-observer"
import PageHeader from "@/components/shared/page-header"
import FetchLoader from "@/components/shared/fetch-loader"
import PosTable from "@/features/pos/components/pos-table"
import { useFetchAreas } from "@/app/hooks/use-fetch-areas"
import { useFetchZones } from "@/app/hooks/use-fetch-zones"
import { useFetchTypes } from "@/app/hooks/use-fetch-types"
import { useFetchCities } from "@/app/hooks/use-fetch-cities"
import PageContainer from "@/components/layout/page-container"
import EmptyDataState from "@/components/shared/empty-data-state"
import PageHeaderTitle from "@/components/shared/page-header-title"
import RegisterPosForm from "@/features/pos/components/add-pos-form"
import { useFetchProvinces } from "@/app/hooks/use-fetch-provinces.ts"
import { useFetchAdmins } from "@/app/hooks/use-fetch-administrations"
import PageHeaderActions from "@/components/shared/page-header-actions"
import { useFetchInfiniteData } from "@/app/hooks/use-fetch-infinite-data"
import { useFetchAllAgents } from "@/features/agents/hooks/use-fetch-agents"
import { useFetchInfinitePos } from "@/features/pos/hooks/use-fetch-infinite-pos"
import { useFetchLicences } from "@/features/licence/hooks/use-fetch-many-licences"
import PosTableSkeleton from "@/features/pos/components/skeleton/pos-table-skeleton"

export default function PosPage() {
  const { data: zones, isLoading: isLoadingZones } = useFetchZones()
  const { data: areas, isLoading: isLoadingAreas } = useFetchAreas()
  const { data: types, isLoading: isLoadingTypes } = useFetchTypes()
  const { data: cities, isLoading: isLoadingCities } = useFetchCities()
  const { data: admins, isLoading: isLoadingAdmins } = useFetchAdmins()
  const { data: agents, isLoading: isLoadingAgents } = useFetchAllAgents()
  const { data: licences, isLoading: isLoadingLicences } = useFetchLicences()
  const { data: provinces, isLoading: isLoadingProvinces } = useFetchProvinces()

  const {
    isLoading,
    hasNextPage,
    fetchNextPage,
    data: infintePos,
    isFetchingNextPage,
  } = useFetchInfinitePos()

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  })

  useFetchInfiniteData<PosEntity>({
    inView,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  })

  const flattenedAgents = agents?.data.flatMap((a) => a)
  const flattenedPos = infintePos?.pages.flatMap((p) => p.data)

  

  return (
    <PageContainer>
      <PageHeader className="items-end md:center">
        <PageHeaderActions className="flex-col items-start md:items-center md:flex-row">
          <PageHeaderTitle>POS</PageHeaderTitle>
          <InputSearch />
        </PageHeaderActions>

        <PageHeaderActions>
          <Button variant="white" className="shadow-button">
            <Icon name="filtro" />
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"red"}>
                <Icon name="adicionar_br" className="size-3" />
                <span className="hidden md:block">Adicionar pos</span>
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogTitle>Adicionar POS</DialogTitle>
              <DialogDescription>
                Preencha os dados abaixo para cadastrar um novo POS no sistema.
              </DialogDescription>
              <Separator className="my-2" />
              <RegisterPosForm
                zones={{ data: zones, isLoading: isLoadingZones }}
                areas={{ data: areas, isLoading: isLoadingAreas }}
                types={{ data: types, isLoading: isLoadingTypes }}
                admins={{ data: admins, isLoading: isLoadingAdmins }}
                cities={{ data: cities, isLoading: isLoadingCities }}
                agents={{ data: agents?.data, isLoading: isLoadingAgents }}
                provinces={{ data: provinces, isLoading: isLoadingProvinces }}
                licences={{
                  data: licences?.data,
                  isLoading: isLoadingLicences,
                }}
              />
            </DialogContent>
          </Dialog>
        </PageHeaderActions>
      </PageHeader>
      {isLoading ? (
        <PosTableSkeleton />
      ) : dataIsNotValid(infintePos?.pages) ? (
        <div className="w-full flex items-center justify-center">
          <EmptyDataState />
        </div>
      ) : (
        <PosTable
          pos={flattenedPos}
          zones={{ data: zones, isLoading: isLoadingZones }}
          areas={{ data: areas, isLoading: isLoadingAreas }}
          types={{ data: types, isLoading: isLoadingTypes }}
          admins={{ data: admins, isLoading: isLoadingAdmins }}
          cities={{ data: cities, isLoading: isLoadingCities }}
          provinces={{ data: provinces, isLoading: isLoadingProvinces }}
          licences={{ data: licences?.data, isLoading: isLoadingLicences }}
          agents={{
            data: flattenedAgents,
            isLoading: isLoadingAgents,
          }}
        />
      )}

      <div ref={ref} className="h-2 w-full" />
      {isFetchingNextPage && <FetchLoader />}
    </PageContainer>
  )
}
