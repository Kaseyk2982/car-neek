import { HiCurrencyDollar, HiEye, HiTrash } from "react-icons/hi2";
import Menu from "../../ui/Menu";
import Table from "../../ui/Table";
import { formatCurrency, formatDate } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import useDeleteSale from "./useDeleteSale";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

export default function SalesRow({
  sale: {
    id: saleId,
    created_at,
    saleDate,
    salePrice,
    status,
    vehicles: { make, model, image } = {},
    customers: {
      fullName: customerName,
      email: customerEmail,
      phoneNumber: customerPhone,
    } = {},
  },
}) {
  const { deleteSale, isDeleting } = useDeleteSale();

  const navigate = useNavigate();
  return (
    <Table.Row>
      {image && (
        <img
          className="block w-28 object-contain object-center rounded-md"
          src={`${image}?width=192&height=192&resize=fill&quality=85`}
        />
      )}
      <div className="flex flex-col gap-1">
        <span className="text-3xl font-semibold text-slate-800 font-serif">
          {make}
        </span>
        <span className="text-2xl font-medium text-slate-800 font-serif">
          {model}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-medium text-slate-800 font-serif">
          {customerName}
        </span>
        <span className="text-xl font-medium text-slate-500 font-serif">
          {customerEmail}
        </span>
      </div>
      <div className="text-2xl font-medium text-slate-500 font-serif">
        {formatDate(saleDate)}
      </div>
      <div className="text-2xl font-medium text-slate-500 font-serif">
        {formatCurrency(salePrice)}
      </div>
      <div
        className={`${
          status === "paid" ? "text-green-500" : "text-yellow-500"
        } text-2xl font-semibold font-serif uppercase`}
      >
        {status}
      </div>
      <div>
        <Modal>
          <Menu.Menu>
            <Menu.Toggle id={saleId} />
            <Menu.List id={saleId}>
              <Menu.Button
                icon={<HiEye />}
                onClick={() => navigate(`/sales/${saleId}`)}
              >
                View Details
              </Menu.Button>
              {status === "pending" && (
                <Menu.Button
                  icon={<HiCurrencyDollar />}
                  onClick={() => navigate(`/finalPayment/${saleId}`)}
                >
                  Final Payment
                </Menu.Button>
              )}
              <Modal.Open opens="delete">
                <Menu.Button icon={<HiTrash />}>Delete Sale</Menu.Button>
              </Modal.Open>
            </Menu.List>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName={`sale id # ${saleId}`}
                onConfirm={() => deleteSale(saleId)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Menu.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}
