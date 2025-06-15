import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select"
import { EditAgentDTO, editAgentSchema } from "../validations/edit-agent-schema"
import { AgentEntity } from "../types"
import { toast } from "react-toastify"
import { DataState } from "@/app/types"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Form } from "@/components/shared/form"
import { COLORS } from "@/app/constants/colors"
import { PosEntity } from "@/features/pos/types"
import Loading from "@/components/shared/loading"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import { useEditAgent } from "../hooks/use-edit-agent"
import { TerminalEntity } from "@/features/terminal/types"
import { dataIsNotValid } from "@/app/utils/check-data"
import EmptyDataState from "@/components/shared/empty-data-state"
import { AgentStatusEnum } from "../enums/agent-status"
import { AgentTypeEnum } from "../enums/agent-types"
import { AgentGenre, AgentGenreEnum } from "../enums/agent-genre"

type EditAgentFormProps = {
  agent: AgentEntity
  terminal: DataState<TerminalEntity>
  pos: DataState<PosEntity>
}

export default function EditAgentForm({
  agent,
  pos,
  terminal,
}: EditAgentFormProps) {
  const { control, register, handleSubmit } = useForm<EditAgentDTO>({
    resolver: zodResolver(editAgentSchema),
    defaultValues: {
      id: agent.id,
      afrimoney: agent.afrimoney,
      first_name: agent.first_name,
      last_name: agent.last_name,
      phone: agent.phone,
      agent_type: agent.agent_type,
      status: agent.status,
      pos_id: agent.pos?.id ?? "",
      genre: (agent.genre as AgentGenre) ?? undefined,
      bi_number: agent.bi_number ?? undefined,
      terminal_id: agent.terminal?.id ?? "",
    },
  })

  const { isPending, mutateAsync } = useEditAgent()

  const onSubmit = async (data: EditAgentDTO) => {
    const response = await mutateAsync(data)

    if (response.sucess) {
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
          <Label htmlFor="bi">Nº do Bilhete</Label>
          <Input
            id="bi"
            {...register("bi_number")}
            placeholder="004372564LA044"
          />
        </Form.Field>
        <Form.Field>
          <Label>Sobrenome</Label>
          <Controller
            control={control}
            name="genre"
            render={({ field }) => (
              <Select
                defaultValue={agent.genre}
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger className="w-full !h-input">
                  <SelectValue placeholder="Gênero" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={AgentGenreEnum.MALE}>Masculino</SelectItem>
                  <SelectItem value={AgentGenreEnum.FEMALE}>
                    Feminino
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
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
        <Form.Field>
          <Label>Tipo</Label>
          <Controller
            name="agent_type"
            control={control}
            render={({ field }) => (
              <Select
                defaultValue={agent.agent_type}
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger className="w-full !h-input">
                  <SelectValue placeholder="Selecionar o tipo de agente" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={AgentTypeEnum.LOTARIA_NACIONAL}>
                    LOTARIA NACIONAL
                  </SelectItem>
                  <SelectItem value={AgentTypeEnum.REVENDOR}>
                    REVENDEDOR
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </Form.Field>
        <Form.Field>
          <Label>Status</Label>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Select
                defaultValue={agent.status}
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger className="w-full !h-input">
                  <SelectValue placeholder="Selecionar o status do agente" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    className="hover:opacity-90 duration-200 ease-in-out transition-colors text-GREEN-600"
                    value={AgentStatusEnum.ACTIVE}
                  >
                    Ativo
                  </SelectItem>
                  <SelectItem
                    className="hover:opacity-90 duration-200 ease-in-out transition-colors text-RED-600"
                    value={AgentStatusEnum.INACTIVE}
                  >
                    Inativo
                  </SelectItem>
                  <SelectItem
                    className="hover:opacity-90 duration-200 ease-in-out transition-colors text-YELLOW-600"
                    value={AgentStatusEnum.PENDING}
                  >
                    Pendente
                  </SelectItem>
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
                    pos.data?.map((p, index) => (
                      <SelectItem
                        key={index}
                        value={p.id}
                        className="text-GREEN-600"
                      >
                        <span>{p.id_reference}</span>
                        <span>|</span>
                        <span>Área: {p.area.name}</span>
                        <span>|</span>
                        <span>Zona: {p.zone.value}</span>
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
              <Select
                value={field.value}
                onValueChange={field.onChange}
                defaultValue={agent.terminal?.id}
              >
                <SelectTrigger className="!h-input w-full">
                  <SelectValue placeholder="Selecionar terminal" />
                </SelectTrigger>
                <SelectContent className="h-select-input-content">
                  {terminal.isLoading ? (
                    <Loading size={5} color={COLORS.RED[600]} />
                  ) : dataIsNotValid(terminal.data) ? (
                    <EmptyDataState />
                  ) : (
                    terminal.data?.map((terminal, index) => (
                      <SelectItem
                        key={index}
                        value={terminal.id}
                        disabled={terminal.agent !== undefined}
                        className={
                          terminal.agent ? "text-RED-600" : "text-GREEN-600"
                        }
                      >
                        <span>{terminal.id_reference}</span>
                        <span>|</span>
                        <span>{terminal.serial}</span>
                        <span>|</span>
                        <span>{terminal.sim_card}</span>
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            )}
          />
        </Form.Field>
      </Form.Row>
    </Form.Wrapper>
  )
}
