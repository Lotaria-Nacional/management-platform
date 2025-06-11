import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog"
import Icon from "@/components/shared/icon"
import { Button } from "@/components/ui/button"
import InputSearch from "@/components/shared/search"
import { Separator } from "@/components/ui/separator"
import { useInView } from "react-intersection-observer"
import PageHeader from "@/components/shared/page-header"
import { TerminalEntity } from "@/features/terminal/types"
import FetchLoader from "@/components/shared/fetch-loader"
import PageContainer from "@/components/layout/page-container"
import PageHeaderTitle from "@/components/shared/page-header-title"
import PageHeaderActions from "@/components/shared/page-header-actions"
import TerminalTable from "@/features/terminal/components/terminal-table"
import { useFetchInfiniteData } from "@/app/hooks/use-fetch-infinite-data"
import { useFetchAllAgents } from "@/features/agents/hooks/use-fetch-agents"
import AddTerminalForm from "@/features/terminal/components/add-terminal-form"
import { useFetchInfiniteTerminals } from "@/features/terminal/hooks/use-fetch-infinite-terminals"
import TerminalTableSkeleton from "@/features/terminal/components/skeleton/terminal-table-skeleton"

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

  const flattenedTerminals = terminals?.pages.flatMap((page) => page.data)

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
              <DialogTitle>Adicionar terminal</DialogTitle>
              <DialogDescription>
                Preencha os dados abaixo para cadastrar um novo terminal no
                sistema.
              </DialogDescription>
              <Separator className="my-2" />
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
        <TerminalTable agents={agents?.data} terminals={flattenedTerminals} />
      )}

      <div ref={ref} className="h-1" />
      {isFetchingNextPage && <FetchLoader />}
    </PageContainer>
  )
}
