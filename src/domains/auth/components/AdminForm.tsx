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
import {
  Divider,
  DividersContainer,
  SignInButton,
  SignInContainer,
} from "./styles";
import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";
import { useLogin } from "../hooks";

type FormInput = {
  email: string;
  password: string;
};

export function AdminForm() {
  const { mutate, loading } = useLogin();
  const navigate = useNavigate({ from: "/" });
  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormInput) => {
    mutate(data)
  };

  const handleRegisterButton = () => {
    navigate({ to: "/register" });
  }

  return (
    <Card className="flex flex-col items-start">
      <CardHeader>
        <CardTitle>Entre na sua conta</CardTitle>
        <CardDescription>
          Olá! Boas vindas de volta ao Quiosque!
        </CardDescription>
      </CardHeader>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-2 flex flex-col w-full items-start">
          <div className="space-y-1 w-full">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="exemplo@exemplo.com"
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

          {/* COMING SOON!!
          <Button
            className="bg-transparent text-slate-400 text-xs p-0 space-y-1 self-end h-2"
            variant="link"
            >
            Esqueci minha senha
            </Button>
            */}
        </CardContent>
        <CardFooter className="w-full py-0">
          <Button className="w-full">{loading ? 'Loading...' : 'Entrar'}</Button>
        </CardFooter>
      </form>
      <DividersContainer>
        <Divider />
        Ou
        <Divider />
      </DividersContainer>
      <SignInContainer>
        <p> Não está cadastrado? </p>
        <SignInButton onClick={handleRegisterButton}>
          Crie uma conta agora
        </SignInButton>
      </SignInContainer>
    </Card>
  );
}
