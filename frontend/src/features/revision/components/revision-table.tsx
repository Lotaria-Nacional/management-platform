import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
} from "@/components/ui/table";
import { useCallback } from "react";
import Icon from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { AgentEntity } from "@/features/agents/types";
import { REVISION_TABLE_HEADER } from "../constants/table";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import RevisionAgentsForm from "@/features/agents/components/revision-agent-form";

type ValueProps = "bg" | "text" | "label";

type Props = {
  agents?: AgentEntity[];
};

export default function RevisionTable({ agents }: Props) {
  const checkValue = useCallback((type: ValueProps, value: boolean | null) => {
    switch (type) {
      case "bg":
        return value
          ? "bg-GREEN-100"
          : value === false
          ? "bg-RED-100"
          : "bg-GRAY-100";
      case "text":
        return value
          ? "text-GREEN-700"
          : value === false
          ? "text-RED-700"
          : "text-GRAY-600";
      case "label":
        return value ? "possui" : value === false ? "em falta" : "sem revisão";
    }
  }, []);

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
          {agents &&
            agents.map((agent) => (
              <TableRow
                key={agent.id}
                id={agent.id}
                className="h-table-cell text-body leading-body font-[400] text-black/50"
              >
                <TableCell className="h-full">{agent.agent_id}</TableCell>
                <TableCell className="h-full">
                  {agent.first_name + " " + agent.last_name}
                </TableCell>

                {agent.revision
                  ? Object.entries(agent.revision.items).map(
                      ([_, value], index) => (
                        <TableCell key={index} className="p-0">
                          <div
                            className={`${checkValue(
                              "bg",
                              value
                            )} h-full w-[116.95px] text-center rounded-[16px] px-4 py-1 `}
                          >
                            <span
                              className={`capitalize ${checkValue(
                                "text",
                                value
                              )}`}
                            >
                              {checkValue("label", value)}
                            </span>
                          </div>
                        </TableCell>
                      )
                    )
                  : Array.from({ length: 6 }).map((_, index) => (
                      <TableCell key={index} className="p-0">
                        <div
                          className={`${checkValue(
                            "bg",
                            null
                          )} h-full w-[116.95px] text-center rounded-[16px] px-4 py-1 `}
                        >
                          <span
                            className={`capitalize ${checkValue("text", null)}`}
                          >
                            {checkValue("label", null)}
                          </span>
                        </div>
                      </TableCell>
                    ))}

                <TableCell className="h-full">
                  {agent.revision?.image ? (
                    <img src={agent.revision.image} className="size-8" alt="" />
                  ) : (
                    <span>N/D</span>
                  )}
                </TableCell>

                <TableCell className="h-full flex items-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size={"icon"} variant={"ghost"}>
                        <Icon name="avaliar" />
                      </Button>
                    </DialogTrigger>

                    <RevisionAgentsForm id={agent.id} />
                  </Dialog>

                  <Button size={"icon"} variant={"ghost"}>
                    <Icon name="olhos" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
