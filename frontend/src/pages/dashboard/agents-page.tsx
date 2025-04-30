import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Agent, getAgents } from "@/db/agents";
import PageContainer from "@/components/layout/page-container";

export default function AgentsPage() {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getAgents();
      setAgents(data);
    };
    fetch();
  }, []);

  return (
    <PageContainer>
      <div className="bg-white rounded-card p-4 w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID Agente</TableHead>
              <TableHead>Nome</TableHead>
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
                <TableCell>{agent.props.first_name}</TableCell>
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
    </PageContainer>
  );
}
