import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { Agent } from "../types"

type Props = {
  agents: Agent[]
}

export default function AgentTable({ agents }: Props) {
  return (
    <div className="bg-white rounded-card p-4 w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID Agente</TableHead>
            <TableHead className="w-[200px]">Nome</TableHead>
            <TableHead>Sobrenome</TableHead>
            <TableHead>Nº Telefone</TableHead>
            <TableHead>Afrimoney</TableHead>
            <TableHead>Zona</TableHead>
            <TableHead>Cidade</TableHead>
            <TableHead>Província</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {agents.map((agent) => (
            <TableRow id={agent._id}>
              <TableCell>{agent.props.agent_id}</TableCell>
              <TableCell className="w-[200px]">
                {agent.props.first_name}
              </TableCell>
              <TableCell>{agent.props.last_name}</TableCell>
              <TableCell>{agent.props.phone}</TableCell>
              <TableCell>{agent.props.afrimoney || "N/D"}</TableCell>
              <TableCell>{agent.props.zone}</TableCell>
              <TableCell>{agent.props.city}</TableCell>
              <TableCell>{agent.props.province}</TableCell>
              <TableCell>{agent.props.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
