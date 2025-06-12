import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import {
  RegisterAgentDTO,
  registerAgentSchema,
} from "../validations/register-agent-schema";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/shared/form";
import { PosEntity } from "@/features/pos/types";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterAgents } from "../hooks/use-register-agents";
import { toast } from "react-toastify";
import { DataState } from "@/app/types";
import Loading from "@/components/shared/loading";
import { COLORS } from "@/app/constants/colors";
import { TerminalEntity } from "@/features/terminal/types";

type Props = {
  pos: DataState<PosEntity>;
  terminals: DataState<TerminalEntity>;
};

export default function RegisterAgentForm({ pos, terminals }: Props) {
  const { isPending, mutateAsync } = useRegisterAgents();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterAgentDTO>({
    resolver: zodResolver(registerAgentSchema),
  });

  const onSubmit = async (data: RegisterAgentDTO) => {
    const response = await mutateAsync({ ...data });

    if (response.sucess) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

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
        <Form.Field className="col-span-2">
          <Label>Tipo</Label>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
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
          {errors.type && <Form.Error error={errors.type.message} />}
        </Form.Field>
      </Form.Row>

      {/** POS & TERMINAL */}
      <Form.Row className="grid grid-cols-2">
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
                  {pos.isLoading ? (
                    <Loading size={5} color={COLORS.RED[600]} />
                  ) : (
                    pos?.data?.map((p, index) => (
                      <SelectItem
                        key={index}
                        value={p.id}
                        className="w-full text-GREEN-600 hover:text-GREEN-200 duration-200 transition-colors ease-in-out"
                      >
                        <span>ID: {p.id_reference}</span>
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
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="!h-input w-full">
                  <SelectValue placeholder="Selecionar terminal" />
                </SelectTrigger>
                <SelectContent className="h-select-input-content">
                  {terminals.isLoading ? (
                    <Loading size={5} color={COLORS.RED[600]} />
                  ) : (
                    terminals.data?.map((terminal, index) => (
                      <SelectItem
                        key={index}
                        value={terminal.id}
                        disabled={terminal.agent !== undefined}
                        className={`w-full ${
                          terminal.agent
                            ? "text-RED-600 hover:text-RED-200"
                            : "text-GREEN-600 hover:text-GREEN-200"
                        }  duration-200 transition-colors ease-in-out`}
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
  );
}
