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
import { useForm } from "react-hook-form";

type FormInput = {
  code: string;
  password: string;
};

export function ColaboratorForm() {
  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues: {
      code: "",
      password: "",
    },
  });
  
  const onSubmit = (data: FormInput) => {
    console.log(data);
  }

  return (
    <Card className="flex flex-col items-start pb-9 min-h-[407px]">
      <CardHeader>
        <CardTitle>Entre na sua conta</CardTitle>
        <CardDescription>
          Olá! Boas vindas de volta ao Quiosque!
        </CardDescription>
      </CardHeader>
      <form className="w-full h-full flex flex-1 flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-2 flex flex-col w-full items-start">
          <div className="space-y-1 w-full">
            <Label htmlFor="code">Código do empregador</Label>
            <Input
              id="code"
              placeholder="3XEMPLO"
              {...register("code")}
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

          <Button
            className="bg-transparent text-slate-400 text-xs p-0 space-y-1 self-end h-2"
            variant="link"
            >
            Esqueci minha senha
            </Button>

        </CardContent>
        <CardFooter className="w-full py-0 m-t-auto  cursor-not-allowed">
          <Button className="w-full" disabled>Disponível em breve</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
