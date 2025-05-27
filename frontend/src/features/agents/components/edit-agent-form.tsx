import {
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { toast } from "react-toastify";
import { ZONES } from "@/app/constants/zones";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PROVINCES } from "@/app/constants/provinces";
import Loading from "@/components/shared/loading";
import Fieldset from "@/components/shared/form/fieldset";
import { useEditAgent } from "../hooks/use-edit-agent";
import { AgentEntity, EditAgentRequestDTO } from "../types";

type EditAgentFormProps = {
  agent: AgentEntity;
};

export default function EditAgentForm({ agent }: EditAgentFormProps) {
  const { isPending, mutateAsync } = useEditAgent();
  const [agentData, setAgentData] = useState<EditAgentRequestDTO>({
    ...agent,
    first_name: `${agent.first_name} ${agent.last_name}`,
  });

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const [first_name, last_name] = agentData.first_name
        ? agentData.first_name.split(" ")
        : agent.first_name;

      await mutateAsync({
        ...agentData,
        id: agent.id,
        first_name,
        last_name,
      });

      toast.success("Agente editado!");
    } catch (error) {
      toast.error("Erro ao editar agente");
    }
  };

  return (
    <DialogContent className="p-8 w-full max-w-[617px]">
      <DialogHeader className="items-start">
        <DialogTitle>Editar os dados do agente</DialogTitle>
        <DialogDescription>
          Preencha os campos abaixo para um agente
        </DialogDescription>
      </DialogHeader>
      <hr className="w-full h-px" />
      <form onSubmit={handleOnSubmit} className="w-full grid gap-6">
        {/** 1ST INPUT FIELDS */}
        <div className="w-full grid-cols-1 grid md:grid-cols-2 gap-3 md:gap-6">
          <Fieldset>
            <label htmlFor="name" className="font-medium">
              Nome
            </label>
            <div className="w-full">
              <Input
                id="name"
                value={agentData.first_name}
                placeholder="John Doe"
                className="w-full h-full"
                onChange={(e) =>
                  setAgentData({ ...agentData, first_name: e.target.value })
                }
              />
            </div>
          </Fieldset>
          <Fieldset>
            <label htmlFor="phone" className="font-medium">
              Telefone
            </label>
            <div className="w-full">
              <Input
                id="phone"
                placeholder="941414141"
                className="w-full h-full"
                value={agentData.phone}
                onChange={(e) =>
                  setAgentData({ ...agentData, phone: e.target.value })
                }
              />
            </div>
          </Fieldset>
        </div>

        {/** 2ND INPUT FIELDS */}
        <div className="w-full grid-cols-1 grid md:grid-cols-2 gap-3 md:gap-6">
          <Fieldset>
            <label htmlFor="afrimoney" className="font-medium">
              Afrimoney
            </label>
            <div className="w-full">
              <Input
                id="afrimoney"
                placeholder="941414141"
                className="w-full h-full"
                value={agentData.afrimoney}
                onChange={(e) =>
                  setAgentData({ ...agentData, afrimoney: e.target.value })
                }
              />
            </div>
          </Fieldset>
          <Fieldset>
            <label htmlFor="name" className="font-medium">
              Zona
            </label>
            <div className="w-full">
              <Select
                defaultValue={agentData.zone}
                onValueChange={(value) =>
                  setAgentData({ ...agentData, zone: value })
                }
              >
                <SelectTrigger className="w-full !h-input-sm md:!h-input">
                  <SelectValue placeholder="Selecione uma zona" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  className="h-fit text-small md:text-body"
                >
                  {ZONES.map((zone) => (
                    <SelectItem key={zone} value={zone}>
                      {zone}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </Fieldset>
        </div>

        {/** 3TH INPUT FIELDS */}
        <div className="w-full grid-cols-1 grid md:grid-cols-2 gap-3 md:gap-6">
          <Fieldset>
            <label htmlFor="name" className="font-medium">
              Província
            </label>
            <div className="w-full ">
              <Select
                defaultValue={agentData.province}
                onValueChange={(value) =>
                  setAgentData({ ...agentData, province: value })
                }
              >
                <SelectTrigger className="w-full !h-input-sm md:!h-input">
                  <SelectValue placeholder="Selecione uma província" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  className="h-[200px] text-small md:text-body"
                >
                  {PROVINCES.map((province) => (
                    <SelectItem key={province} value={province}>
                      {province}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </Fieldset>

          <Fieldset>
            <label htmlFor="name" className="font-medium">
              Cidade
            </label>
            <div className="w-full">
              <Input
                id="name"
                type="text"
                className="w-full h-full"
                value={agentData.city}
                placeholder="Adicione uma cidade"
                onChange={(e) =>
                  setAgentData({ ...agentData, city: e.target.value })
                }
              />
            </div>
          </Fieldset>
        </div>

        <Button type="submit" variant={"red"} disabled={isPending} size={"lg"}>
          {isPending ? <Loading /> : "Atualizar agente"}
        </Button>
      </form>
    </DialogContent>
  );
}
