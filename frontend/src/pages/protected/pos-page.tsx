import Icon from "@/components/shared/icon"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/shared/page-header"
import PosTable from "@/features/pos/components/pos-table"
import PageContainer from "@/components/layout/page-container"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { useFetchPos } from "@/features/pos/hooks/use-fetch-pos"
import PageHeaderTitle from "@/components/shared/page-header-title"
import RegisterPosForm from "@/features/pos/components/add-pos-form"
import PageHeaderActions from "@/components/shared/page-header-actions"
import { useFetchAllAgents } from "@/features/agents/hooks/use-fetch-agents"
import PosTableSkeleton from "@/features/pos/components/skeleton/pos-table-skeleton"
import { useFetchAreas } from "@/app/hooks/use-fetch-areas"
import { useFetchCities } from "@/app/hooks/use-fetch-cities"
import { useFetchLicences } from "@/app/hooks/use-fetch-licences"
import { useFetchProvinces } from "@/app/hooks/use-fetch-provinces.ts"
import { useFetchZones } from "@/app/hooks/use-fetch-zones"
import { useFetchAdministrations } from "@/app/hooks/use-fetch-administrations"
import { useFetchTypes } from "@/app/hooks/use-fetch-types"

export default function PosPage() {
  const { data: pos, isLoading } = useFetchPos()
  const { data: agents, isLoading: isLoadingAgents } = useFetchAllAgents()
  const { data: provinces, isLoading: isLoadingProvinces } = useFetchProvinces()
  const { data: zones, isLoading: isLoadingZones } = useFetchZones()
  const { data: areas, isLoading: isLoadingAreas } = useFetchAreas()
  const { data: cities, isLoading: isLoadingCities } = useFetchCities()
  const { data: types, isLoading: isLoadingTypes } = useFetchTypes()
  const { data: licences, isLoading: isLoadingLicences } = useFetchLicences()
  const { data: admins, isLoading: isLoadingAdmins } = useFetchAdministrations()

  return (
    <PageContainer>
      <PageHeader className="items-end md:center">
        <PageHeaderActions className="flex-col items-start md:items-center md:flex-row">
          <PageHeaderTitle>POS</PageHeaderTitle>
          <div className="w-[140px] md:w-[278px] h-button px-3 flex items-center border border-zinc-300 rounded-[4px] bg-white">
            <Input
              placeholder="Pesquisar..."
              className="w-full shadow-none !h-full bg-white border-none"
            />
            <Icon name="search" className="text-zinc-300 cursor-pointer" />
          </div>
        </PageHeaderActions>

        <PageHeaderActions>
          <Button variant="white" className="shadow-button">
            <Icon name="filtro" />
          </Button>

          <Dialog>
            <DialogTrigger>
              <Button variant={"red"}>
                <Icon name="adicionar_br" className="size-3" />
                <span className="hidden md:block">Adicionar pos</span>
              </Button>
            </DialogTrigger>
            <RegisterPosForm
              agents={agents}
              isLoadingAgents={isLoadingAgents}
              zones={{ data: zones, isLoadingZones }}
              areas={{ data: areas, isLoadingAreas }}
              types={{ data: types, isLoadingTypes }}
              cities={{ data: cities, isLoadingCities }}
              admins={{ data: admins, isLoadingAdmins }}
              licences={{ data: licences, isLoadingLicences }}
              provinces={{ data: provinces, isLoadingProvinces }}
            />
          </Dialog>
        </PageHeaderActions>
      </PageHeader>
      {isLoading ? (
        <PosTableSkeleton />
      ) : (
        <PosTable pos={pos} agents={agents} isLoadingAgents />
      )}
    </PageContainer>
  )
}
