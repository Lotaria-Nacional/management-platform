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
import { DataState } from "@/features/pos/components/edit-pos-form"
import { PosEntity } from "@/features/pos/types"
import { Form } from "@/components/shared/form"
import { Label } from "@/components/ui/label"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { EditAgentDTO, editAgentSchema } from "../validations/edit-agent-schema"

type EditAgentFormProps = {
  agent: AgentEntity
  pos: DataState<PosEntity>
}

export default function EditAgentForm({ agent, pos }: EditAgentFormProps) {
  const { control, register, handleSubmit } = useForm<EditAgentDTO>({
    resolver: zodResolver(editAgentSchema),
    defaultValues: {
      afrimoney: agent.afrimoney,
      first_name: agent.first_name,
      last_name: agent.last_name,
      phone: agent.phone,
      pos_id: agent.pos ? agent.pos.id : "",
      terminal_id: agent.terminal ? agent.terminal.id : "",
    },
  })

  const { isPending, mutateAsync } = useEditAgent()

  const onSubmit = async (data: EditAgentDTO) => {
    const response = await mutateAsync({ ...data, id: agent.id })

    if (response.sucess) {
      console.log(data)
      toast.success(response.message)
    } else {
      toast.error(response.message)
    }
  }

  return (
    <Form.Wrapper
      submitLabel="Atualizar"
      isSubmitting={isPending}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/** FIRST NAME & LAST NAME */}
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
      {/** AFRIMONEY & ZONE */}
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
      {/** POS & TERMINAL */}
      <Form.Row>
        <Form.Field>
          <Label>POS</Label>
          <Controller
            name="pos_id"
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
