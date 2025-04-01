import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Progress } from "@/shared/components/ui/progress";

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
      <CardContent>
        <div className="flex flex-col gap-1">
          <label>Activos</label>
          <Progress
            value={400}
            className="text-green-600 bg-green-600"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Em branco</label>
          <Progress
            value={300}
            className="text-green-600 bg-green-600"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Cancelados</label>
          <Progress
            value={300}
            className="text-green-600 bg-green-600"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default TerminalAndPosCard;
