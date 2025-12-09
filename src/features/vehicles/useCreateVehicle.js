import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditVehicle } from "../../services/apiVehicles";
import toast from "react-hot-toast";

export function useCreateVehicle() {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createVehicle } = useMutation({
    mutationFn: createEditVehicle,
    onSuccess: () => {
      toast.success("Vehicle successfully created");
      queryClient.invalidateQueries({ queryKey: ["vehicles"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createVehicle };
}
