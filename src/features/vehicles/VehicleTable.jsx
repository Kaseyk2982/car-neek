import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { useVehicles } from "./useVehicles";
import VehicleRow from "./VehicleRow";
import Pagination from "../../ui/Pagination";
import { PAGE_SIZE } from "../../utils/constants";

export default function VehicleTable() {
  const { isLoading, vehicles, error, count } = useVehicles();

  if (isLoading) return <Spinner />;

  if (!vehicles.length) {
    return <Empty resouceName="vehicles" />;
  }

  return (
    <Table role="table" columns="1fr 1.2fr 1fr 0.7fr 1fr 1.2fr 1fr 0.5fr">
      <Table.Header>
        <div></div>
        <div>Make</div>
        <div>Model</div>
        <div>Year</div>
        <div>Mileage</div>
        <div>Price</div>
        <div>Availability</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={vehicles}
        render={(vehicle) => <VehicleRow vehicle={vehicle} key={vehicle.id} />}
      />
      {count > PAGE_SIZE && (
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      )}
    </Table>
  );
}
