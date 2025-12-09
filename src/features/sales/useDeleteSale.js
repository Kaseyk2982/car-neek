import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSale as deleteSaleApi } from "../../services/apiSales";
import toast from "react-hot-toast";

export default function useDeleteSale() {
  const queryClient = useQueryClient();
  const { mutate: deleteSale, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteSaleApi(id),
    onSuccess: () => {
      toast.success("Sale successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["sales"] });
    },
    onError: () => toast.error("Error deleting sale"),
  });
  return { deleteSale, isDeleting };
}
