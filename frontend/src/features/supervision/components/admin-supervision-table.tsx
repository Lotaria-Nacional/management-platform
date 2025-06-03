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

type Props = {
  data: typeof historyData;
};

export default function AdminSupervisionTable({ data }: Props) {
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
          {data.map((data) => (
            <TableRow key={data.idAgente}>
              <TableCell>{data.idAgente}</TableCell>
              <TableCell>{data.data}</TableCell>
              <TableCell>{formatPrice(data.saldoInicial)}</TableCell>
              <TableCell>{formatPrice(data.deposito)}</TableCell>
              <TableCell>{formatPrice(data.vendas)}</TableCell>
              <TableCell>{formatPrice(data.pagamentos)}</TableCell>
              <TableCell>{formatPrice(data.final)}</TableCell>
              <TableCell>
                <span
                  className={`px-3 py-1 rounded-full ${checkAgentAlert(
                    data.alertas
                  )}`}
                >
                  {data.alertas}
                </span>
              </TableCell>
              <TableCell>
                <Button
                  style={{ border: "1px solid #eee" }}
                  className="bg-white text-black shadow-none text-xs hover:bg-GRAY-150"
                >
                  Marcar supervisão
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
