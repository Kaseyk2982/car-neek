import Button from "../../ui/Button";
import CreateVehicleForm from "./CreateVehicleForm";
import Modal from "../../ui/Modal";

export default function AddVehicle() {
  return (
    <Modal>
      <Modal.Open opens="vehicle-form">
        <Button>Create new vehicle</Button>
      </Modal.Open>
      <Modal.Window name="vehicle-form">
        <CreateVehicleForm />
      </Modal.Window>
    </Modal>
  );
}
