import { useEffect } from "react";
import Icon from "@/components/shared/icon";
import { Input } from "@/components/ui/input";
import { COLORS } from "@/app/constants/colors";
import { Button } from "@/components/ui/button";
import Loading from "@/components/shared/loading";
import { useInView } from "react-intersection-observer";
import PageHeader from "@/components/shared/page-header";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import PageContainer from "@/components/layout/page-container";
import { useFetchPos } from "@/features/pos/hooks/use-fetch-pos";
import AgentTable from "@/features/agents/components/agent-table";
import PageHeaderTitle from "@/components/shared/page-header-title";
import PageHeaderActions from "@/components/shared/page-header-actions";
import RegisterAgentForm from "@/features/agents/components/register-agent-form";
import { useFetchInfiniteAgents } from "@/features/agents/hooks/use-fetch-infinite-agents";
import AgentTableSkeleton from "@/features/agents/components/skeleton/agent-table-skeleton";

export default function AgentsPage() {
  const {
    data: agents,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useFetchInfiniteAgents();

  const { data: pos, isLoading: isLoadingPos } = useFetchPos();

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
            <RegisterAgentForm
              pos={{ data: pos?.data, isLoading: isLoadingPos }}
            />
          </Dialog>
        </PageHeaderActions>
      </PageHeader>

      {isLoading ? (
        <div className="grow">
          <AgentTableSkeleton />
        </div>
      ) : (
        <AgentTable agents={agents?.pages.flatMap((page) => page.data)} />
      )}

      <div ref={ref} className="h-2" />

      {isFetchingNextPage && (
        <div className="w-full flex items-center justify-between lg:justify-center">
          <Loading size={6} color={COLORS.RED[600]} />
        </div>
      )}
    </PageContainer>
  );
}
