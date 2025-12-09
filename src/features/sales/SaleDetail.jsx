import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import ButtonText from "../../ui/ButtonText";
import { useNavigate } from "react-router-dom";
import SaleDataBox from "./SaleDataBox";
import { useSale } from "./useSale";
import { useEffect } from "react";
import Container from "../../ui/Container";
import Empty from "../../ui/Empty";

export default function SaleDetail() {
  const baseStyles =
    "uppercase text-2xl py-1 px-12 rounded-3xl shadow-2xl font-semibold";
  const paidStyles = "bg-green-200 text-green-800";
  const pendingStyles = "bg-yellow-200 text-yellow-800";

  const navigate = useNavigate();
  const { isLoading, sale } = useSale();

  if (isLoading) return <Spinner />;
  if (!sale) return <Empty resourceName="sale" />;
  const { status, id: saleId, pickupDate } = sale;

  return (
    <Container>
      <Row className type="horizontal">
        <div>
          <Heading as="h1">Details of sale # {saleId}</Heading>
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
    </Container>
  );
}
