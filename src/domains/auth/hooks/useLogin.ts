import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "@tanstack/react-router";
import login  from "../services/login";
import { useState } from "react";
import { useQuiosqueStore } from '@/store'

interface LoginData {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    store_id: string;
    permission: number;
    username: string;
  };
}

const useLoginMutation = () => {
  const navigate = useNavigate({ from: "/" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const setUser = useQuiosqueStore(state => state.setUser)

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
    onSuccess: (data: LoginData) => {
      navigate({ to: "/dashboard" });
      toast({
        title: "Login realizado com sucesso!",
        variant: "success",
      });
      setUser(data.user);
    },
    onMutate: () => {
      setLoading(true);
    }
  });

  return { mutate, isSuccess, isError, loading };
};

export default useLoginMutation;