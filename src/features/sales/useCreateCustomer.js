import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCustomer as createCustomerApi } from "../../services/apiSales";
import toast from "react-hot-toast";

export function useCreateCustomer() {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createCustomer } = useMutation({
    mutationFn: createCustomerApi,
    onSuccess: () => {
      toast.success("Successfully created customer");
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createCustomer };
}
