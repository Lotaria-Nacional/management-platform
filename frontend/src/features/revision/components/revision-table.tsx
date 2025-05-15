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
import { REVISION_TABLE_HEADER } from "../constants/table";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import VerifyAgentsForm from "@/features/agents/components/verify-agent-form";
import { RevisionEntity } from "../types";

type ValueProps = "bg" | "text" | "label";

type Props = {
  revisions?: RevisionEntity[];
};

export default function RevisionTable({ revisions }: Props) {
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
        return value
          ? "possui"
          : value === false
          ? "em falta"
          : "sem avaliação";
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
          {revisions &&
            revisions.map((revision) => (
              <TableRow
                id={revision.id}
                className="h-table-cell text-body leading-body font-[400] text-black/50"
              >
                <TableCell className="h-full">{revision.agent.id}</TableCell>
                <TableCell className="h-full">
                  {revision.agent.first_name + " " + revision.agent.last_name}
                </TableCell>

                {Object.entries(revision.items).map(([_, value], index) => (
                  <TableCell key={index} className="p-0">
                    <div
                      className={`${checkValue(
                        "bg",
                        value
                      )} h-full w-fit rounded-[16px] px-4 py-1 `}
                    >
                      <span
                        className={`capitalize ${checkValue("text", value)}`}
                      >
                        {checkValue("label", value)}
                      </span>
                    </div>
                  </TableCell>
                ))}

                <TableCell className="h-full">
                  {revision.image ? (
                    <img src={revision.image} className="size-8" alt="" />
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

                    <VerifyAgentsForm />
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
