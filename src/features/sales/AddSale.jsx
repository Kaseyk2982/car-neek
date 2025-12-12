import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateSaleFrom from "./CreateSaleForm";

export default function AddSale() {
  return (
    <Modal>
      <Modal.Open opens="sale-form">
        <Button>Create new sale</Button>
      </Modal.Open>
      <Modal.Window name="sale-form">
        <CreateSaleFrom />
      </Modal.Window>
    </Modal>
  );
}
