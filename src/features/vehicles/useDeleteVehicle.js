import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteVehicle as deleteVehicleApi } from "../../services/apiVehicles";
import toast from "react-hot-toast";

export function useDeleteVehicle() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteVehicle } = useMutation({
    mutationFn: (id) => deleteVehicleApi(id),
    onSuccess: () => {
      toast.success("Vehicle successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["vehicles"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteVehicle };
}
