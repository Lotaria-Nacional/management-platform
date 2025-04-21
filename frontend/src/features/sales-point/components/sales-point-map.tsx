import { Card } from "@/components/ui/card"
import GooglMap from "@/features/google-maps/components/google-map"

function SalesPointMap() {
  return (
    <Card className="h-[344px] lg:h-full p-0">
      <GooglMap />
    </Card>
  )
}

export default SalesPointMap
