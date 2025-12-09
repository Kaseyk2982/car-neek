import {
  formatCurrency,
  formatDate,
  formatDistanceFromNow,
} from "../../utils/helpers";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { isBefore, startOfDay } from "date-fns";
import Modal from "../../ui/Modal";
import useDeleteSale from "./useDeleteSale";
import ConfirmDelete from "../../ui/ConfirmDelete";

export default function SaleDataBox({ sale }) {
  const {
    id: saleId,
    created_at,
    saleDate,
    salePrice,
    downPayment,
    totalOwed,
    status,
    soldBy,
    pickupDate,
    pickedUpAt,
    customers: { fullName, phoneNumber, email },
    vehicles: { make, model, regularPrice },
  } = sale;

  const { deleteSale, isDeleting } = useDeleteSale();

  // const isPickedUp =
  //   !isBefore(startOfDay(new Date()), startOfDay(pickupDate)) ||
  //   status === "paid";

  const navigate = useNavigate();
  return (
    <section className="bg-white border border-solid border-gray-100 rounded-md overflow-hidden">
      <header className="bg-indigo-500 py-8 px-16 text-indigo-100 text-3xl font-semibold flex items-center justify-between">
        <p>
          <span className="font-serif ml-1 text-4xl">
            {make} | {model}
          </span>
        </p>
        <p>
          {pickedUpAt
            ? `Picked up on - ${formatDate(pickedUpAt)}`
            : `Picking up on - ${formatDate(
                pickupDate
              )} (${formatDistanceFromNow(pickupDate)})`}
        </p>
      </header>
      <section className="pt-12 px-16 pb-4 flex flex-col">
        <div className="flex items-center justify-center gap-5 mb-6 text-gray-500 first-of-type:font-semibold first-of-type:text-gray-700">
          <p>{fullName}</p>
          <span>|</span>
          <p>ph: {phoneNumber}</p>
          <span>|</span>
          <p>email: {email}</p>
        </div>
        <div className="justify-start">
          <p className="font-semibold">
            sold by <span>&bull;</span> {soldBy}
          </p>
          <p className="font-semibold">
            date sold <span>&bull;</span> {formatDate(saleDate)}
          </p>
        </div>
        <div
          className={`flex justify-around py-10 rounded-lg items-center mt-8 text-3xl font-semibold ${
            status === "paid"
              ? "bg-green-200 text-green-800"
              : "bg-yellow-200 text-yellow-800"
          }`}
        >
          <div className="flex flex-col gap-4">
            <p>
              Original Price <span>&bull;</span> {formatCurrency(regularPrice)}
            </p>
            <p>
              Final sold price <span>&bull;</span> {formatCurrency(salePrice)}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Down payment <span>&bull;</span> {formatCurrency(downPayment)}
            </p>

            <p>
              Total owed <span>&bull;</span>{" "}
              {status === "paid"
                ? "Paid in full"
                : formatCurrency(salePrice - downPayment)}
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-6 gap-4">
          {status === "paid" && (
            <Modal>
              <Modal.Open opens="delete">
                <Button variation="danger">Delete Sale</Button>
              </Modal.Open>
              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName={`sale # ${saleId}`}
                  onConfirm={() =>
                    deleteSale(saleId, {
                      onSettled: () => navigate(-1),
                    })
                  }
                  disabled={isDeleting}
                />
              </Modal.Window>
            </Modal>
          )}
          <Button
            onClick={() => navigate(-1)}
            variation="secondary"
            size="medium"
          >
            &larr; <span>back</span>
          </Button>
        </div>
      </section>
    </section>
  );
}
