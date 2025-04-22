import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { TERMINAL_AND_POS_DATA } from "@/db/terminal-and-pos";

type Props = {};

export default function TerminalAndPOSTable({}: Props) {
  return (
    <div className="bg-white rounded-button p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Agente ID</TableHead>
            <TableHead className="text-center">Area</TableHead>
            <TableHead className="text-center">Zona</TableHead>
            <TableHead className="text-center">Vendas</TableHead>
            <TableHead className="text-center">Actual balance</TableHead>
            <TableHead className="text-center">State</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TERMINAL_AND_POS_DATA.map((data) => (
            <TableRow key={data.agentId}>
              <TableCell className="text-center">{data.agentId}</TableCell>
              <TableCell className="text-center">{data.area}</TableCell>
              <TableCell className="text-center">{data.zone}</TableCell>
              <TableCell className="text-center">{data.sales}</TableCell>
              <TableCell className="text-center">
                {data.actualBalance}
              </TableCell>
              <TableCell className="text-center">
                <TerminalAndPosTableCellStatus isActive={data.state} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const TerminalAndPosTableCellStatus = ({ isActive }: { isActive: boolean }) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 rounded-full p-2 h-8 min-w-20 max-w-24 mx-auto ${
        isActive
          ? "bg-[#14BA6D]/10 text-[#037847]"
          : "bg-RED-200/10  text-RED-300"
      }`}
    >
      <span
        className={`${
          isActive ? "bg-[#037847]" : "bg-RED-300"
        } rounded-full size-2`}
      />
      <span>{isActive ? "Active" : "Blocked"}</span>
    </div>
  );
};
