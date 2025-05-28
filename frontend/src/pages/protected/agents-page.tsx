import Icon from "@/components/shared/icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import Pagination from "@/components/shared/pagination";
import PageHeader from "@/components/shared/page-header";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import PageContainer from "@/components/layout/page-container";
import { useFetchPos } from "@/features/pos/hooks/use-fetch-pos";
import AgentTable from "@/features/agents/components/agent-table";
import PageHeaderTitle from "@/components/shared/page-header-title";
import PageHeaderActions from "@/components/shared/page-header-actions";
import { useFetchAllAgents } from "@/features/agents/hooks/use-fetch-agents";
import RegisterAgentForm from "@/features/agents/components/register-agent-form";
import AgentTableSkeleton from "@/features/agents/components/skeleton/agent-table-skeleton";

export default function AgentsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = 10;

  const { data, isLoading } = useFetchAllAgents(page, limit);
  const { data: pos, isLoading: isLoadingPos } = useFetchPos();

  const agents = data?.agents ?? [];
  const totalPages = data?.totalPages ?? 1;

  return (
    <PageContainer>
      <PageHeader className="items-end md:center">
        <PageHeaderActions className="flex-col items-start md:items-center md:flex-row">
          <PageHeaderTitle>Agentes</PageHeaderTitle>
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
              <Button variant={"red"}>
                <Icon name="adicionar_br" className="size-3" />
                <span className="hidden md:block">Adicionar agente</span>
              </Button>
            </DialogTrigger>
            <RegisterAgentForm pos={{ data: pos, isLoading: isLoadingPos }} />
          </Dialog>
        </PageHeaderActions>
      </PageHeader>

      {isLoading ? (
        <div className="grow">
          <AgentTableSkeleton />
        </div>
      ) : (
        <AgentTable agents={agents} />
      )}

      <div className="w-full flex items-center justify-between lg:justify-normal">
        <Pagination
          totalPages={totalPages}
          handlePaginate={(newPage) =>
            setSearchParams({ page: newPage.toString() })
          }
        />
        <div className="hidden lg:flex gap-1 lg:min-w-32">
          <span>Páginas: {totalPages}</span>
        </div>
      </div>
    </PageContainer>
  );
}
