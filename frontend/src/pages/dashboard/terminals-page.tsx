import Icon from "@/components/shared/icon";
import { Input } from "@/components/ui/input";
import Button from "@/components/shared/button";
import PageHeader from "@/components/shared/page-header";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import PageContainer from "@/components/layout/page-container";
import PageHeaderTitle from "@/components/shared/page-header-title";
import PageHeaderActions from "@/components/shared/page-header-actions";
import TerminalTable from "@/features/terminal/components/terminal-table";
import { useFetchTerminals } from "@/features/terminal/hooks/use-fetch-terminals";
import RegisterTerminalForm from "@/features/terminal/components/register-terminal-form";
import TerminalTableSkeleton from "@/features/terminal/components/skeleton/terminal-table-skeleton";

export default function TerminalsPage() {
  const { data: terminals, isLoading } = useFetchTerminals();

  return (
    <PageContainer>
      <PageHeader className="items-end md:center">
        <PageHeaderActions className="flex-col items-start md:items-center md:flex-row">
          <PageHeaderTitle>Terminais</PageHeaderTitle>
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
            <DialogTrigger>
              <Button>
                <Icon name="adicionar_br" className="size-3" />
                <span className="hidden md:block">Adicionar terminal</span>
              </Button>
            </DialogTrigger>
            <RegisterTerminalForm />
          </Dialog>
        </PageHeaderActions>
      </PageHeader>
      {isLoading ? (
        <TerminalTableSkeleton />
      ) : (
        <TerminalTable terminals={terminals} />
      )}
    </PageContainer>
  );
}
