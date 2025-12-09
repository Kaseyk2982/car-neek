import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import Heading from "../../ui/Heading";
import Empty from "../../ui/Empty";

const startData = [
  { price: "$0 - $40,000", value: 0, color: "#4f46e5" },
  { price: "$40,001 - $80,000", value: 0, color: "#db2777" },
  { price: "$80,001 - $120,000", value: 0, color: "#059669" },
  { price: "$120,001 - $160,000", value: 0, color: "#d97706" },
  { price: "$160,001+", value: 0, color: "#0891b2" },
];

function calculateData(startData, soldCars) {
  const copy = startData.map((obj) => ({ ...obj }));
  function findValue(arr, field) {
    return arr.map((obj) =>
      obj.price === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = soldCars.reduce((arr, cur) => {
    const price = cur.salePrice ?? 0; // safety

    let bucket;
    if (price <= 40000) {
      bucket = "$0 - $40,000";
    } else if (price <= 80000) {
      bucket = "$40,001 - $80,000";
    } else if (price <= 120000) {
      bucket = "$80,001 - $120,000";
    } else if (price <= 160000) {
      bucket = "$120,001 - $160,000";
    } else {
      bucket = "$160,001+";
    }

    return findValue(arr, bucket); // Always return!
  }, copy);

  return data.filter((obj) => obj.value > 0);
}

export default function QuantityChart({ sales }) {
  const data = calculateData(startData, sales);
  return (
    <div className="h-full bg-gray-50 border border-solid border-gray-100 rounded-md px-14 py-12 flex flex-col gap-10">
      <div className="flex justify-start">
        <Heading as="h2">Sale price summary</Heading>
      </div>
      {data.length > 0 ? (
        <ResponsiveContainer height={240} width="100%">
          <PieChart>
            <Pie
              data={data}
              nameKey="price"
              dataKey="value"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={3}
              cx="40%"
              cy="50%"
            >
              {data.map((entry) => (
                <Cell
                  fill={entry.color}
                  stroke={entry.color}
                  key={entry.price}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              width="30%"
              iconSize={15}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <Empty resourceName="data" />
      )}
    </div>
  );
}
