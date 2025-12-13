import { Controller, useForm } from "react-hook-form";
import { Combobox } from "../../ui/ComboBox";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useAvailableVehicles } from "../vehicles/useAvailableVehicles";
import { useCustomers } from "./useCustomers";
import Input from "../../ui/Input";
import DatePicker from "../../ui/DatePicker";
import { useState } from "react";
import { useCreateSale } from "./useCreateSale";

export default function CreateSaleFrom({ onCloseModal, onCloseForm }) {
  const { isLoading, availableVehicles = [] } = useAvailableVehicles();
  const { isLoading: isLoadingCustomers, customers = [] } = useCustomers();
  const { isCreating, createSale } = useCreateSale();

  const close = onCloseModal ?? onCloseForm;

  const [isPaid, setIsPaid] = useState(false);

  const vehicles = availableVehicles.map((vehicle) => ({
    value: String(vehicle.id),
    label: `${vehicle.make}-${vehicle.model}`,
  }));

  const customerOptions = customers.map((customer) => ({
    value: String(customer.id),
    label: customer.fullName,
  }));

  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      vehicleId: "",
      customerId: "",
      salePrice: "",
      status: "",
      pickupDate: "",
      downPayment: "",
      totalOwed: "0",
    },
  });

  function onSubmit(data) {
    console.log(data);
    createSale(data, {
      onSuccess: () => {
        reset();
        close?.();
      },
    });
  }

  function onError(errors) {}

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Select a vehicle" error={errors?.vehicleId?.message}>
        <div className="flex flex-col gap-2">
          <Controller
            name="vehicleId"
            control={control}
            rules={{ required: "required" }}
            render={({ field }) => (
              <Combobox
                options={vehicles}
                placeholder="vehicle"
                value={field.value}
                onValueChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          <span className="text-sm font-bold text-indigo-600 text-center">
            Don't forget to update vehicle to sold in vehicles table
          </span>
        </div>
      </FormRow>
      <FormRow label="Select a customer" error={errors?.customerId?.message}>
        <Controller
          name="customerId"
          control={control}
          rules={{ required: "required" }}
          render={({ field }) => (
            <Combobox
              options={customerOptions}
              placeholder="customer"
              value={field.value}
              onValueChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
      </FormRow>
      <FormRow label="Sale price" error={errors?.salePrice?.message}>
        <Input
          type="number"
          id="salePrice"
          {...register("salePrice", { required: "required" })}
        />
      </FormRow>
      <FormRow label="Status" error={errors?.status?.message}>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="pending"
              {...register("status", { required: "required" })}
              className="w-5 h-5 text-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            />
            <span className="text-gray-700 font-medium">Pending</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="paid"
              {...register("status", {
                required: "required",
                onChange: (e) => setIsPaid(e.target.value === "paid"),
              })}
              className="w-5 h-5 text-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            />
            <span className="text-gray-700 font-medium">Paid in full</span>
          </label>
        </div>
      </FormRow>
      <FormRow label="Sold by" error={errors?.soldBy?.message}>
        <Input
          type="text"
          id="soldBy"
          {...register("soldBy", {
            required: "required",
          })}
        />
      </FormRow>
      <FormRow label="Pick up date" error={errors?.pickupDate?.message}>
        <Controller
          name="pickupDate"
          control={control}
          rules={{ required: "required" }}
          render={({ field }) => (
            <DatePicker value={field.value} onChange={field.onChange} />
          )}
        />
      </FormRow>
      <FormRow label="Down payment" error={errors?.downPayment?.message}>
        <Input
          type="number"
          id="downPayment"
          {...register("downPayment", { required: "required" })}
        />
      </FormRow>
      {!isPaid && (
        <FormRow label="Total owed" error={errors?.totalOwed?.message}>
          <Input
            type="number"
            id="totalOwed"
            {...register("totalOwed", { required: "required" })}
          />
        </FormRow>
      )}
      <div className="flex justify-end gap-3">
        <Button variation="secondary" type="reset" onClick={close}>
          Cancel
        </Button>
        <Button type="submit">Create sale</Button>
      </div>
    </Form>
  );
}
