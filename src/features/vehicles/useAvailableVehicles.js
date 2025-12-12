import { useQuery } from "@tanstack/react-query";
import { getAvailableVehicles } from "../../services/apiVehicles";

export function useAvailableVehicles() {
  const { isLoading, data: availableVehicles } = useQuery({
    queryKey: ["vehicles"],
    queryFn: getAvailableVehicles,
  });
  return { isLoading, availableVehicles };
}
