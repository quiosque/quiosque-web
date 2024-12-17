import { useMutation } from "@tanstack/react-query";
import createProduct from "../services/createProduct";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "@tanstack/react-router";

const useCreateProductMutation = () => {
  const navigate = useNavigate({ from: "/" });
  const { toast } = useToast();

  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: createProduct,
    onError: (error) => {
      console.log(error);
      toast({
        title: "Ops, algo deu errado",
        description:
          "Não foi possível criar o producto, tente novamente mais tarde.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      navigate({ to: "/products/list" });
      toast({
        title: "Produto criado com sucesso!",
        variant: "success",
      });
    }
  });

  return { mutate, isSuccess, isError };
};

export default useCreateProductMutation;
