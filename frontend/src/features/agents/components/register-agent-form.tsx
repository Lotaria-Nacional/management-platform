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
import Loading from "@/components/shared/loading"
import { RegisterAgentRequestDTO } from "../types"
import Fieldset from "@/components/shared/form/fieldset"
import { useRegisterAgents } from "../hooks/use-register-agents"
import { Button } from "@/components/ui/button"
import FieldsetWrapper from "@/components/shared/form/fieldset-wrapper"
import { DataState } from "@/features/pos/components/edit-pos-form"
import { PosEntity } from "@/features/pos/types"
import { checkArrayData } from "@/app/utils/check-data"
import EmptyDataState from "@/components/shared/empty-data-state"

type Props = {
  pos: DataState<PosEntity>
}

export default function RegisterAgentForm({ pos }: Props) {
  const { isPending, mutateAsync } = useRegisterAgents()
  const [formData, setFormData] = useState<RegisterAgentRequestDTO>(
    {} as RegisterAgentRequestDTO
  )

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await mutateAsync({
        ...formData,
        phone: formData.phone,
      })
      toast.success("Agente adicionado")
    } catch (error) {
      toast.error("Erro ao adicionar agente")
    }
  }

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
            <label htmlFor="firstname" className="font-medium">
              Nome
            </label>
            <div className="w-full">
              <Input
                id="firstname"
                placeholder="John"
                className="w-full h-full"
                value={formData.first_name}
                onChange={(e) =>
                  setFormData({ ...formData, first_name: e.target.value })
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
                placeholder="Doe"
                className="w-full h-full"
                value={formData.last_name}
                onChange={(e) =>
                  setFormData({ ...formData, last_name: e.target.value })
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
                inputMode="numeric"
                type="number"
                className="w-full h-full"
                value={formData.afrimoney}
                onChange={(e) =>
                  setFormData({ ...formData, afrimoney: e.target.value })
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
                type="number"
                inputMode="numeric"
                placeholder="941414141"
                className="w-full h-full"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
          </Fieldset>
        </div>

        {/** 3TH INPUT FIELDS */}
        <FieldsetWrapper>
          <Fieldset className="col-span-2">
            <label htmlFor="name" className="font-medium">
              POS
            </label>
            <div className="w-full ">
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, pos_id: value })
                }
              >
                <SelectTrigger className="w-full !h-input-sm md:!h-input">
                  <SelectValue placeholder="Selecione um pos" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  className="h-[200px] text-small md:text-body"
                >
                  {pos.isLoading ? (
                    <Loading />
                  ) : pos.data && checkArrayData(pos.data) ? (
                    pos.data.map((pos) => (
                      <SelectItem
                        key={pos.id}
                        value={pos.id}
                        disabled={pos.agent.id ? true : false}
                        className={
                          "w-full hover:bg-zinc-100 duration-200 ease-in-out transition-all cursor-pointer"
                        }
                      >
                        <span
                          className={`px-2 py-1 rounded-sm w-full ${
                            pos.agent.id ? "text-RED-500" : "text-GREEN-500"
                          }`}
                        >
                          ID:{pos.id_reference} · Cidade: {pos.city.name} ·
                          Área: {pos.area.name} · Zona: {pos.zone.zone_number} ·{" "}
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
        </FieldsetWrapper>

        <Button
          type="submit"
          variant={"red"}
          disabled={isPending}
          size={"lg"}
          className="w-full"
        >
          {isPending ? <Loading /> : "Adicionar agente"}
        </Button>
      </form>
    </DialogContent>
  )
}
