import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Dashboard() {
  return (
    <>
      <Container>
        <Row className="flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Heading as="h1">Dashboard</Heading>
          <DashboardFilter />
        </Row>
        <DashboardLayout />
      </Container>
    </>
  );
}
