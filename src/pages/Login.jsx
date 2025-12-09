import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

export default function Login() {
  return (
    <main className="h-screen grid grid-cols-[48rem] content-center justify-center gap-12 bg-gray-100">
      <Logo />
      <Heading as="h3">Log in to your account</Heading>
      <LoginForm />
    </main>
  );
}
