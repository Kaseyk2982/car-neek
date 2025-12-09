import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getVehicles } from "../../services/apiVehicles";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useVehicles() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: vehicles, count } = [],
    error,
  } = useQuery({
    queryKey: ["vehicles", page],
    queryFn: () => getVehicles(page),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["vehicles", page + 1],
      queryFn: () => getVehicles(page + 1),
    });
  }
  if (page > 0) {
    queryClient.prefetchQuery({
      queryKey: ["vehicles", page - 1],
      queryFn: () => getVehicles(page - 1),
    });
  }

  return { isLoading, vehicles, error, count };
}
