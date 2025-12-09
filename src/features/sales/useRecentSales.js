import { useQuery } from "@tanstack/react-query";
import { getSalesAfterDate } from "../../services/apiSales";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";

export function useRecentSales() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: sales } = useQuery({
    queryFn: () => getSalesAfterDate(queryDate),
    queryKey: ["sales", `last-${numDays}`],
  });
  return { isLoading, sales, numDays };
}
