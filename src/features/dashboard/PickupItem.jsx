import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

export default function PickupItem({ pickup }) {
  const {
    id,
    status,
    customers: { fullName },
    vehicles: { make, model },
    totalOwed,
  } = pickup;

  return (
    <div className="font-extrabold mt-4 flex flex-col gap-4 bg-indigo-300 text-indigo-900 px-10 py-4 rounded-md text-lg">
      <li className="flex gap-6 items-center">
        <span>{fullName}</span>{" "}
        <span>
          {make} {model}
        </span>
        {totalOwed > 0 ? (
          <span>{formatCurrency(totalOwed)}</span>
        ) : (
          <span className="uppercase">paid in full</span>
        )}
        {status === "pending" && (
          <Button size="xs" className="ml-auto" to={`/finalPayment/:${id}`}>
            <Link
              to={`/finalPayment/${id}`}
              className="block w-full h-full px-3 py-1 text-center"
            >
              Payment
            </Link>
          </Button>
        )}
      </li>
    </div>
  );
}
