import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import Icon from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import InputSearch from "@/components/shared/search";
import { formatPrice } from "@/app/utils/format-price";
import PageHeader from "@/components/shared/page-header";
import PageContainer from "@/components/layout/page-container";
import { agentHistoryByDate, agentInfoData } from "@/db/agents";
import PageHeaderTitle from "@/components/shared/page-header-title";
import PageHeaderActions from "@/components/shared/page-header-actions";

export default function HistoryActivitiesPage() {
  return (
    <PageContainer>
      <PageHeader>
        <div className="flex items-center gap-2">
          <PageHeaderTitle className="text-nowrap">
            Histórico de atividades
          </PageHeaderTitle>
          <InputSearch />
        </div>
        <PageHeaderActions>
          <Button variant={"white"}>
            <Icon name="filtro" />
            Filtros
          </Button>
        </PageHeaderActions>
      </PageHeader>

      <section className="w-full gap-2 flex items-end pb-4 overflow-x-scroll relative justify-between">
        <div className="sticky top-0 left-0 z-50 ">
          <div className="pt-8 bg-GRAY-120 w-[40vw]">
            <Table className="bg-white">
              <TableHeader>
                <TableRow className="bg-GRAY-200/40">
                  <TableHead className="w-[120.4px]">ID Agente</TableHead>
                  <TableHead className="w-[120.4px]">Área</TableHead>
                  <TableHead className="w-[120.4px]">Zona</TableHead>
                  <TableHead className="w-[120.4px]">Status</TableHead>
                  <TableHead className="w-[120.4px]">Limite</TableHead>
                  <TableHead className="w-[120.4px]">Balança atual</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agentInfoData.map((a) => (
                  <TableRow key={a.idAgente}>
                    <TableCell>{a.idAgente}</TableCell>
                    <TableCell>Área {a.area}</TableCell>
                    <TableCell>Zona {a.zona}</TableCell>
                    <TableCell>{a.status}</TableCell>
                    <TableCell>{formatPrice(a.limite)}</TableCell>
                    <TableCell>{formatPrice(a.balancaAtual)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {agentHistoryByDate.map((a, i) => (
          <div key={i} className="relative flex flex-col items-center">
            <span className="bg-YELLOW-100 px-4 py-1 text-sm">{a.data}</span>
            <div className="flex gap-3 items-center shrink-0 min-w-[400px]">
              <Table className=" bg-white">
                <TableHeader>
                  <TableRow className="bg-GRAY-200/40">
                    <TableHead>Dívida</TableHead>
                    <TableHead>Depósito</TableHead>
                    <TableHead>Balança</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="bg-BLUE-100">
                      {formatPrice(a.divida)}
                    </TableCell>
                    <TableCell className="bg-BLUE-100">
                      {formatPrice(a.deposito)}
                    </TableCell>
                    <TableCell className="bg-GREEN-100">
                      {formatPrice(a.balanca)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        ))}
      </section>
    </PageContainer>
  );
}
