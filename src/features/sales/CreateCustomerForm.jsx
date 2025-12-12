import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useCreateCustomer } from "./useCreateCustomer";

export default function CreateCustomerForm({ onCloseModal, onCloseForm }) {
  const { isCreating, createCustomer } = useCreateCustomer();

  const close = onCloseModal ?? onCloseForm;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
    },
  });

  function onSubmit(data) {
    createCustomer(data, {
      onSuccess: () => {
        reset();
        close?.();
      },
    });
  }
  function onError() {}

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Customer Full Name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "required" })}
        />
      </FormRow>
      <FormRow label="Customer Email" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "invalid email",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Customer Phone Number"
        error={errors.phoneNumber?.message}
      >
        <Input
          type="text"
          id="phoneNumber"
          {...register("phoneNumber", { required: "required" })}
        />
      </FormRow>
      <div className="flex justify-end gap-3">
        <Button type="reset" variation="secondary">
          Cancel
        </Button>
        <Button type="submit">Create customer</Button>
      </div>
    </Form>
  );
}
