import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSale as createSaleApi } from "../../services/apiSales";
import toast from "react-hot-toast";

export function useCreateSale() {
  const queryClient = useQueryClient();
  const { mutate: createSale, isLoading: isCreating } = useMutation({
    mutationFn: createSaleApi,
    onSuccess: () => {
      toast.success("Sale successfully created");
      queryClient.invalidateQueries({ queryKey: ["sales"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createSale, isCreating };
}
