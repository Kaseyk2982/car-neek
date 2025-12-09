import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Dashboard() {
  return (
    <>
      <Container>
        <Row type="horizontal">
          <Heading as="h1">Dashboard</Heading>
          <DashboardFilter />
        </Row>
        <DashboardLayout />
      </Container>
    </>
  );
}
