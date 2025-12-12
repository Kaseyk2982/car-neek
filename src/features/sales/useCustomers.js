import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../../services/apiSales";

export function useCustomers() {
  const {
    data: customers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: () => getCustomers(),
  });
  return { customers, isLoading, error };
}
