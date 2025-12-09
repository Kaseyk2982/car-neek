import AddVehicle from "../features/vehicles/AddVehicle";
import VehicleTable from "../features/vehicles/VehicleTable";
import VehicleTableOperations from "../features/vehicles/VehicleTableOperations";

import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Vehicles() {
  return (
    <div>
      <Container>
        <Row type="horizontal">
          <Heading as="h1">All Vehicles</Heading>
          <VehicleTableOperations />
        </Row>
        <Row>
          <VehicleTable />
          <AddVehicle />
        </Row>
      </Container>
    </div>
  );
}
