import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { useVehicles } from "./useVehicles";
import VehicleRow from "./VehicleRow";
import Pagination from "../../ui/Pagination";
import { PAGE_SIZE } from "../../utils/constants";

export default function VehicleTable() {
  const { isLoading, vehicles, error, count } = useVehicles();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("isSold") || "all";

  if (isLoading) return <Spinner />;

  if (!vehicles.length) {
    return <Empty resouceName="vehicles" />;
  }

  let filteredVehicles;
  if (filterValue === "true") {
    filteredVehicles = vehicles.filter((vehicle) => vehicle.isSold === true);
  }
  if (filterValue === "false") {
    filteredVehicles = vehicles.filter((vehicle) => vehicle.isSold === false);
  }
  if (filterValue === "all") {
    filteredVehicles = vehicles;
  }

  const sortBy = searchParams.get("sortBy") || "soldDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const firstValue = filteredVehicles[0]?.[field];
  const isStringField = typeof firstValue === "string";
  let sortedVehicles;
  if (isStringField) {
    sortedVehicles = filteredVehicles.sort(
      (a, b) => a[field].localeCompare(b[field]) * modifier
    );
  } else {
    sortedVehicles = filteredVehicles.sort(
      (a, b) => (a[field] - b[field]) * modifier
    );
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
        data={sortedVehicles}
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
