import { useMutation } from "@tanstack/react-query";
import createItem from "../services/createItem";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "@tanstack/react-router";

const useCreateItemMutation = () => {
  const navigate = useNavigate({ from: "/" });
  const { toast } = useToast();

  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: createItem,
    onError: (error) => {
      console.log(error);
      toast({
        title: "Ops, algo deu errado",
        description:
          "Não foi possível criar o item, tente novamente mais tarde.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      navigate({ to: "/items/list" });
      toast({
        title: "Item criado com sucesso!",
        variant: "success",
      });
    }
  });

  return { mutate, isSuccess, isError };
};

export default useCreateItemMutation;
