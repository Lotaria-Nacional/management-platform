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
import { ZONES } from "@/app/constants/zones";
import { AREAS } from "@/app/constants/areas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loading from "@/components/shared/loading";
import { useEditPos } from "../hooks/use-edit-pos";
import { POS_TYPES } from "@/app/constants/pos-types";
import { PROVINCES } from "@/app/constants/provinces";
import { AgentEntity } from "@/features/agents/types";
import Fieldset from "@/components/shared/form/fieldset";
import { IEditPosRequestDTO, PosEntity } from "../types";
import FieldsetWrapper from "@/components/shared/form/fieldset-wrapper";
import { checkArrayData } from "@/app/utils/check-data";

type Props = {
  pos: PosEntity;
  agents?: AgentEntity[];
  isLoading: boolean;
};

export default function EditPosForm({ pos, agents, isLoading }: Props) {
  const { mutateAsync, isPending } = useEditPos();
  const [posData, setPosData] = useState<IEditPosRequestDTO>(pos);

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(posData);
      toast.success("POS editado com sucesso!");
    } catch (error) {
      console.error("Error editar POS:", error);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Atualizar um POS</DialogTitle>
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
              defaultValue={posData.zone}
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
                defaultValue={posData.area}
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
                defaultValue={posData.type}
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
                defaultValue={posData.province}
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
                defaultValue={posData.agent_id}
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
                  {isLoading ? (
                    <Loading showText />
                  ) : checkArrayData(agents) ? (
                    agents?.map((agent) => (
                      <SelectItem key={agent.id} value={agent.id}>
                        <span>{agent.first_name}</span>
                        <span>{agent.last_name}</span>
                      </SelectItem>
                    ))
                  ) : (
                    <span>Não há agentes ainda.</span>
                  )}
                </SelectContent>
              </Select>
            </div>
          </Fieldset>
        </FieldsetWrapper>

        <Button
          type="submit"
          variant={"red"}
          disabled={isPending}
          className="w-full h-input"
        >
          {isPending ? <Loading /> : "Atualizar"}
        </Button>
      </form>
    </DialogContent>
  );
}
