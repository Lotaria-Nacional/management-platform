import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import TerminalAndPOSStatistics from "./terminal-and-pos-statistics"

function TerminalAndPosCard() {
  return (
    <Card className="h-full">
      <CardHeader className="flex w-full items-center justify-between px-0">
        <CardTitle className="text-[20px] font-medium">
          Terminais e POS
        </CardTitle>
        <Button className="text-RED-100 px-0" variant={"link"}>
          Actualizar
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-10">
        <TerminalAndPOSStatistics state={"active"} percentage={93.75} />
        <TerminalAndPOSStatistics state={"on-boarding"} percentage={1.05} />
        <TerminalAndPOSStatistics state={"canceled"} percentage={5.2} />
      </CardContent>
    </Card>
  )
}

export default TerminalAndPosCard
