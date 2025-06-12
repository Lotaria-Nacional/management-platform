import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  EditTerminalDTO,
  editTerminalSchema,
} from "../validations/edit-terminal-schema";
import { TerminalEntity } from "../types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/shared/form";
import { AgentEntity } from "@/features/agents/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useEditTerminal } from "../hooks/use-edit-terminal";
import { toast } from "react-toastify";

type Props = {
  terminal: TerminalEntity;
  agents?: AgentEntity[];
};

export default function EditTerminalForm({ terminal, agents }: Props) {
  const { isPending, mutateAsync } = useEditTerminal();

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
      pin: terminal.pin,
      puk: terminal.puk,
      sim_card: terminal.sim_card,
    },
  });

  const onSubmit = async (data: EditTerminalDTO) => {
    const response = await mutateAsync(data);
    if (response.sucess) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

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

      <Form.Row>
        <Form.Field>
          <Label htmlFor="pin">PIN</Label>
          <Input {...register("pin")} id="pin" placeholder="1234" />
          {errors.pin && <Form.Error error={errors.pin.message} />}
        </Form.Field>

        <Form.Field>
          <Label>PUK</Label>
          <Input {...register("puk")} placeholder="1234567" />
          {errors.puk && <Form.Error error={errors.puk.message} />}
        </Form.Field>
      </Form.Row>

      {/** POS & TERMINAL */}
      <Form.Row>
        <Form.Field className="col-span-2">
          <Label>Agente</Label>
          <Controller
            name="agent_id"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
                defaultValue={terminal.agent?.id ?? ""}
              >
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
  );
}
