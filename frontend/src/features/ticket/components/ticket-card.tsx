import TicketStatistic from "./ticket-statistic";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

function TicketCard() {
  return (
    <Card className="w-full rounded-card h-full">
      <CardHeader className="flex w-full items-center justify-between px-0">
        <CardTitle className="text-[20px] font-medium">Bilhetes</CardTitle>
        <Button className="text-RED-600 px-0" variant={"link"}>
          Actualizar
        </Button>
      </CardHeader>

      <CardContent className="flex flex-col gap-[30px] items-center w-full">
        <TicketStatistic name="Bilhetes Vendidos" total={81} subtotal={8} />
        <TicketStatistic name="Bilhetes Vencedores" total={19} subtotal={-11} />
      </CardContent>
    </Card>
  );
}

export default TicketCard;
