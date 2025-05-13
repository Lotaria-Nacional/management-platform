import { Button } from "@/components/ui/button";
import TerminalProgressLine from "./terminal-progress-line";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TerminalCard() {
  return (
    <Card className="h-full">
      <CardHeader className="flex w-full items-center justify-between px-0">
        <CardTitle className="text-[20px] font-medium">
          Terminais e POS
        </CardTitle>
        <Button className="text-RED-600 px-0" variant={"link"}>
          Actualizar
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-10">
        <TerminalProgressLine state={"active"} percentage={93.75} />
        <TerminalProgressLine state={"on-boarding"} percentage={1.05} />
        <TerminalProgressLine state={"canceled"} percentage={5.2} />
      </CardContent>
    </Card>
  );
}
