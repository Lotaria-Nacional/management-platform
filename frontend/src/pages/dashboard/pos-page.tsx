import Icon from "@/components/shared/icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/page-header";
import PosTable from "@/features/pos/components/pos-table";
import PageContainer from "@/components/layout/page-container";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useFetchPos } from "@/features/pos/hooks/use-fetch-pos";
import PageHeaderTitle from "@/components/shared/page-header-title";
import PageHeaderActions from "@/components/shared/page-header-actions";
import RegisterPosForm from "@/features/pos/components/register-pos-form";
import PosTableSkeleton from "@/features/pos/components/skeleton/pos-table-skeleton";

export default function PosPage() {
  const { data: pos, isLoading } = useFetchPos();

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
            <RegisterPosForm />
          </Dialog>
        </PageHeaderActions>
      </PageHeader>
      {isLoading ? <PosTableSkeleton /> : <PosTable pos={pos} />}
    </PageContainer>
  );
}
