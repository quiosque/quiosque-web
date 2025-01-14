import { useMutation } from "@tanstack/react-query";
import newSale from "../services/newSale";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "@tanstack/react-router";

const useSaleMutation = () => {
  const navigate = useNavigate({ from: "/" });
  const { toast } = useToast();

  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: newSale,
    onError: (error) => {
      console.log(error.message);
      toast({
        title: "Ops, algo deu errado",
        description:
          error.message ?? "Não foi possível realizar a venda, tente novamente mais tarde.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      navigate({ to: "/dashboard" });
      toast({
        title: "Venda realizada com sucesso!",
        variant: "success",
      });
    }
  });

  return { mutate, isSuccess, isError };
};

export default useSaleMutation;
