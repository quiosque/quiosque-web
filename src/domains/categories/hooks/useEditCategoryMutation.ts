import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "@tanstack/react-router";
import { editCategory } from "../services";
import { Category } from "../types";

const useEditItemMutation = () => {
  const navigate = useNavigate({ from: "/" });
  const { toast } = useToast();

  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: (data: Category) => editCategory(data),
    onError: (error) => {
      console.log(error);
      toast({
        title: "Ops, algo deu errado",
        description:
          "Não foi possível editar o item, tente novamente mais tarde.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      navigate({ to: "/items/list" });
      toast({
        title: "Item editado com sucesso!",
        variant: "success",
      });
    }
  });

  return { mutate, isSuccess, isError };
};

export default useEditItemMutation;
