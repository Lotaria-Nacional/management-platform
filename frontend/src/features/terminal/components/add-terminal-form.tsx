import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select"
import {
  AddTerminalDTO,
  addTerminalSchema,
} from "../validations/add-terminal-schema"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Form } from "@/components/shared/form"
import { Controller, useForm } from "react-hook-form"
import { AgentEntity } from "@/features/agents/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAddTerminal } from "../hooks/use-add-terminal"
import { toast } from "react-toastify"

type Props = {
  agents?: AgentEntity[]
  isLoading: boolean
}

export default function AddTerminalForm({ agents }: Props) {
  const { isPending, mutateAsync } = useAddTerminal()

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AddTerminalDTO>({
    resolver: zodResolver(addTerminalSchema),
  })

  const onSubmit = async (data: AddTerminalDTO) => {
    const response = await mutateAsync(data)

    if (response.sucess) {
      toast.success(response.message)
    } else {
      toast.error(response.message)
    }
  }

  return (
    <Form.Wrapper
      submitLabel="Adicionar"
      isSubmitting={isPending}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Row>
        <Form.Field>
          <Label htmlFor="serial">Nº de Série</Label>
          <Input
            id="serial"
            {...register("serial")}
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

      <Form.Row>
        <Form.Field>
          <Label htmlFor="pin">PIN</Label>
          <Input id="pin" {...register("pin")} placeholder="1234" />
          {errors.pin && <Form.Error error={errors.pin.message} />}
        </Form.Field>

        <Form.Field>
          <Label>PUK</Label>
          <Input {...register("puk")} placeholder="1273567" />
          {errors.puk && <Form.Error error={errors.puk.message} />}
        </Form.Field>
      </Form.Row>

      <Form.Row>
        <Form.Field className="col-span-2">
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
                  {agents?.map((agent, index) => (
                    <SelectItem key={index} value={agent.id}>
                      <span className="font-bold">
                        ID: {agent.id_reference}
                      </span>
                      <span>-</span>
                      <span>{agent.first_name}</span>
                      <span>{agent.last_name}</span>
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
