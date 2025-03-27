import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import Select from "@/components/Select";
import { useRegister } from "../hooks";

const MAIN_ACTIVITY_OPTIONS = ["Comércio", "Indústria", "Serviços"];

export type FormInput = {
  username: string;
  password: string;
  email: string;
  cnpj: string;
  store_name: string;
  legal_name: string;
  industry: string;
};

export function CreateAccountForm() {
  const { mutate } = useRegister();
  const navigate = useNavigate({ from: "/" });
  const { register, handleSubmit, setValue } = useForm<FormInput>({
    defaultValues: {
      username: "",
      password: "",
      email: "",
      cnpj: "",
      store_name: "",
      legal_name: "",
      industry: "",
    },
  });

  const onSubmit = (data: FormInput) => {
    mutate(data);
  };

  const onCancel = () => {
    navigate({ to: "/login" });
  };

  return (
    <Card className="flex flex-col items-start pb-1 min-h-[407px]">
      <CardHeader>
        <CardTitle>Realize seu cadastro</CardTitle>
        <CardDescription>
          Olá! Preencha os campos abaixo para criação de sua conta.
        </CardDescription>
      </CardHeader>
      <form
        className="w-full h-full flex flex-1 flex-col justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CardContent className="space-y-2 flex flex-col w-full items-start">
          <div className="space-y-1 w-full">
            <Label htmlFor="username">Nome</Label>
            <Input id="username" placeholder="Nome" {...register("username")} />
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="exemplo@gmail.com"
              required
              {...register("email")}
            />
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="* * * * * * * *"
              required
              {...register("password")}
            />
          </div>

          <p className="py-1">Dados do negócio</p>

          <div className="space-y-1 w-full">
            <Label htmlFor="cnpj">CNPJ</Label>
            <Input
              id="cnpj"
              type="cnpj"
              placeholder="CNPJ"
              required
              {...register("cnpj")}
            />
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="legal_name">Razão Social</Label>
            <Input
              id="legal_name"
              type="legal_name"
              placeholder="Nome Fantasia"
              required
              {...register("legal_name")}
            />
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="store_name">Nome Fantasia</Label>
            <Input
              id="store_name"
              type="store_name"
              placeholder="Nome Fantasia"
              required
              {...register("store_name")}
            />
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="industry">Atividade principal do negócio</Label>
            <Select
              placeholder="Selecione a atividade principal"
              required
              options={MAIN_ACTIVITY_OPTIONS.map((option) => ({
                label: option,
                value: option,
              }))}
              onChange={(value) => setValue("industry", value)}
            />
          </div>
        </CardContent>
        <CardFooter className="w-full py-0 m-t-auto gap-2 flex-col">
          <Button className="w-full">Cadastrar</Button>
          <Button
            className="w-100 bg-transparent"
            variant="secondary"
            onClick={onCancel}
          >
            Cancelar
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
