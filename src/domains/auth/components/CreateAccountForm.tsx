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

const MAIN_ACTIVITY_OPTIONS = ["Comércio", "Indústria", "Serviços"];

type FormInput = {
  name: string;
  password: string;
  email: string;
  cnpj: string;
  fantasy_name: string;
  legal_name: string;
  industry: string;
};

export function CreateAccountForm() {
  const navigate = useNavigate({ from: "/" });
  const { register, handleSubmit, setValue } = useForm<FormInput>({
    defaultValues: {
      name: "",
      password: "",
      email: "",
      cnpj: "",
      fantasy_name: "",
      legal_name: "",
      industry: "",
    },
  });

  const onSubmit = (data: FormInput) => {
    console.log(data);
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
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Nome" {...register("name")} />
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="exemplo@gmail.com"
              {...register("email")}
            />
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="* * * * * * * *"
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
              {...register("cnpj")}
            />
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="legal_name">Razão Social</Label>
            <Input
              id="legal_name"
              type="legal_name"
              placeholder="Nome Fantasia"
              {...register("legal_name")}
            />
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="fantasy_name">Nome Fantasia</Label>
            <Input
              id="fantasy_name"
              type="fantasy_name"
              placeholder="Nome Fantasia"
              {...register("fantasy_name")}
            />
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="industry">Atividade principal do negócio</Label>
            <Select
              placeholder="Selecione a atividade principal"
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
