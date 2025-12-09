import {
  HiCurrencyDollar,
  HiOutlineArrowTrendingUp,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency, getToday } from "../../utils/helpers";

export default function Stats({ sales, todaysPickups = [] }) {
  const numSales = sales.length;
  let salesTotal;
  let average;

  const today = getToday(new Date()).slice(0, 10);

  if (sales.length !== 0) {
    salesTotal = sales.reduce((acc, cur) => acc + cur.salePrice, 0);
    average = salesTotal / sales.length;
  }

  const pickingUp = todaysPickups.length;

  return (
    <>
      <Stat
        title="Todays pickups"
        value={pickingUp}
        icon={<HiOutlineCalendarDays className="w-24 h-24 text-indigo-500" />}
      />
      <Stat
        title="Total sales"
        value={sales.length !== 0 ? formatCurrency(salesTotal) : 0}
        icon={<HiCurrencyDollar className="w-24 h-24 text-green-500" />}
      />

      <Stat
        title="Average $ per sale"
        value={sales.length !== 0 ? formatCurrency(average) : 0}
        icon={<HiOutlineArrowTrendingUp className="w-24 h-24 text-red-500" />}
      />
      <Stat
        title="Sales tally"
        value={numSales}
        icon={<HiOutlineChartBar className="w-24 h-24 text-orange-500" />}
      />
    </>
  );
}
