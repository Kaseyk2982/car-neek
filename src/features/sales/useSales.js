import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSales } from "../../services/apiSales";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export default function useSales() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  //filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  //sort
  const sortByRaw = searchParams.get("sortBy") || "saleDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  //pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: sales, count } = {},
    error,
  } = useQuery({
    queryKey: ["sales", filterValue ?? "all", sortBy, page],
    queryFn: () => getSales({ filter, sortBy, page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["sales", filterValue ?? "all", sortBy, page + 1],
      queryFn: () => getSales({ filter, sortBy, page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["sales", filterValue ?? "all", sortBy, page - 1],
      queryFn: () => getSales({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, sales, error, count };
}
