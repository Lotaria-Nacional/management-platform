import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  TableHeader,
} from "@/components/ui/table";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { AgentEntity } from "../types";
import Icon from "@/components/shared/icon";
import EditAgentForm from "./edit-agent-form";
import { Button } from "@/components/ui/button";
import { PosEntity } from "@/features/pos/types";
import { useInView } from "react-intersection-observer";
import { AGENT_TABLE_HEADER } from "../constants/agent-table-header";
import { useFetchInfiniteData } from "@/app/hooks/use-fetch-infinite-data";
import { useFetchInfinitePos } from "@/features/pos/hooks/use-fetch-infinite-pos";
import { useFetchTerminals } from "@/features/terminal/hooks/use-fetch-many-terminals";
import { useFetchInfiniteTerminals } from "@/features/terminal/hooks/use-fetch-infinite-terminals";

type Props = {
  agents?: AgentEntity[];
};

export default function AgentTable({ agents }: Props) {
  const {
    data: pos,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading: isLoadingPos,
  } = useFetchInfinitePos();

  const { data: terminals, isLoading: isLoadingTerminals } =
    useFetchInfiniteTerminals();

  const { inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useFetchInfiniteData<PosEntity>({
    inView,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  });

  const flatPos = pos?.pages.flatMap((page) => page.data) || [];
  const flatTerminals = terminals?.pages.flatMap((page) => page.data) || [];

  const renderCellData = (data: any | undefined) => data ?? "N/D";

  return (
    <div className="bg-white rounded-table w-full shadow-table">
      <Table>
        <TableHeader>
          <TableRow className="bg-GRAY-200/35 text-body leading-body font-medium w-full">
            <TableHead className="h-table-cell w-table-cell rounded-tl-table">
              ID Agente
            </TableHead>
            {AGENT_TABLE_HEADER.map((head) => (
              <TableHead key={head} className="h-full w-table-cell">
                {head}
              </TableHead>
            ))}
            <TableHead className="h-full w-table-cell rounded-tr-table">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {agents &&
            agents.map((agent, index) => (
              <TableRow
                key={index}
                className="h-table-cell text-body leading-body font-[400] text-black/50"
              >
                <TableCell className="h-full">{agent.id_reference}</TableCell>
                <TableCell className="h-full">
                  {renderCellData(agent.first_name)}
                </TableCell>
                <TableCell className="h-full">
                  {renderCellData(agent.last_name)}
                </TableCell>
                <TableCell className="h-full">
                  {renderCellData(agent.phone)}
                </TableCell>
                <TableCell className="h-full">
                  {renderCellData(agent.afrimoney)}
                </TableCell>
                <TableCell className="h-full">
                  {renderCellData(agent.pos?.zone.value)}
                </TableCell>
                <TableCell className="h-full">
                  {renderCellData(agent.pos?.province.name)}
                </TableCell>
                <TableCell className="h-full">{agent.type}</TableCell>
                <TableCell className="h-full">{agent.status}</TableCell>
                {/** ##################### ACTIONS #######################3 */}
                <TableCell className="h-full">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size={"icon"} variant={"ghost"}>
                        <Icon name="edit" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar agente</DialogTitle>
                        <DialogDescription>
                          Você pode corrigir ou atualizar os dados deste agente.
                        </DialogDescription>
                      </DialogHeader>
                      <EditAgentForm
                        agent={agent}
                        terminal={{
                          data: flatTerminals,
                          isLoading: isLoadingTerminals,
                        }}
                        pos={{
                          data: flatPos,
                          isLoading: isLoadingPos,
                        }}
                      />
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size={"icon"} variant={"ghost"}>
                        <Icon name="olhos" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <p>Dialog</p>
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
