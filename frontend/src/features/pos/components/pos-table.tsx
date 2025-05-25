import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
} from "@/components/ui/table"
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu"
import { PosEntity } from "../types"
import EditPosForm from "./edit-pos-form"
import Icon from "@/components/shared/icon"
import { Button } from "@/components/ui/button"
import { AgentEntity } from "@/features/agents/types"
import { POS_TABLE_HEADER } from "../constants/table"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

type Props = {
  pos: PosEntity[]
  isLoadingAgents: boolean
  agents?: AgentEntity[]
}
export default function PosTable({ pos, isLoadingAgents, agents }: Props) {
  const renderCellData = (data: any) => {
    if (!data) return "N/D"
    return data
  }
  return (
    <div className="bg-white rounded-table w-full shadow-table">
      <Table>
        <TableHeader>
          <TableRow className="bg-GRAY-200/35 text-body leading-body font-medium w-full">
            {POS_TABLE_HEADER.map((head, index) => (
              <TableHead
                className={`h-table-cell w-table-cell ${
                  index === 0 && "rounded-tl-table"
                }`}
              >
                {head}
              </TableHead>
            ))}

            <TableHead className="h-full w-table-cell rounded-tr-table">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pos &&
            pos.length > 0 &&
            pos.map((pos) => (
              <TableRow
                id={pos.id}
                className="h-table-cell text-body leading-body font-[400] text-black/50"
              >
                <TableCell className="h-full">
                  {renderCellData(pos.id_reference)}
                </TableCell>
                <TableCell className="h-full">
                  {renderCellData(pos.admin)}
                </TableCell>
                <TableCell className="h-full">
                  {renderCellData(pos.coordinates)}
                </TableCell>
                <TableCell className="h-full">
                  {renderCellData(pos.zone.zone_number)}
                </TableCell>
                <TableCell className="h-full">
                  {renderCellData(pos.area.name)}
                </TableCell>
                <TableCell className="h-full">
                  {renderCellData(pos.type.name)}
                </TableCell>
                <TableCell className="h-full">
                  {renderCellData(pos.province.name)}
                </TableCell>
                <TableCell className="h-full">
                  {renderCellData(pos.agent.id.substring(1, 10))}
                </TableCell>
                <TableCell className="h-full">
                  {pos.licence.status ? "POSSUI" : "NÃO POSSUI"}
                </TableCell>
                <TableCell className="h-full">
                  <DropdownMenu>
                    <Dialog>
                      <DropdownMenuTrigger asChild>
                        <Button size={"icon"} variant={"ghost"}>
                          <Icon name="dots" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DialogTrigger asChild>
                          <DropdownMenuItem>
                            <Icon name="edit" />
                            <span>Editar</span>
                          </DropdownMenuItem>
                        </DialogTrigger>
                        <DropdownMenuItem>
                          <Icon name="trash" />
                          <span>Remover</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                      <DialogContent>
                        <EditPosForm
                          isLoading={isLoadingAgents}
                          agents={agents}
                          pos={pos}
                        />
                      </DialogContent>
                    </Dialog>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}
