import {
  LoginDTO,
  loginSchema,
} from "@/features/auth/validations/login-schema";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Icon from "@/components/shared/icon";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/shared/form";
import Loading from "@/components/shared/loading";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginUser } from "@/features/auth/hooks/use-login-user";

export default function LoginPage() {
  const { isPending, mutateAsync } = useLoginUser();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginDTO>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginDTO) => {
    const response = await mutateAsync(data);

    if (response.sucess) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <main className="w-full h-screen flex items-center justify-center bg-RED-800 p-container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white px-10 py-20 rounded-button w-full md:w-[450px] gap-8 flex flex-col items-center justify-center"
      >
        <Icon name="logo_red" className="h-[90px] w-[130px]" />

        <Form.Row className="grid grid-cols-1 gap-6">
          <Form.Field>
            <Label>Email</Label>
            <Input
              type="email"
              className="!h-input"
              {...register("email")}
              placeholder="example@lotarianacional.co.ao"
            />
            {errors.email && <Form.Error error={errors.email.message} />}
          </Form.Field>

          <Form.Field>
            <Label>Palavra-passe</Label>
            <Input
              type="password"
              className="!h-input"
              placeholder="**********"
              {...register("password")}
            />
            {errors.password && <Form.Error error={errors.password.message} />}
          </Form.Field>
        </Form.Row>

        <Button
          disabled={isPending}
          type="submit"
          variant={"red"}
          className="w-full h-input"
        >
          {isPending ? <Loading size={5} /> : "Entrar"}
        </Button>
      </form>
    </main>
  );
}
