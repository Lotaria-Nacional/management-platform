import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
} from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { toast } from "react-toastify"
import { TerminalEntity } from "../types"
import Icon from "@/components/shared/icon"
import { Button } from "@/components/ui/button"
import Loading from "@/components/shared/loading"
import EditTerminalForm from "./edit-terminal-form"
import { AgentEntity } from "@/features/agents/types"
import { checkArrayData } from "@/app/utils/check-data"
import { useRemoveTerminal } from "../hooks/use-remove-terminal"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

type Props = {
  terminals?: TerminalEntity[]
  agents?: AgentEntity[]
}

export default function TerminalTable({ terminals, agents }: Props) {
  const { mutateAsync, isPending } = useRemoveTerminal()

  const handleRemoveTerminal = async (id: string) => {
    const response = await mutateAsync(id)
    if (response.sucess) {
      toast.success(response.message)
    } else {
      toast.success(response.message)
    }
  }

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
            <TableHead className="h-full w-table-cell">Pin</TableHead>
            <TableHead className="h-full w-table-cell">Puk</TableHead>
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
                  {terminal.id_reference}
                </TableCell>
                <TableCell className="h-full">
                  {terminal.serial ?? "N/D"}
                </TableCell>
                <TableCell className="h-full">
                  {terminal.sim_card ?? "N/D"}
                </TableCell>
                <TableCell className="h-full space-x-1">
                  {terminal.agent?.id_reference ?? "N/D"}
                </TableCell>
                <TableCell className="h-full space-x-1">
                  {terminal.pin ?? "N/D"}
                </TableCell>
                <TableCell className="h-full space-x-1">
                  {terminal.puk ?? "N/D"}
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
                          Esta ação não pode ser desfeita. O terminal será
                          removido permanentemente da plataforma.
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
  )
}
