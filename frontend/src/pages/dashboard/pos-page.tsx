import PosTable from "@/features/pos/components/pos-table"
import PageContainer from "@/components/layout/page-container"
import { useFetchPos } from "@/features/pos/hooks/use-fetch-pos"

export default function PosPage() {
  const { pos } = useFetchPos()
  return (
    <PageContainer>
      <PosTable pos={pos} />
    </PageContainer>
  )
}
