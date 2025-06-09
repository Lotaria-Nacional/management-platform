import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  EditTerminalDTO,
  editTerminalSchema,
} from "../validations/edit-terminal-schema"
import { TerminalEntity } from "../types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Form } from "@/components/shared/form"
import { AgentEntity } from "@/features/agents/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { useEditTerminal } from "../hooks/use-edit-terminal"

type Props = {
  terminal: TerminalEntity
  agents?: AgentEntity[]
}

export default function EditTerminalForm({ terminal }: Props) {
  const { isPending } = useEditTerminal()

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<EditTerminalDTO>({
    resolver: zodResolver(editTerminalSchema),
    defaultValues: {
      id: terminal.id,
      serial: terminal.serial,
      agent_id: terminal.agent_id,
      sim_card: terminal.sim_card,
    },
  })

  const onSubmit = async (data: EditTerminalDTO) => {
    console.log(data)
  }

  return (
    <Form.Wrapper
      submitLabel="Atualizar"
      isSubmitting={isPending}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Row>
        <Form.Field>
          <Label htmlFor="serial">Nº de Série</Label>
          <Input
            {...register("serial")}
            id="serial"
            placeholder="V42e2nf298h"
          />
          {errors.serial && <Form.Error error={errors.serial.message} />}
        </Form.Field>

        <Form.Field>
          <Label>Sim Card</Label>
          <Input {...register("sim_card")} placeholder="941232323" />
          {errors.sim_card && <Form.Error error={errors.sim_card.message} />}
        </Form.Field>
      </Form.Row>

      {/** POS & TERMINAL */}
      <Form.Row>
        <Form.Field>
          <Label>Agente</Label>
          <Controller
            name="agent_id"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="!h-input w-full">
                  <SelectValue placeholder="Selecionar pos" />
                </SelectTrigger>
                <SelectContent className="h-select-input-content">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <SelectItem key={index} value={index.toString()}>
                      {index + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Form.Field>
      </Form.Row>
    </Form.Wrapper>
  )
}
