import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { toast } from "react-toastify";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loading from "@/components/shared/loading";
import Fieldset from "@/components/shared/fieldset";
import { AgentEntity } from "@/features/agents/types";
import { checkArrayData } from "@/app/utils/check-data";
import { useEditTerminal } from "../hooks/use-edit-terminal";
import { IEditTerminalRequestDTO, TerminalEntity } from "../types";

type Props = {
  terminal: TerminalEntity;
  agents?: AgentEntity[];
};

export default function EditTerminalForm({ terminal, agents }: Props) {
  const [terminalData, setTerminalData] = useState<IEditTerminalRequestDTO>({
    ...terminal,
    agent_id: terminal.agent ? terminal.agent.id : undefined,
  });
  const { isPending, mutateAsync } = useEditTerminal();

  const handleEditTerminal = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await mutateAsync({
        ...terminalData,
        id: terminal.id,
      });
      toast.success("Terminal editado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleEditTerminal} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-2">
        <Fieldset>
          <label htmlFor="phone" className="font-medium">
            Nº de Série
          </label>
          <div className="w-full">
            <Input
              id="serial"
              className="w-full h-full"
              value={terminalData.serial}
            />
          </div>
        </Fieldset>
        <Fieldset>
          <label htmlFor="phone" className="font-medium">
            SIM Card
          </label>
          <div className="w-full">
            <Input
              id="sim_card"
              className="w-full h-full"
              value={terminalData.sim_card}
            />
          </div>
        </Fieldset>
      </div>
      <Fieldset>
        <label htmlFor="name" className="font-medium">
          Agente
        </label>
        <div className="w-full ">
          <Select
            defaultValue={terminal.agent?.id}
            onValueChange={(value) =>
              setTerminalData({ ...terminalData, agent_id: value })
            }
          >
            <SelectTrigger className="w-full !h-input-sm md:!h-input">
              <SelectValue
                placeholder={
                  terminal.agent?.first_name + " " + terminal.agent?.last_name
                }
              />
            </SelectTrigger>
            <SelectContent
              side="top"
              className="h-[160px] py-3 text-small md:text-body"
            >
              {checkArrayData<AgentEntity>(agents) ? (
                agents?.map((agent) => (
                  <SelectItem key={agent.id} value={agent.id}>
                    <span
                      className={`px-[3px] py-[2px] rounded-[4px] ${
                        agent.terminal
                          ? "bg-GREEN-100 text-GREEN-600"
                          : "bg-RED-100 text-RED-600"
                      }`}
                    >
                      {agent.id}
                    </span>
                    <span>-</span>
                    <span>{agent.first_name + " " + agent.last_name}</span>
                  </SelectItem>
                ))
              ) : (
                <span>Não há agentes ainda.</span>
              )}
            </SelectContent>
          </Select>
        </div>
      </Fieldset>
      <Button
        size={"lg"}
        type="submit"
        variant={"red"}
        className="w-full"
        disabled={isPending}
      >
        {isPending ? <Loading /> : "Atualizar terminal"}
      </Button>
    </form>
  );
}
