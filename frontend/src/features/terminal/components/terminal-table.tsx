import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { Terminal } from "../types"

type Props = {
  terminals: Terminal[]
}

export default function TerminalTable({ terminals }: Props) {
  return (
    <div className="bg-white rounded-card p-4 w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID Terminal</TableHead>
            <TableHead>Série</TableHead>
            <TableHead>Sim Card</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {terminals.map((terminal) => (
            <TableRow id={terminal._id}>
              <TableCell>{terminal.props.id_terminal}</TableCell>
              <TableCell>{terminal.props.serial}</TableCell>
              <TableCell>{terminal.props.sim_card}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
