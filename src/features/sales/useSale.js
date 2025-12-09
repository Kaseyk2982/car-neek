import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import { getSale } from "../../services/apiSales";

export function useSale() {
  const { saleId } = useParams();

  const {
    isLoading,
    data: sale,
    error,
  } = useQuery({
    queryKey: ["sale", saleId],
    queryFn: () => getSale(saleId),
    retry: false,
  });

  return { isLoading, sale, error };
}
