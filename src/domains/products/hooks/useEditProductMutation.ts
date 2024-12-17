import { useMutation } from "@tanstack/react-query";
import editProduct from "../services/editProduct";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "@tanstack/react-router";

const useEditProductMutation = () => {
  const navigate = useNavigate({ from: "/" });
  const { toast } = useToast();

  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: editProduct,
    onError: (error) => {
      console.log(error);
      toast({
        title: "Ops, algo deu errado",
        description:
          "Não foi possível editar o producto, tente novamente mais tarde.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      navigate({ to: "/products/list" });
      toast({
        title: "Produto editado com sucesso!",
        variant: "success",
      });
    }
  });

  return { mutate, isSuccess, isError };
};

export default useEditProductMutation;
