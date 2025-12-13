import AddCustomer from "../features/sales/AddCustomer";
import AddSale from "../features/sales/AddSale";
import SalesTable from "../features/sales/SalesTable";
import SalesTableOperations from "../features/sales/SalesTableOperations";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Sales() {
  return (
    <Container>
      <Row type="horizontal">
        <Heading as="h1">Sales</Heading>
        <SalesTableOperations />
      </Row>
      <Row>
        <SalesTable />
        <div className="flex gap-3">
          <AddCustomer />
          <AddSale />
        </div>
      </Row>
    </Container>
  );
}
