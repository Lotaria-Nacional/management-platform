import PageContainer from "@/components/layout/page-container"
import TerminalTable from "@/features/terminal/components/terminal-table"
import { useFetchTerminals } from "@/features/terminal/hooks/use-fetch-terminals"

export default function TerminalsPage() {
  const { terminals } = useFetchTerminals()
  return (
    <PageContainer>
      <TerminalTable terminals={terminals} />
    </PageContainer>
  )
}
