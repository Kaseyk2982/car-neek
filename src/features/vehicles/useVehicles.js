import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getVehicles } from "../../services/apiVehicles";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useVehicles() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("isSold");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "isSold", value: filterValue };

  const sortByRaw = searchParams.get("sortBy") || "make-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: vehicles, count } = [],
    error,
  } = useQuery({
    queryKey: ["vehicles", filterValue ?? "all", sortBy, page],
    queryFn: () => getVehicles({ filter, sortBy, page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["vehicles", filterValue ?? "all", sortBy, page + 1],
      queryFn: () => getVehicles({ filter, sortBy, page: page + 1 }),
    });
  }
  if (page > 0) {
    queryClient.prefetchQuery({
      queryKey: ["vehicles", filterValue ?? "all", sortBy, page - 1],
      queryFn: () => getVehicles({ filter, sortBy, page: page - 1 }),
    });
  }

  return { isLoading, vehicles, error, count };
}
