import { useEffect } from "react";
import Icon from "@/components/shared/icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/app/constants/colors";
import Loading from "@/components/shared/loading";
import { useInView } from "react-intersection-observer";
import PageHeader from "@/components/shared/page-header";
import PosTable from "@/features/pos/components/pos-table";
import { useFetchAreas } from "@/app/hooks/use-fetch-areas";
import { useFetchZones } from "@/app/hooks/use-fetch-zones";
import { useFetchTypes } from "@/app/hooks/use-fetch-types";
import { useFetchCities } from "@/app/hooks/use-fetch-cities";
import PageContainer from "@/components/layout/page-container";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useFetchLicences } from "@/app/hooks/use-fetch-licences";
import PageHeaderTitle from "@/components/shared/page-header-title";
import RegisterPosForm from "@/features/pos/components/add-pos-form";
import { useFetchProvinces } from "@/app/hooks/use-fetch-provinces.ts";
import PageHeaderActions from "@/components/shared/page-header-actions";
import { useFetchAllAgents } from "@/features/agents/hooks/use-fetch-agents";
import { useFetchAdministrations } from "@/app/hooks/use-fetch-administrations";
import { useFetchInfinitePos } from "@/features/pos/hooks/use-fetch-infinite-pos";
import PosTableSkeleton from "@/features/pos/components/skeleton/pos-table-skeleton";

export default function PosPage() {
  const { data: zones, isLoading: isLoadingZones } = useFetchZones();
  const { data: areas, isLoading: isLoadingAreas } = useFetchAreas();
  const { data: types, isLoading: isLoadingTypes } = useFetchTypes();
  const { data: cities, isLoading: isLoadingCities } = useFetchCities();
  const { data: agents, isLoading: isLoadingAgents } = useFetchAllAgents();
  const { data: licences, isLoading: isLoadingLicences } = useFetchLicences();
  const { data: provinces, isLoading: isLoadingProvinces } =
    useFetchProvinces();
  const { data: admins, isLoading: isLoadingAdmins } =
    useFetchAdministrations();

  const {
    data: infintePos,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isLoading,
  } = useFetchInfinitePos();

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

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
              zones={{ data: zones, isLoading: isLoadingZones }}
              areas={{ data: areas, isLoading: isLoadingAreas }}
              types={{ data: types, isLoading: isLoadingTypes }}
              admins={{ data: admins, isLoading: isLoadingAdmins }}
              cities={{ data: cities, isLoading: isLoadingCities }}
              agents={{ data: agents?.data, isLoading: isLoadingAgents }}
              licences={{ data: licences, isLoading: isLoadingLicences }}
              provinces={{ data: provinces, isLoading: isLoadingProvinces }}
            />
          </Dialog>
        </PageHeaderActions>
      </PageHeader>
      {isLoading ? (
        <PosTableSkeleton />
      ) : (
        <PosTable
          pos={infintePos?.pages.flatMap((p) => p.data)}
          zones={{ data: zones, isLoading: isLoadingZones }}
          areas={{ data: areas, isLoading: isLoadingAreas }}
          types={{ data: types, isLoading: isLoadingTypes }}
          admins={{ data: admins, isLoading: isLoadingAdmins }}
          cities={{ data: cities, isLoading: isLoadingCities }}
          licences={{ data: licences, isLoading: isLoadingLicences }}
          provinces={{ data: provinces, isLoading: isLoadingProvinces }}
        />
      )}

      <div ref={ref} className="h-2 w-full" />

      {isFetchingNextPage && (
        <div className="w-full flex items-center justify-center">
          <Loading size={6} color={COLORS.RED[600]} />
        </div>
      )}
    </PageContainer>
  );
}
