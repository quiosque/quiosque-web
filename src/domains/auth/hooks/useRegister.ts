import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "@tanstack/react-router";
import register  from "../services/register";

const useRegisterMutation = () => {
  const navigate = useNavigate({ from: "/" });
  const { toast } = useToast();

  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: register,
    onError: (error) => {
      console.log(error);
      toast({
        title: "Criação da conta falhou",
        description:
          "Não foi possível realizar o cadastro, verifique os campos preenchidos.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      navigate({ to: "/login" });
      toast({
        title: "Registro realizado com sucesso!",
        variant: "success",
      });
    }
  });

  return { mutate, isSuccess, isError };
};

export default useRegisterMutation;