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
import { ZONES } from "@/constants/zones";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import Button from "@/components/shared/button";
import { PROVINCES } from "@/constants/provinces";
import { useRegisterAgents } from "../hooks/use-register-agents";
import Fieldset from "@/components/shared/fieldset";
import { RegisterAgentRequestDTO } from "../types";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";

export default function AgentsForm() {
  const { isPending, mutateAsync } = useRegisterAgents();
  const [agentData, setAgentData] = useState<RegisterAgentRequestDTO>(
    {} as RegisterAgentRequestDTO
  );

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const [first_name, last_name] = agentData.name.split(" ");
      mutateAsync({
        ...agentData,
        name: first_name ?? "",
        lastname: last_name ?? "",
        phone_number: agentData.phone_number,
      });
      toast.success("Agente registado!");
    } catch (error) {
      toast.error("Erro ao registar agente");
    }
    console.log(agentData);
  };

  return (
    <DialogContent className="p-8 w-full max-w-[617px]">
      <DialogHeader className="items-start">
        <DialogTitle>Adicionar agente</DialogTitle>
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
                value={agentData.name}
                placeholder="John Doe"
                className="w-full h-full"
                onChange={(e) =>
                  setAgentData({ ...agentData, name: e.target.value })
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
                value={agentData.phone_number}
                onChange={(e) =>
                  setAgentData({ ...agentData, phone_number: e.target.value })
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

        <Button
          type="submit"
          disabled={isPending}
          className="w-full text-small md:text-body leading-small md:leading-body "
        >
          {isPending ? <SyncLoader size={22} /> : "Adicionar agente"}
        </Button>
      </form>
    </DialogContent>
  );
}
