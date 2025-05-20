import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";
import { FormEvent, useState } from "react";
import { IAddPosRequestDTO } from "../types";
import { ZONES } from "@/app/constants/zones";
import { AREAS } from "@/app/constants/areas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAddPos } from "../hooks/use-add-pos";
import { COLORS } from "@/app/constants/colors";
import Loading from "@/components/shared/loading";
import { POS_TYPES } from "@/app/constants/pos-types";
import { PROVINCES } from "@/app/constants/provinces";
import { AgentEntity } from "@/features/agents/types";
import { checkArrayData } from "@/app/utils/check-data";
import Fieldset from "@/components/shared/form/fieldset";
import FieldsetWrapper from "@/components/shared/form/fieldset-wrapper";

type Props = {
  agents?: AgentEntity[];
  isLoadingAgents: boolean;
};

export default function RegisterPosForm({ isLoadingAgents, agents }: Props) {
  const { mutateAsync, isPending } = useAddPos();
  const [posData, setPosData] = useState<IAddPosRequestDTO>({
    area: "",
    city: "",
    coordinates: "",
    id_pos: "",
    licence: "",
    province: "",
    type: "",
    zone: "",
    admin: "",
    agent_id: "",
    id_reference_pos: "",
  });

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(posData);
      toast.success("POs adicionado com sucesso!");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Adicione um POS</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleOnSubmit} className="space-y-4">
        <FieldsetWrapper>
          <Fieldset>
            <label>ID Referência POS</label>
            <div className="w-full">
              <Input
                type="text"
                value={posData.id_reference_pos as string}
                onChange={(e) =>
                  setPosData({ ...posData, id_reference_pos: e.target.value })
                }
                placeholder="ID Referência POS"
              />
            </div>
          </Fieldset>
          <Fieldset>
            <label>Supervisor</label>
            <div className="w-full">
              <Input
                type="text"
                value={posData.admin as string}
                onChange={(e) =>
                  setPosData({ ...posData, admin: e.target.value })
                }
                placeholder="Supervisor do POS"
              />
            </div>
          </Fieldset>
        </FieldsetWrapper>

        <FieldsetWrapper>
          <Fieldset>
            <label>Coordenadas</label>
            <div className="w-full">
              <Input
                type="text"
                placeholder="Coordenadas"
                value={posData.coordinates as string}
                onChange={(e) =>
                  setPosData({ ...posData, coordinates: e.target.value })
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
                  setPosData({ ...posData, zone: value })
                }
              >
                <SelectTrigger className="w-full !h-input-sm md:!h-input">
                  <SelectValue placeholder="Selecione uma zona" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  className="h-[150px] text-small md:text-body"
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
        </FieldsetWrapper>

        <FieldsetWrapper>
          <Fieldset>
            <label htmlFor="name" className="font-medium">
              Área
            </label>
            <div className="w-full">
              <Select
                onValueChange={(value) =>
                  setPosData({ ...posData, area: value })
                }
              >
                <SelectTrigger className="w-full !h-input-sm md:!h-input">
                  <SelectValue placeholder="Selecione a área" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  className="h-[150px] text-small md:text-body"
                >
                  {AREAS.map((zone) => (
                    <SelectItem key={zone} value={zone}>
                      {zone}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </Fieldset>
          <Fieldset>
            <label htmlFor="name" className="font-medium">
              Tipo
            </label>
            <div className="w-full">
              <Select
                onValueChange={(value) =>
                  setPosData({ ...posData, type: value })
                }
              >
                <SelectTrigger className="w-full !h-input-sm md:!h-input">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  className="h-fit text-small md:text-body"
                >
                  {POS_TYPES.map((zone) => (
                    <SelectItem key={zone} value={zone}>
                      {zone}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </Fieldset>
        </FieldsetWrapper>

        <FieldsetWrapper>
          <Fieldset>
            <label htmlFor="name" className="font-medium">
              Província
            </label>
            <div className="w-full">
              <Select
                onValueChange={(value) =>
                  setPosData({ ...posData, province: value })
                }
              >
                <SelectTrigger className="w-full !h-input-sm md:!h-input">
                  <SelectValue placeholder="Selecione a província" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  className="h-[150px] text-small md:text-body"
                >
                  {PROVINCES.map((zone) => (
                    <SelectItem key={zone} value={zone}>
                      {zone}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </Fieldset>
          <Fieldset>
            <label htmlFor="name" className="font-medium">
              Agente
            </label>
            <div className="w-full">
              <Select
                onValueChange={(value) =>
                  setPosData({ ...posData, agent_id: value })
                }
              >
                <SelectTrigger className="w-full !h-input-sm md:!h-input">
                  <SelectValue placeholder="Selecione a cidade" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  className="h-[150px] text-small md:text-body"
                >
                  {isLoadingAgents ? (
                    <Loading showText color={COLORS.RED[700]} />
                  ) : checkArrayData<AgentEntity>(agents) ? (
                    agents?.map((agent) => (
                      <SelectItem key={agent.id} value={agent.id}>
                        <span>{agent.first_name}</span>
                        <span>{agent.last_name}</span>
                      </SelectItem>
                    ))
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <span>Não há agentes ainda.</span>
                    </div>
                  )}
                </SelectContent>
              </Select>
            </div>
          </Fieldset>
        </FieldsetWrapper>

        <Button
          variant={"red"}
          type="submit"
          disabled={isPending}
          className="w-full h-input"
        >
          {isPending ? <Loading /> : "Adicionar"}
        </Button>
      </form>
    </DialogContent>
  );
}
