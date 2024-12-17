import { useMutation } from "@tanstack/react-query";
import createCategory from "../services/createCategory";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "@tanstack/react-router";

const useCreateCategoryMutation = () => {
  const navigate = useNavigate({ from: "/" });
  const { toast } = useToast();

  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: createCategory,
    onError: (error) => {
      console.log(error);
      toast({
        title: "Ops, algo deu errado",
        description:
          "Não foi possível criar a categoria, tente novamente mais tarde.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      navigate({ to: "/products/list" });
      toast({
        title: "Categoria criada com sucesso!",
        variant: "success",
      });
    }
  });

  return { mutate, isSuccess, isError };
};

export default useCreateCategoryMutation;
