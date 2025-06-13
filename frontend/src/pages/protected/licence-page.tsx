import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import Icon from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/app/constants/colors";
import Loading from "@/components/shared/loading";
import { useInView } from "react-intersection-observer";
import { dataIsNotValid } from "@/app/utils/check-data";
import PageHeader from "@/components/shared/page-header";
import PageContainer from "@/components/layout/page-container";
import EmptyDataState from "@/components/shared/empty-data-state";
import { LicenceEntity } from "@/features/licence/components/types";
import PageHeaderTitle from "@/components/shared/page-header-title";
import LicenceTable from "@/features/licence/components/licence-table";
import PageHeaderActions from "@/components/shared/page-header-actions";
import AddLicenceForm from "@/features/licence/components/add-licence-form";
import { useFetchInfiniteData } from "@/app/hooks/use-fetch-infinite-data";
import LicenceTableSkeleton from "@/features/licence/components/licence-table-skeleton";
import { useFetchInfiniteLicences } from "@/features/licence/hooks/use-fetch-infinite-licences";

export default function LicencePage() {
  const {
    isLoading,
    hasNextPage,
    fetchNextPage,
    data: licences,
    isFetchingNextPage,
  } = useFetchInfiniteLicences();

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useFetchInfiniteData<LicenceEntity>({
    hasNextPage,
    fetchNextPage,
    inView,
    isFetchingNextPage,
  });

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderTitle>Licenças</PageHeaderTitle>
        <PageHeaderActions>
          <Button variant="white">
            <Icon name="filtro" />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="red">
                <Icon name="adicionar_br" />
                Adicionar
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar Licença</DialogTitle>
                <DialogDescription>
                  Preencha os campos abaixo para adicionar uma licença
                </DialogDescription>
              </DialogHeader>
              <hr className="w-full h-1" />
              <AddLicenceForm />
            </DialogContent>
          </Dialog>
        </PageHeaderActions>
      </PageHeader>
      {isLoading ? (
        <LicenceTableSkeleton />
      ) : dataIsNotValid(licences?.pages) ? (
        <div className="w-full flex items-center justify-center">
          <EmptyDataState />
        </div>
      ) : (
        <LicenceTable data={licences?.pages.flatMap((l) => l.data)} />
      )}

      <div ref={ref} className="w-full h-1" />

      {isFetchingNextPage && (
        <div className="flex items-center justify-center w-full">
          <Loading size={5} color={COLORS.RED[600]} />
        </div>
      )}
    </PageContainer>
  );
}
