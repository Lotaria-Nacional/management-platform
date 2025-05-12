import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  TableHeader,
} from "@/components/ui/table";
import { Agent } from "../types";
import Icon from "@/components/shared/icon";

type Props = {
  agents: Agent[];
};

export default function AgentTable({ agents }: Props) {
  return (
    <div className="bg-white rounded-table w-full shadow-table">
      <Table>
        <TableHeader>
          <TableRow className="bg-GRAY-200/35 text-body leading-body font-medium w-full">
            <TableHead className="h-table-cell w-table-cell rounded-tl-table">
              ID Agente
            </TableHead>
            <TableHead className="h-full w-table-cell">Nome</TableHead>
            <TableHead className="h-full w-table-cell">Sobrenome</TableHead>
            <TableHead className="h-full w-table-cell">Nº Telefone</TableHead>
            <TableHead className="h-full w-table-cell">Afrimoney</TableHead>
            <TableHead className="h-full w-table-cell">Zona</TableHead>
            <TableHead className="h-full w-table-cell">Cidade</TableHead>
            <TableHead className="h-full w-table-cell">Província</TableHead>
            <TableHead className="h-full w-table-cell">Status</TableHead>
            <TableHead className="h-full w-table-cell rounded-tr-table">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {agents &&
            agents.map((agent) => (
              <TableRow
                id={agent._id}
                className="h-table-cell text-body leading-body font-[400] text-black/50"
              >
                <TableCell className="h-full">{agent.props.agent_id}</TableCell>
                <TableCell className="h-full">
                  {agent.props.first_name}
                </TableCell>
                <TableCell className="h-full">
                  {agent.props.last_name}
                </TableCell>
                <TableCell className="h-full">{agent.props.phone}</TableCell>
                <TableCell className="h-full">
                  {agent.props.afrimoney || "N/D"}
                </TableCell>
                <TableCell className="h-full">{agent.props.zone}</TableCell>
                <TableCell className="h-full">{agent.props.city}</TableCell>
                <TableCell className="h-full">{agent.props.province}</TableCell>
                <TableCell className="h-full">{agent.props.status}</TableCell>
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
