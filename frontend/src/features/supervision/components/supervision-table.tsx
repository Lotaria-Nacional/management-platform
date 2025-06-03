import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
} from "@/components/ui/table";
import { AgentEntity } from "@/features/agents/types";
import { REVISION_TABLE_HEADER } from "../constants/table";

type Props = {
  agents?: AgentEntity[];
};

export default function SupervisionHistoryTable(_props: Props) {
  return (
    <div className="bg-white rounded-table w-full shadow-table">
      <Table>
        <TableHeader>
          <TableRow className="bg-GRAY-200/35 text-body leading-body font-medium w-full">
            <TableHead className="h-table-cell w-table-cell rounded-tl-table">
              ID Agente
            </TableHead>
            {REVISION_TABLE_HEADER.map((head) => (
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
          <TableRow>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
