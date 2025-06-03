import { Button } from "@/components/ui/button";
import { formatPrice } from "@/app/utils/format-price";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { historyData } from "@/db/agents";
import { checkAgentAlert } from "./utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import RevisionAgentsForm from "@/features/agents/components/revision-agent-form";

type Props = {
  data: typeof historyData;
};

export default function SupervisorSupervisionTable({ data }: Props) {
  return (
    <div className="pt-8 bg-GRAY-120">
      <Table className="min-w-[500px] bg-white">
        <TableHeader>
          <TableRow className="bg-GRAY-150">
            <TableHead>ID Agente</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Saldo inicial</TableHead>
            <TableHead>Depósito</TableHead>
            <TableHead>Vendas</TableHead>
            <TableHead>Pagamentos</TableHead>
            <TableHead>Final</TableHead>
            <TableHead>Alertas</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((d) => (
            <TableRow key={d.idAgente}>
              <TableCell>{d.idAgente}</TableCell>
              <TableCell>{d.data}</TableCell>
              <TableCell>{formatPrice(d.saldoInicial)}</TableCell>
              <TableCell>{formatPrice(d.deposito)}</TableCell>
              <TableCell>{formatPrice(d.vendas)}</TableCell>
              <TableCell>{formatPrice(d.pagamentos)}</TableCell>
              <TableCell>{formatPrice(d.final)}</TableCell>
              <TableCell>
                <span
                  className={`px-3 py-1 rounded-full ${checkAgentAlert(
                    d.alertas
                  )}`}
                >
                  {d.alertas}
                </span>
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      style={{ border: "1px solid #eee" }}
                      className="bg-white text-black shadow-none text-xs hover:bg-GRAY-150"
                    >
                      Revisar
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <RevisionAgentsForm id={d.idAgente} />
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
