import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateSale } from "../../services/apiSales";

export default function useFinalPayment() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: paidInFull, isLoading: isPaying } = useMutation({
    mutationFn: (saleId) =>
      updateSale(saleId, {
        status: "paid",
        totalOwed: 0,
        pickedUpAt: new Date().toISOString(),
      }),
    onSuccess: () => {
      toast.success("Successfully marked as paid"),
        queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: () => toast.error("Error marking as paid"),
  });
  return { paidInFull, isPaying };
}
