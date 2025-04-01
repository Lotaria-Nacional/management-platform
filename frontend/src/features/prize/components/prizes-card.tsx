import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/shared/components/ui/card";
import PrizesChart from "./prizes-chart";
import { Button } from "@/shared/components/ui/button";

function PrizesCard() {
  return (
    <Card className="w-full items-center h-full">
      <CardHeader className="flex w-full items-center justify-between px-0">
        <CardTitle className="text-[20px] font-medium">Prémios</CardTitle>
        <Button className="text-RED-100 px-0" variant={"link"}>
          Actualizar
        </Button>
      </CardHeader>

      <CardContent className="flex flex-col gap-[30px] items-center justify-center w-full">
        <PrizesChart />
      </CardContent>
      <CardFooter className="flex flex-col gap-1 text-[12px]">
        <div className="w-full flex items-center gap-10 justify-start">
          <div className="flex items-center gap-1">
            <span className="size-[9px] rounded-full bg-RED-200" />
            <span>50.000 AKZ</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="size-[9px] rounded-full bg-RED-200" />
            <span>50-280.000 AKZ</span>
          </div>
        </div>
        <div className="w-full flex items-center gap-10 justify-start">
          <div className="flex items-center gap-1">
            <span className="size-[9px] rounded-full bg-RED-200" />
            <span>50.000 AKZ</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="size-[9px] rounded-full bg-RED-200" />
            <span>50-280.000 AKZ</span>
          </div>
        </div>
        <div className="w-full flex items-center gap-10 justify-start">
          <div className="flex items-center gap-1">
            <span className="size-[9px] rounded-full bg-RED-200" />
            <span>50.000 AKZ</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="size-[9px] rounded-full bg-RED-200" />
            <span>Jackpot</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default PrizesCard;
