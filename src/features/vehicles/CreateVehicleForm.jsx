import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useCreateVehicle } from "./useCreateVehicle";
import { useEditVehicle } from "./useEditVehicle";

export default function CreateVehicleForm({
  vehicleToEdit = {},
  onCloseForm,
  onCloseModal,
}) {
  const { isEditing, editVehicle } = useEditVehicle();
  const { isCreating, createVehicle } = useCreateVehicle();
  const { id: editId, ...editValues } = vehicleToEdit;
  const isEditingVehicle = Boolean(editId);

  const { register, handleSubmit, reset, formState, getValues } = useForm({
    defaultValues: isEditingVehicle
      ? { ...editValues, isSold: String(editValues.isSold) }
      : {},
  });

  const isWorking = isCreating || isEditing;

  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    const vehicleData = { ...data, isSold: data.isSold === "true", image };

    const close = onCloseModal ?? onCloseForm;

    if (isEditingVehicle) {
      editVehicle(
        { newVehicle: vehicleData, id: editId },
        {
          onSuccess: () => {
            reset();
            close?.();
          },
        }
      );
    } else {
      createVehicle(vehicleData, {
        onSuccess: () => {
          reset();
          close?.();
        },
      });
    }
  }

  function onError(errors) {
    //   console.log(errors);
  }

  return (
    <Form
      type={onCloseModal ? "modal" : "regular"}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow label="Make" error={errors?.make?.message}>
        <input
          className="py-2"
          type="text"
          id="make"
          {...register("make", { required: "Vehicle make is required" })}
        />
      </FormRow>
      <FormRow label="Model" error={errors?.model?.message}>
        <input
          className="py-2"
          type="text"
          id="model"
          {...register("model", { required: "Vehicle model is required" })}
        />
      </FormRow>
      <FormRow label="Year" error={errors?.year?.message}>
        <input
          className="py-2"
          type="number"
          id="year"
          {...register("year", { required: "Vehicle year is required" })}
        />
      </FormRow>
      <FormRow label="Mileage" error={errors?.mileage?.message}>
        <input
          className="py-2"
          type="number"
          id="mileage"
          {...register("mileage", { required: "Vehicle mileage is required" })}
        />
      </FormRow>
      <FormRow label="Price" error={errors?.regularPrice?.message}>
        <input
          className="py-2"
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "Vehicle price is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <textarea
          className="h-32"
          id="description"
          {...register("description", {
            required: "Vehicle description is required",
          })}
        ></textarea>
      </FormRow>
      <FormRow label="Status" error={errors?.isSold?.message}>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="false"
              {...register("isSold", { required: "Sold status is required" })}
              className="w-5 h-5 text-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            />
            <span className="text-gray-700 font-medium">Available</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="true"
              {...register("isSold", { required: "Sold status is required" })}
              className="w-5 h-5 text-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            />
            <span className="text-gray-700 font-medium">Sold</span>
          </label>
        </div>
      </FormRow>
      <FormRow label="Image" error="">
        <input
          className="block w-full text-xl file-name:text-xl rounded-md border-0 cursor-pointer
      
      file:mr-5 file:py-2 file:px-5 file:rounded-md file:border-0
      file:font-semibold file:text-xl
      file:bg-indigo-600 file:text-indigo-50
      file:hover:bg-indigo-700 file:cursor-pointer
      file:transition file:duration-200"
          id="image"
          accept="image/*"
          type="file"
          {...register("image", {
            required: isEditingVehicle ? false : "Vehicle image is required",
          })}
        />
      </FormRow>
      <div className="flex gap-3 justify-end">
        <Button
          onClick={() => onCloseModal?.()}
          disabled={isWorking}
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditingVehicle ? "Update vehicle" : "Create vehicle"}
        </Button>
      </div>
    </Form>
  );
}
