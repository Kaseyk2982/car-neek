import Heading from "../ui/Heading";
import Container from "../ui/Container";
import Row from "../ui/Row";
import SignupForm from "../features/authentication/SignupForm";

export default function Users() {
  return (
    <Container>
      <Row type="horizontal">
        <Heading as="h1">Create a new user</Heading>
      </Row>
      <SignupForm />
    </Container>
  );
}
