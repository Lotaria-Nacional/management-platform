import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select"
import {
  RegisterAgentDTO,
  registerAgentSchema,
} from "../validations/register-agent-schema"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Form } from "@/components/shared/form"
import { PosEntity } from "@/features/pos/types"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRegisterAgents } from "../hooks/use-register-agents"
import { DataState } from "@/features/pos/components/edit-pos-form"
import { toast } from "react-toastify"

type Props = {
  pos: DataState<PosEntity>
}

export default function RegisterAgentForm({ pos }: Props) {
  const { isPending, mutateAsync } = useRegisterAgents()

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterAgentDTO>({
    resolver: zodResolver(registerAgentSchema),
  })

  const onSubmit = async (data: RegisterAgentDTO) => {
    const response = await mutateAsync({ ...data })

    if (response.sucess) {
      console.log(data)
      toast.success(response.message)
    } else {
      toast.success(response.message)
    }
  }

  return (
    <Form.Wrapper
      submitLabel="Adicionar"
      isSubmitting={isPending}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/** FIRST NAME & LAST NAME */}
      <Form.Row>
        <Form.Field>
          <Label htmlFor="name">Nome</Label>
          <Input {...register("first_name")} id="name" placeholder="John" />
          {errors.first_name && (
            <Form.Error error={errors.first_name.message} />
          )}
        </Form.Field>

        <Form.Field>
          <Label>Sobrenome</Label>
          <Input {...register("last_name")} placeholder="Doe" />
          {errors.last_name && <Form.Error error={errors.last_name.message} />}
        </Form.Field>
      </Form.Row>
      {/** AFRIMONEY & ZONE */}
      <Form.Row>
        <Form.Field>
          <Label>Nº Telefone</Label>
          <Input
            inputMode="numeric"
            {...register("phone")}
            type="number"
            placeholder="941414141"
          />
          {errors.phone && <Form.Error error={errors.phone.message} />}
        </Form.Field>
        <Form.Field>
          <Label>Nº Afrimoney</Label>
          <Input
            inputMode="numeric"
            placeholder="941414141"
            {...register("afrimoney")}
          />
          {errors.afrimoney && <Form.Error error={errors.afrimoney.message} />}
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
