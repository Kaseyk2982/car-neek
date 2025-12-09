import ButtonText from "../../ui/ButtonText";
import ButtonGroup from "../../ui/ButtonGroup";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import SaleDataBox from "./SaleDataBox";
import { useSale } from "./useSale";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmFinalPayment from "../../ui/ConfirmFinalPayment";
import { useNavigate } from "react-router-dom";

export default function FinalSalePayment() {
  const { sale, isLoading } = useSale();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const baseStyles =
    "uppercase text-2xl py-1 px-12 rounded-3xl shadow-2xl font-semibold";
  const paidStyles = "bg-green-200 text-green-800";
  const pendingStyles = "bg-yellow-200 text-yellow-800";

  const { id: saleId, status, customers } = sale;
  return (
    <Container>
      <Row className type="horizontal">
        <div>
          <Heading as="h1">
            Collecting final payment for sale # {saleId}
          </Heading>
          <span
            className={`${baseStyles} ${
              status === "paid" ? paidStyles : pendingStyles
            }`}
          >
            {status}
          </span>
        </div>
        <ButtonText onClick={() => navigate(-1)}>&larr; back</ButtonText>
      </Row>
      <SaleDataBox sale={sale} />
      <div className="flex justify-end">
        <Modal>
          <Modal.Open opens="payment">
            <Button>Collect final payment</Button>
          </Modal.Open>
          <Modal.Window name="payment">
            <ConfirmFinalPayment
              resourceName={saleId}
              customer={customers.fullName}
            />
          </Modal.Window>
        </Modal>
      </div>
    </Container>
  );
}
