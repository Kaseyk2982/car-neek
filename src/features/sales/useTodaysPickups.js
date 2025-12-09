import { useQuery } from "@tanstack/react-query";
import { getTodaysPickups } from "../../services/apiSales";

export function useTodaysPickups() {
  const { isLoading, data: todaysPickups } = useQuery({
    queryFn: getTodaysPickups,
    queryKey: ["todaysPickups"],
  });
  return { isLoading, todaysPickups };
}
