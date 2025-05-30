import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { TerminalEntity } from "../types";
import Icon from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import EditTerminalForm from "./edit-terminal-form";
import { AgentEntity } from "@/features/agents/types";
import { checkArrayData } from "@/app/utils/check-data";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

type Props = {
  terminals?: TerminalEntity[];
  agents?: AgentEntity[];
};

export default function TerminalTable({ terminals, agents }: Props) {
  const [editTerminal, setEditTerminal] = useState<TerminalEntity | null>(null);
  const [deleteTerminal, setDeleteTerminal] = useState<TerminalEntity | null>(
    null
  );

  const handleCloseDialogs = () => {
    setEditTerminal(null);
    setDeleteTerminal(null);
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
          {checkArrayData(terminals) &&
            terminals?.map((terminal) => (
              <TableRow
                id={terminal.id}
                className="h-table-cell text-body leading-body font-[400] text-black/50"
              >
                <TableCell className="h-full">{terminal.id_terminal}</TableCell>
                <TableCell className="h-full">{terminal.serial}</TableCell>
                <TableCell className="h-full">
                  {terminal.sim_card === "" || terminal.sim_card === undefined
                    ? "N/D"
                    : terminal.sim_card}
                </TableCell>
                <TableCell className="h-full space-x-1">
                  {!terminal.agent ? "N/D" : terminal.agent.agent_id}
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
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size={"icon"} variant={"ghost"}>
                        <Icon name="dots" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col gap-y-1">
                      <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => {
                          setEditTerminal(terminal);
                          setDeleteTerminal(null); // ensure only one is open
                        }}
                      >
                        <Icon name="edit" />
                        <span>Editar</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => {
                          setDeleteTerminal(terminal);
                          setEditTerminal(null); // ensure only one is open
                        }}
                      >
                        <Icon name="trash" />
                        <span>Remover</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {/* Edit Dialog */}
      {editTerminal && (
        <Dialog open={!!editTerminal} onOpenChange={handleCloseDialogs}>
          <DialogContent>
            <EditTerminalForm agents={agents} terminal={editTerminal} />
          </DialogContent>
        </Dialog>
      )}
      {/* Delete AlertDialog */}
      {deleteTerminal && (
        <AlertDialog open={!!deleteTerminal} onOpenChange={handleCloseDialogs}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Tem certeza que deseja remover este terminal?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Esta ação não pode ser desfeita. O terminal será removido
                permanentemente.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex items-center justify-end w-full gap-3 mt-4">
              <AlertDialogCancel asChild>
                <Button variant={"ghost"}>Cancelar</Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button className="bg-RED-800" variant={"red"}>
                  Remover
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}
