import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";

import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import { login } from "../../services/apiAuth";
import { useLogin } from "./useLogin";
import Spinner from "../../ui/Spinner";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { login, isLoggingIn } = useLogin();

  function onSubmit(data) {
    const { email, password } = data;
    if (!email || !password) return;

    login(data, {
      onSettled: () => {
        reset();
      },
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          autoComplete="username"
          disabled={isLoggingIn}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical label="Password" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isLoggingIn}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" type="submit" disabled={isLoggingIn}>
          {!isLoggingIn ? "Login" : <Spinner size="md" color="white" />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}
