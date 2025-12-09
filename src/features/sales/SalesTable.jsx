import Menu from "../../ui/Menu";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import SalesRow from "./SalesRow";
import useSales from "./useSales";
import { PAGE_SIZE } from "../../utils/constants";

export default function SalesTable() {
  const { isLoading, sales, error, count } = useSales();

  if (isLoading) {
    return <Spinner />;
  }
  if (!sales.length) return <Empty resourceName="sales" />;

  return (
    <Menu>
      <Table role="table" columns="1fr 1.5fr 1.5fr 1fr 1fr 1fr 0.5fr">
        <Table.Header>
          <div></div>
          <div>Vehicle</div>
          <div>Customer</div>
          <div>Sale Date</div>
          <div>Sale Price</div>
          <div>Paid Status</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sales}
          render={(sale) => <SalesRow sale={sale} key={sale.id} />}
        />

        {count > PAGE_SIZE && (
          <Table.Footer>
            <Pagination count={count} />
          </Table.Footer>
        )}
      </Table>
    </Menu>
  );
}
