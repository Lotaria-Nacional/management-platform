import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { toast } from "react-toastify"
import { TerminalEntity } from "../types"
import Icon from "@/components/shared/icon"
import { Button } from "@/components/ui/button"
import EditTerminalForm from "./edit-terminal-form"
import { AgentEntity } from "@/features/agents/types"
import { useRemoveTerminal } from "../hooks/use-remove-terminal"
import { renderCellData } from "@/app/utils/render-cell"
import HoverCardTerminalData from "@/components/shared/hover-card-terminal-data"
import RemoveDataDialog from "@/components/shared/remove-data-dialog"

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
          {terminals?.map((terminal, idx) => (
            <TableRow
              key={idx}
              className="h-table-cell text-body leading-body font-[400] text-black/50"
            >
              <TableCell className="h-full">
                {renderCellData(terminal?.id_reference)}
              </TableCell>
              <TableCell className="h-full">
                {renderCellData(terminal?.serial)}
              </TableCell>
              <TableCell className="h-full">
                {renderCellData(terminal?.sim_card)}
              </TableCell>
              <HoverCard>
                <HoverCardTrigger asChild className="cursor-pointer">
                  <TableCell className="h-full">
                    {renderCellData(terminal?.agent?.id_reference)}
                  </TableCell>
                </HoverCardTrigger>
                <HoverCardContent>
                  {terminal?.agent ? (
                    <HoverCardTerminalData data={terminal?.agent} />
                  ) : (
                    <span>Não há nenhum agente.</span>
                  )}
                </HoverCardContent>
              </HoverCard>

              <TableCell className="h-full space-x-1">
                {terminal?.pin ?? "N/D"}
              </TableCell>
              <TableCell className="h-full space-x-1">
                {terminal?.puk ?? "N/D"}
              </TableCell>
              <TableCell className="h-full space-x-1">
                <div
                  className={`w-fit text-center rounded-full px-3 py-1 ${
                    terminal?.agent
                      ? "bg-RED-200 text-RED-600"
                      : "bg-GREEN-200 text-GREEN-600"
                  }`}
                >
                  {terminal?.agent ? "Em uso" : "Livre"}
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
                    <DialogTitle>Editar terminal</DialogTitle>
                    <DialogDescription>
                      Você pode corrigir ou atualizar os dados deste terminal.
                    </DialogDescription>
                    <EditTerminalForm terminal={terminal} agents={agents} />
                  </DialogContent>
                </Dialog>

                <RemoveDataDialog
                  isPending={isPending}
                  removeFn={() => handleRemoveTerminal(terminal.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
