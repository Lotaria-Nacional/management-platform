import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AgentEntity } from "../types"
import { renderCellData } from "@/app/utils/render-cell"

type Props = {
  agent: AgentEntity
}

export default function AgentDetailsDialog({ agent }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <header>
        <h2 className="font-semibold">{`${agent.first_name} ${agent.last_name}`}</h2>
      </header>
      <ul className="flex flex-col gap-2">
        <li className="flex gap-2">
          <span className="font-semibold">Sexo:</span>
          <span>{renderCellData(agent.genre)}</span>
        </li>
        <li className="flex gap-2">
          <span className="font-semibold">Nº do BI:</span>
          <span>{renderCellData(agent.bi_number)}</span>
        </li>

        <li className="flex gap-2 flex-col">
          <h4 className="font-semibold">Detalhes do terminal</h4>
          <Table className="border">
            <TableHeader>
              <TableRow>
                <TableHead>ID Ref</TableHead>
                <TableHead>Nº Série</TableHead>
                <TableHead>Cartão SIM</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  {renderCellData(agent.terminal?.id_reference)}
                </TableCell>
                <TableCell>{renderCellData(agent.terminal?.serial)}</TableCell>
                <TableCell>
                  {renderCellData(agent.terminal?.sim_card)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </li>

        <li className="flex gap-2 flex-col">
          <h4 className="font-semibold">Detalhes do POS</h4>
          <Table className="border">
            <TableHeader>
              <TableRow>
                <TableHead>Latitude</TableHead>
                <TableHead>Longitude</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{renderCellData(agent.pos?.latitude)}</TableCell>
                <TableCell>{renderCellData(agent.pos?.longitude)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </li>
      </ul>
    </div>
  )
}
