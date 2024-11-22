import React from "react";
import styled from "styled-components";
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

const Divider = styled.span`
  border-bottom: 1px solid #ccc;
  margin: 1rem 0;
  padding-inline: 8px;
  height: 1px;
  width: 100%;
  align-self: center;
`;

const DividersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  gap: 8px;
  padding: 0 24px;
`;

const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  font-size: 14px;
  gap: 4px;
  width: 100%;
`;

const SignInButton = styled(Button)`
  font-size: 14px;
  color: #5B84FF;
  padding:0;
  background: none;

  &:hover {
    background-color: transparent;
    color: #626AFE;
  }
`;

export function AdminForm() {
  return (
    <Card className="flex flex-col items-start">
      <CardHeader>
        <CardTitle>Entre na sua conta</CardTitle>
        <CardDescription>
          Olá! Boas vindas de volta ao Quiosque!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 flex flex-col w-full items-start">
        <div className="space-y-1 w-full">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="exemplo@exemplo.com" />
        </div>
        <div className="space-y-1 w-full">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" placeholder="* * * * * * * *"/>
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
        <Button className="w-full">Entrar</Button>
      </CardFooter>
      <DividersContainer>
        <Divider />
        Ou
        <Divider />
      </DividersContainer>
      <SignInContainer>
        <p> Não está cadastrado? </p>
        <SignInButton>
          Crie uma conta agora
        </SignInButton>
      </SignInContainer>
    </Card>
  );
}
