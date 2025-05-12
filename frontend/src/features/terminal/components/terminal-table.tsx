import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Terminal } from "../types";
import Icon from "@/components/shared/icon";

type Props = {
  terminals?: Terminal[];
};

export default function TerminalTable({ terminals }: Props) {
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
            <TableHead className="h-full w-table-cell rounded-tr-table">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {terminals &&
            terminals.length > 0 &&
            terminals.map((terminal) => (
              <TableRow
                id={terminal._id}
                className="h-table-cell text-body leading-body font-[400] text-black/50"
              >
                <TableCell className="h-full">
                  {terminal.props.id_terminal}
                </TableCell>
                <TableCell className="h-full">
                  {terminal.props.serial}
                </TableCell>
                <TableCell className="h-full">
                  {terminal.props.sim_card}
                </TableCell>
                <TableCell className="h-full">
                  <Icon name="dots" />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
