import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select"
import { toast } from "react-toastify"
import { Input } from "@/components/ui/input"
import { useEditAgent } from "../hooks/use-edit-agent"
import { AgentEntity } from "../types"
import { PosEntity } from "@/features/pos/types"
import { Form } from "@/components/shared/form"
import { Label } from "@/components/ui/label"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { EditAgentDTO, editAgentSchema } from "../validations/edit-agent-schema"
import { DataState } from "@/app/types"
import { COLORS } from "@/app/constants/colors"
import Loading from "@/components/shared/loading"

type EditAgentFormProps = {
  agent: AgentEntity
  pos: DataState<PosEntity>
}

export default function EditAgentForm({ agent, pos }: EditAgentFormProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditAgentDTO>({
    resolver: zodResolver(editAgentSchema),
    defaultValues: {
      id: agent.id,
      afrimoney: agent.afrimoney,
      first_name: agent.first_name,
      last_name: agent.last_name,
      phone: agent.phone,
      type: agent.type,
      pos_id: agent.pos?.id ?? "",
      terminal_id: agent.terminal?.id ?? "",
    },
  })

  const { isPending, mutateAsync } = useEditAgent()

  const onSubmit = async (data: EditAgentDTO) => {
    const response = await mutateAsync(data)

    if (response.sucess) {
      console.log(data)
      toast.success(response.message)
    } else {
      toast.error(response.message)
      console.log(response.message)
    }
  }

  console.log(errors)

  return (
    <Form.Wrapper
      submitLabel="Atualizar"
      isSubmitting={isPending}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Row>
        <Form.Field>
          <Label htmlFor="name">Nome</Label>
          <Input {...register("first_name")} id="name" placeholder="John" />
        </Form.Field>
        <Form.Field>
          <Label>Sobrenome</Label>
          <Input {...register("last_name")} placeholder="Doe" />
        </Form.Field>
      </Form.Row>

      <Form.Row>
        <Form.Field>
          <Label>Nº Telefone</Label>
          <Input
            inputMode="numeric"
            {...register("phone")}
            placeholder="941414141"
          />
        </Form.Field>
        <Form.Field>
          <Label>Nº Afrimoney</Label>
          <Input
            inputMode="numeric"
            placeholder="941414141"
            {...register("afrimoney")}
          />
        </Form.Field>
      </Form.Row>

      <Form.Row>
        <Form.Field className="col-span-2">
          <Label>Tipo</Label>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Select
                defaultValue={agent.type}
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger className="w-full !h-input">
                  <SelectValue placeholder="Selecionar o tipo de agente" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="LOTARIA-NACIONAL">
                    LOTARIA NACIONAL
                  </SelectItem>
                  <SelectItem value="REVENDEDOR">REVENDEDOR</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </Form.Field>
      </Form.Row>

      <Form.Row>
        <Form.Field>
          <Label>POS</Label>
          <Controller
            name="pos_id"
            control={control}
            render={({ field }) => (
              <Select
                defaultValue={agent?.pos_id ?? ""}
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger className="!h-input w-full">
                  <SelectValue placeholder="Selecionar pos" />
                </SelectTrigger>
                <SelectContent className="h-select-input-content">
                  {pos.isLoading ? (
                    <Loading size={5} color={COLORS.RED[600]} />
                  ) : (
                    pos.data?.map((_, index) => (
                      <SelectItem key={index} value={index.toString()}>
                        {index + 1}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            )}
          />
        </Form.Field>

        <Form.Field>
          <Label>Terminal</Label>
          <Controller
            name="terminal_id"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="!h-input w-full">
                  <SelectValue placeholder="Selecionar terminal" />
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
