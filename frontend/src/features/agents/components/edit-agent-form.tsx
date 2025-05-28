import {
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select"
import { toast } from "react-toastify"
import { FormEvent, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Loading from "@/components/shared/loading"
import Fieldset from "@/components/shared/form/fieldset"
import { useEditAgent } from "../hooks/use-edit-agent"
import { AgentEntity, EditAgentRequestDTO } from "../types"
import { DataState } from "@/features/pos/components/edit-pos-form"
import { PosEntity } from "@/features/pos/types"
import { checkArrayData } from "@/app/utils/check-data"
import EmptyDataState from "@/components/shared/empty-data-state"

type EditAgentFormProps = {
  agent: AgentEntity
  pos: DataState<PosEntity>
}

export default function EditAgentForm({ agent, pos }: EditAgentFormProps) {
  const { isPending, mutateAsync } = useEditAgent()
  const [agentData, setAgentData] = useState<EditAgentRequestDTO>(agent)

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await mutateAsync({
        ...agentData,
        id: agent.id,
      })

      toast.success("Agente editado!")
    } catch (error) {
      toast.error("Erro ao editar agente")
    }
  }

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
            <label htmlFor="lastname" className="font-medium">
              Sobrenome
            </label>
            <div className="w-full">
              <Input
                id="lastname"
                value={agentData.last_name}
                placeholder="Doe"
                className="w-full h-full"
                onChange={(e) =>
                  setAgentData({ ...agentData, last_name: e.target.value })
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

        {/** 3TH INPUT FIELDS */}
        <div className="w-full grid-cols-1 grid md:grid-cols-2 gap-3 md:gap-6">
          <Fieldset className="col-span-2">
            <label htmlFor="zone" className="font-medium">
              POS
            </label>
            <div className="w-full">
              <Select
                defaultValue={agentData.pos?.id}
                onValueChange={(value) =>
                  setAgentData({ ...agentData, pos_id: value })
                }
              >
                <SelectTrigger className="w-full !h-input-sm md:!h-input">
                  <SelectValue placeholder="Selecione uma zona" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  className="h-fit text-small md:text-body"
                >
                  {pos.isLoading ? (
                    <Loading />
                  ) : pos.data && checkArrayData(pos.data) ? (
                    pos.data.map((pos) => (
                      <SelectItem
                        key={pos.id}
                        value={pos.id}
                        disabled={pos.agent.id ? true : false}
                        className="w-full hover:bg-zinc-100 duration-200 ease-in-out transition-all cursor-pointer"
                      >
                        <span
                          className={`px-2 py-1 rounded-sm w-full ${
                            pos.agent.id ? "text-RED-500" : "text-GREEN-500"
                          }`}
                        >
                          {pos.id_reference} · {pos.city.name} · {pos.area.name}{" "}
                          · {pos.zone.zone_number} ·{" "}
                          {pos.agent.id ? "(OCUPADO)" : "(LIVRE)"}
                        </span>
                      </SelectItem>
                    ))
                  ) : (
                    <EmptyDataState />
                  )}
                </SelectContent>
              </Select>
            </div>
          </Fieldset>
        </div>

        <Button type="submit" variant={"red"} disabled={isPending} size={"lg"}>
          {isPending ? <Loading /> : "Atualizar agente"}
        </Button>
      </form>
    </DialogContent>
  )
}
