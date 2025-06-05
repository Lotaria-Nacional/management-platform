import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TerminalEntity } from "../types";
import Icon from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import EditTerminalForm from "./edit-terminal-form";
import { AgentEntity } from "@/features/agents/types";
import { checkArrayData } from "@/app/utils/check-data";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "react-toastify";
import { useRemoveTerminal } from "../hooks/use-remove-terminal";
import Loading from "@/components/shared/loading";

type Props = {
  terminals?: TerminalEntity[];
  agents?: AgentEntity[];
};

export default function TerminalTable({ terminals, agents }: Props) {
  const { mutateAsync, isPending } = useRemoveTerminal();

  const handleRemoveTerminal = async (id: string) => {
    try {
      await mutateAsync(id);
      toast.success("Removido com sucesso");
    } catch (error) {
      toast.error("Erro ao remover o terminal");
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-table w-full shadow-table">
      <Table>
        <TableHeader>
          <TableRow className="bg-GRAY-200/35 text-body leading-body font-medium w-full">
            <TableHead className="h-table-cell w-table-cell rounded-tl-table">
              ID Terminal
            </TableHead>
            <TableHead className="h-full w-table-cell">Série</TableHead>
            <TableHead className="h-full w-table-cell">Sim Card</TableHead>
            <TableHead className="h-full w-table-cell">Agente</TableHead>
            <TableHead className="h-full w-table-cell">Estado</TableHead>
            <TableHead className="h-full w-table-cell rounded-tr-table">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {terminals &&
            checkArrayData(terminals) &&
            terminals.map((terminal, idx) => (
              <TableRow
                key={idx}
                className="h-table-cell text-body leading-body font-[400] text-black/50"
              >
                <TableCell className="h-full">
                  {terminal.id_terminal ?? "N/D"}
                </TableCell>
                <TableCell className="h-full">
                  {terminal.serial ?? "N/D"}
                </TableCell>
                <TableCell className="h-full">
                  {terminal.sim_card === "" || terminal.sim_card === undefined
                    ? "N/D"
                    : terminal.sim_card}
                </TableCell>
                <TableCell className="h-full space-x-1">
                  {terminal.agent ? terminal.agent.agent_id : "N/D"}
                </TableCell>
                <TableCell className="h-full space-x-1">
                  <div
                    className={`w-[120px] text-center rounded-full px-3 py-1 ${
                      terminal.agent
                        ? "bg-RED-200 text-RED-600"
                        : "bg-GREEN-200 text-GREEN-600"
                    }`}
                  >
                    {terminal.agent ? "Em uso" : "Livre"}
                  </div>
                </TableCell>
                <TableCell className="h-full">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size={"icon"} variant={"ghost"}>
                        <Icon name="edit" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <EditTerminalForm terminal={terminal} agents={agents} />
                    </DialogContent>
                  </Dialog>

                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button size={"icon"} variant={"ghost"}>
                        <Icon name="trash" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Tens a certeza que pretendes remover este terminal?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Harum, assumenda?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel asChild>
                          <Button className="bg-GRAY-300">Cancelar</Button>
                        </AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-RED-800"
                          disabled={isPending}
                          onClick={() => handleRemoveTerminal(terminal.id)}
                        >
                          {isPending ? <Loading /> : "Confirmar"}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
