import Icon from "@/components/shared/icon"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { COLORS } from "@/app/constants/colors"
import Loading from "@/components/shared/loading"
import { useInView } from "react-intersection-observer"
import PageHeader from "@/components/shared/page-header"
import { TerminalEntity } from "@/features/terminal/types"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import PageContainer from "@/components/layout/page-container"
import PageHeaderTitle from "@/components/shared/page-header-title"
import PageHeaderActions from "@/components/shared/page-header-actions"
import TerminalTable from "@/features/terminal/components/terminal-table"
import { useFetchInfiniteData } from "@/app/hooks/use-fetch-infinite-data"
import { useFetchAllAgents } from "@/features/agents/hooks/use-fetch-agents"
import AddTerminalForm from "@/features/terminal/components/add-terminal-form"
import { useFetchInfiniteTerminals } from "@/features/terminal/hooks/use-fetch-infinite-terminals"
import TerminalTableSkeleton from "@/features/terminal/components/skeleton/terminal-table-skeleton"
import InputSearch from "@/components/shared/search"

export default function TerminalsPage() {
  const {
    data: terminals,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useFetchInfiniteTerminals()

  const { data: agents, isLoading: isLoadingAgents } = useFetchAllAgents()

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

  return (
    <PageContainer>
      <PageHeader className="items-end md:center">
        <PageHeaderActions className="flex-col items-start md:items-center md:flex-row">
          <PageHeaderTitle>Terminais</PageHeaderTitle>
          <InputSearch />
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
            <DialogContent>
              <AddTerminalForm
                agents={agents?.data}
                isLoading={isLoadingAgents}
              />
            </DialogContent>
          </Dialog>
        </PageHeaderActions>
      </PageHeader>
      {isLoading ? (
        <TerminalTableSkeleton />
      ) : (
        <TerminalTable
          agents={agents?.data}
          terminals={terminals?.pages.flatMap((page) => page.data)}
        />
      )}

      <div ref={ref} className="h-1" />

      {isFetchingNextPage && (
        <div className="w-full flex items-center justify-center gap-2">
          <Loading size={6} color={COLORS.RED[600]} />
        </div>
      )}
    </PageContainer>
  )
}
