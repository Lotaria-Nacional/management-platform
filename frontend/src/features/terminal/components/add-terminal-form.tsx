import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import {
  DialogClose,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/app/constants/colors";
import { IAddTerminalRequestDTO } from "../types";
import Loading from "@/components/shared/loading";
import Fieldset from "@/components/shared/form/fieldset";
import { AgentEntity } from "@/features/agents/types";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAddTerminal } from "../hooks/use-add-terminal";
import { checkArrayData } from "@/app/utils/check-data";

type Props = {
  agents?: AgentEntity[];
  isLoading: boolean;
};

export default function AddTerminalForm({ agents, isLoading }: Props) {
  const { isPending, mutateAsync } = useAddTerminal();
  const [search, setSearch] = useState("");

  const [terminalData, setTerminalData] = useState<IAddTerminalRequestDTO>({
    serial: "",
    sim_card: "",
    id_terminal: "",
    agent_id: "",
  });

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(terminalData);
      toast.success("oi");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: keyof typeof terminalData
  ) => {
    setTerminalData({ ...terminalData, [key]: e.target.value });
  };

  return (
    <DialogContent className="p-8 w-full max-w-[617px]">
      <DialogHeader className="items-start">
        <DialogTitle>Adicione um Terminal</DialogTitle>
        <DialogDescription>
          Preencha os campos abaixo para adicionar um terminal
        </DialogDescription>
      </DialogHeader>
      <hr className="w-full h-px" />
      <form onSubmit={handleOnSubmit} className="w-full grid gap-6">
        {/** 1ST INPUT FIELDS */}
        <div className="w-full grid-cols-1 grid md:grid-cols-2 gap-3 md:gap-6">
          <Fieldset>
            <label htmlFor="name" className="font-medium">
              Série
            </label>
            <div className="w-full">
              <Input
                id="serial"
                className="w-full h-full"
                placeholder="V8742674627624"
                value={terminalData.serial}
                onChange={(e) => handleInputChange(e, "serial")}
              />
            </div>
          </Fieldset>
          <Fieldset>
            <label htmlFor="phone" className="font-medium">
              Sim card
            </label>
            <div className="w-full">
              <Input
                id="sim_card"
                placeholder="365478625"
                className="w-full h-full"
                value={terminalData.sim_card}
                onChange={(e) => handleInputChange(e, "sim_card")}
              />
            </div>
          </Fieldset>
        </div>

        {/** 2ND INPUT FIELDS */}
        <div className="w-full gap-3 md:gap-6">
          <Fieldset>
            <label htmlFor="name" className="font-medium">
              Agente
            </label>
            <div className="w-full ">
              <Select
                onValueChange={(value) =>
                  setTerminalData({ ...terminalData, agent_id: value })
                }
              >
                <SelectTrigger className="w-full !h-input-sm md:!h-input">
                  <SelectValue placeholder="Selecione um agente" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  className="h-[160px] py-3 text-small md:text-body"
                >
                  <div className="w-full flex h-[40px] mb-2 border-b">
                    <div className="w-full h-[40px]">
                      <Input
                        type="search"
                        placeholder="Pesquisar agente..."
                        className="w-full h-full border-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onClick={(e) => e.stopPropagation()} // <-- This is the key!
                        tabIndex={0}
                      />
                    </div>
                  </div>

                  {isLoading ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <Loading color={COLORS.RED[600]} />
                    </div>
                  ) : agents && checkArrayData(agents) ? (
                    agents.map((agent) => (
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
        </div>
        <DialogClose asChild>
          <Button
            size={"lg"}
            type="submit"
            variant={"red"}
            className="w-full"
            disabled={isPending}
          >
            {isPending ? <Loading /> : "Adicionar terminal"}
          </Button>
        </DialogClose>
      </form>
    </DialogContent>
  );
}
