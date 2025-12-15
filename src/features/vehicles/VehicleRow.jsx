import { useState } from "react";
import Table from "../../ui/Table";
import { formatCurrency } from "../../utils/helpers";
import { formatWithCommas } from "../../utils/helpers";
import { useDeleteVehicle } from "./useDeleteVehicle";
import CreateVehicleForm from "./CreateVehicleForm";
import { HiPencil, HiSquare2Stack, HiTrash, HiXCircle } from "react-icons/hi2";
import { useCreateVehicle } from "./useCreateVehicle";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menu from "../../ui/Menu";

export default function VehicleRow({ vehicle }) {
  const [isEditing, setIsEditing] = useState(false);
  const { isDeleting, deleteVehicle } = useDeleteVehicle();
  const { isCreating, createVehicle } = useCreateVehicle();

  const {
    id: vehicleId,
    make,
    model,
    year,
    mileage,
    regularPrice,
    description,
    isSold,
    image,
  } = vehicle;

  function handleDuplicate() {
    createVehicle({
      make: `Copy ${make}`,
      model,
      year,
      mileage,
      regularPrice,
      description,
      isSold: false,
      image,
    });
  }

  return (
    <Table.Row>
      <img
        className="block w-28 object-contain object-center rounded-md"
        src={`${image}?width=192&height=192&resize=fill&quality=85`}
      />

      <div className="text-2xl font-semibold text-gray-600 font-serif">
        {make}
      </div>
      <div className="text-2xl font-semibold text-gray-600 font-serif">
        {model}
      </div>
      <div className="text-2xl font-medium text-gray-500 font-serif">
        {year}
      </div>
      <div className="text-2xl font-medium text-gray-500 font-serif">
        {formatWithCommas(mileage)}
      </div>
      <div className="text-2xl font-medium text-gray-500 font-serif">
        {formatCurrency(regularPrice)}
      </div>

      <div
        className={`font-semibold uppercase ${
          isSold ? "text-red-500" : "text-green-500"
        } `}
      >
        {isSold ? "sold" : "in stock"}
      </div>
      <div className="flex gap-0 text-md">
        <Modal>
          <Menu.Menu>
            <Menu.Toggle id={vehicleId} />
            <Menu.List id={vehicleId}>
              <Menu.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menu.Button>
              <Modal.Open opens="edit">
                <Menu.Button icon={<HiPencil />}>Edit</Menu.Button>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Menu.Button icon={<HiTrash />} disabled={isDeleting}>
                  Delete
                </Menu.Button>
              </Modal.Open>
              <Menu.Button icon={<HiXCircle />}>Cancel</Menu.Button>
            </Menu.List>

            <Modal.Window name="edit">
              <CreateVehicleForm vehicleToEdit={vehicle} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName={make}
                onConfirm={() => deleteVehicle(vehicleId)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Menu.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}
