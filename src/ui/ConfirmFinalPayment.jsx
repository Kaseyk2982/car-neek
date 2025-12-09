import useFinalPayment from "../features/sales/useFinalPayment";
import { useSale } from "../features/sales/useSale";
import Button from "./Button";
import Heading from "./Heading";
import Spinner from "./Spinner";
import { formatCurrency } from "../utils/helpers";

export default function ConfirmFinalPayment({
  resourceName,
  onCloseModal,
  disabled,
  onConfirm,
  customer,
}) {
  const { paidInFull, isPaying } = useFinalPayment();
  const { sale, isLoading } = useSale();

  if (isPaying) return <Spinner />;

  const { id: saleId, salePrice, downPayment } = sale;

  function handleConfirm() {
    paidInFull(saleId);
    onCloseModal?.();
  }

  return (
    <div className="w-[40rem] flex flex-col gap-4">
      <Heading as="h3">Confirm final payment for sale # {resourceName}</Heading>
      <p className="text-gray-500 mb-4 flex flex-col">
        Are you sure {customer} has paid in full?{" "}
        <span>
          Remaining balance is ({formatCurrency(salePrice - downPayment)})
        </span>
      </p>
      <div className="flex justify-end gap-4">
        <Button
          onClick={onCloseModal}
          disabled={disabled}
          variation="secondary"
        >
          Cancel
        </Button>
        <Button onClick={handleConfirm} disabled={disabled} variation="primary">
          Confirm Paid
        </Button>
      </div>
    </div>
  );
}
