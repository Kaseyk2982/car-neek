import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Account() {
  return (
    <Container>
      <Heading as="h1">Update your account</Heading>
      <Row>
        <Heading as="h3">Update your data</Heading>
        <UpdateUserDataForm />
      </Row>
      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </Container>
  );
}
