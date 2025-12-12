import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCustomerForm from "./CreateCustomerForm";

export default function AddCustomer() {
  return (
    <Modal>
      <Modal.Open opens="customer-form">
        <Button>Create new customer</Button>
      </Modal.Open>
      <Modal.Window name="customer-form">
        <CreateCustomerForm />
      </Modal.Window>
    </Modal>
  );
}
