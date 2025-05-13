import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SaleChannelStatistic from "./sale-channel-statistic";

function SaleChannelCard() {
  return (
    <Card className="w-full h-full">
      <CardHeader className="flex w-full items-center justify-between px-0">
        <CardTitle className="text-[20px] font-medium">
          Canais de Venda
        </CardTitle>
        <Button className="text-RED-600 px-0" variant={"link"}>
          Actualizar
        </Button>
      </CardHeader>

      <CardContent className="flex flex-col gap-[30px] w-full">
        <section className="text-GRAY-700 w-full flex justify-between">
          <SaleChannelStatistic name="Agências" amount={50} />
          <SaleChannelStatistic name="Terminais" amount={300} />
        </section>
        <section className="text-GRAY-700 w-full flex justify-between">
          <SaleChannelStatistic name="Elephant Bet" amount={9000} />
          <SaleChannelStatistic name="Arreiou" amount={150} />
        </section>
        <section className="text-GRAY-700 w-full flex justify-between">
          <SaleChannelStatistic name="Sonangol" amount={60} />
          <SaleChannelStatistic name="Kibabo" amount={40} />
        </section>
      </CardContent>
    </Card>
  );
}

export default SaleChannelCard;
