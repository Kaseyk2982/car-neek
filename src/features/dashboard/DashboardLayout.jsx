import Spinner from "../../ui/Spinner";
import { useRecentSales } from "../sales/useRecentSales";
import { useTodaysPickups } from "../sales/useTodaysPickups";
import PickupsDisplay from "./PickupsDisplay";
import QuantityChart from "./QuantityChart";
import SalesChart from "./SalesChart";
import Stats from "./Stats";

export default function DashboardLayout() {
  const { isLoading, sales, numDays } = useRecentSales();

  const { isLoading: isGettingPickups, todaysPickups } = useTodaysPickups();

  if (isLoading || isGettingPickups) return <Spinner />;

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[auto_34rem_auto] gap-10">
      <Stats
        sales={sales}
        todaysPickups={todaysPickups}
        className="col-span-4"
      />
      <div className="col-span-2 h-full">
        <PickupsDisplay
          todaysPickups={todaysPickups}
          isGettingPickkups={isGettingPickups}
        />
      </div>
      <div className="col-span-2 h-full">
        <QuantityChart sales={sales} />
      </div>

      <div className="col-span-4">
        <SalesChart sales={sales} numDays={numDays} />
      </div>
    </div>
  );
}
