import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditVehicle } from "../../services/apiVehicles";
import toast from "react-hot-toast";

export function useEditVehicle() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editVehicle } = useMutation({
    mutationFn: ({ newVehicle, id }) => createEditVehicle(newVehicle, id),
    onSuccess: () => {
      toast.success("Vehicle successfully updated");
      queryClient.invalidateQueries({ queryKey: ["vehicles"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editVehicle };
}
