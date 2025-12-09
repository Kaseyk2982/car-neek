import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Heading from "../../ui/Heading";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

export default function SalesChart({ sales, numDays }) {
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: sales
        .filter((sale) => isSameDay(date, new Date(sale.created_at)))
        .reduce((acc, cur) => acc + cur.salePrice, 0),
    };
  });

  return (
    <div className="bg-gray-50 border border-solid border-gray-200 rounded-md p-14 flex flex-col gap-10 grid-cols-[1 / -1]">
      <Heading as="h2" className="text-left">
        Sales{" "}
        <span className="text-xl">
          ({format(allDates[0], "MMM dd")} &mdash;{" "}
          {format(allDates[allDates.length - 1], "MMM dd")})
        </span>
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke="#1e1b4b"
            fill="#4f46e5"
            name="Total sales"
            unit="$"
          />
          <YAxis unit="$" width={70} tick={{ fontSize: 14 }} />
          <XAxis dataKey="label" />
          <Tooltip />
          <CartesianGrid />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
