import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  TableHeader,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { AgentEntity } from "../types";
import Icon from "@/components/shared/icon";
import EditAgentForm from "./edit-agent-form";
import { AGENT_TABLE_HEADER } from "../constants/agent-table-header";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type Props = {
  agents: AgentEntity[];
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
            {AGENT_TABLE_HEADER.map((head) => (
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
          {agents &&
            agents.map((agent) => (
              <TableRow
                id={agent.id}
                className="h-table-cell text-body leading-body font-[400] text-black/50"
              >
                <TableCell className="h-full">{agent.agent_id}</TableCell>
                <TableCell className="h-full">{agent.first_name}</TableCell>
                <TableCell className="h-full">{agent.last_name}</TableCell>
                <TableCell className="h-full">{agent.phone}</TableCell>
                <TableCell className="h-full">
                  {agent.afrimoney || "N/D"}
                </TableCell>
                <TableCell className="h-full">{agent.zone}</TableCell>
                <TableCell className="h-full">{agent.city}</TableCell>
                <TableCell className="h-full">{agent.province}</TableCell>
                <TableCell className="h-full">{agent.status}</TableCell>
                <TableCell className="h-full">
                  <DropdownMenu>
                    <Dialog>
                      <DropdownMenuTrigger className="cursor-pointer">
                        <Icon name="dots" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Icon name="avaliar" />
                          <span>Revisar</span>
                        </DropdownMenuItem>

                        <DialogTrigger>
                          <DropdownMenuItem>
                            <Icon name="edit" />
                            <span>Editar</span>
                          </DropdownMenuItem>
                        </DialogTrigger>
                      </DropdownMenuContent>
                      <DialogContent>
                        <EditAgentForm agent={agent} />
                      </DialogContent>
                    </Dialog>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
