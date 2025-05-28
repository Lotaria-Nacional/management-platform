import Icon from "@/components/shared/icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/page-header";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import PageContainer from "@/components/layout/page-container";
import PageHeaderTitle from "@/components/shared/page-header-title";
import PageHeaderActions from "@/components/shared/page-header-actions";
import TerminalTable from "@/features/terminal/components/terminal-table";
import { useFetchAllAgents } from "@/features/agents/hooks/use-fetch-agents";
import { useFetchTerminals } from "@/features/terminal/hooks/use-fetch-many-terminals";
import AddTerminalForm from "@/features/terminal/components/add-terminal-form";
import TerminalTableSkeleton from "@/features/terminal/components/skeleton/terminal-table-skeleton";

export default function TerminalsPage() {
  const { data: terminals, isLoading } = useFetchTerminals();
  const { data: agents, isLoading: isLoadingAgents } = useFetchAllAgents();

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
            <DialogTrigger asChild>
              <Button variant="red">
                <Icon name="adicionar_br" className="size-3" />
                <span className="hidden md:block">Adicionar terminal</span>
              </Button>
            </DialogTrigger>
            <AddTerminalForm
              agents={agents?.agents}
              isLoading={isLoadingAgents}
            />
          </Dialog>
        </PageHeaderActions>
      </PageHeader>
      {isLoading ? (
        <TerminalTableSkeleton />
      ) : (
        <TerminalTable agents={agents?.agents} terminals={terminals} />
      )}
    </PageContainer>
  );
}
