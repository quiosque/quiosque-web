import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "@tanstack/react-router";
import login  from "../services/login";
import { useState } from "react";

const useLoginMutation = () => {
  const navigate = useNavigate({ from: "/" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: login,
    onError: (error) => {
      console.log(error);
      toast({
        title: "Login falhou",
        description:
          "Não foi possível fazer o login, verifique login/senha.",
        variant: "destructive",
      });
      setLoading(false);
    },
    onSuccess: () => {
      navigate({ to: "/dashboard" });
      toast({
        title: "Login realizado com sucesso!",
        variant: "success",
      });
    },
    onMutate: () => {
      setLoading(true);
    }
  });

  return { mutate, isSuccess, isError, loading };
};

export default useLoginMutation;