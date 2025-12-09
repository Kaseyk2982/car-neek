import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";

export default function UpdatePasswordForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit(data) {
    if (!data) return;
    updateUser(data, {
      onSettled: () => {
        reset();
      },
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Password (8 characters minimum)">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be min 8 characters",
            },
          })}
        />
      </FormRow>
      <FormRow label="Confirm Password">
        <Input
          type="password"
          id="confirmPassword"
          autoComplete="new-password"
          disabled={isUpdating}
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              getValues().password === value || "Passwords must match",
          })}
        />
      </FormRow>
      <div className="flex gap-4 justify-end">
        <Button
          onClick={reset}
          type="reset"
          variation="secondary"
          disabled={isUpdating}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update Password</Button>
      </div>
    </Form>
  );
}
