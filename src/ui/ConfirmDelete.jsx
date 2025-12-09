import Button from "./Button";
import Heading from "./Heading";

export default function ConfirmDelete({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
}) {
  return (
    <div className="w-[40rem] flex flex-col gap-4">
      <Heading as="h3">Delete {resourceName}</Heading>
      <p className="text-gray-500 mb-4">
        Are you sure you want to delete this {resourceName}? This action cannot
        be undone.
      </p>
      <div className="flex justify-end gap-4">
        <Button
          onClick={onCloseModal}
          disabled={disabled}
          variation="secondary"
        >
          Cancel
        </Button>
        <Button onClick={onConfirm} disabled={disabled} variation="danger">
          Delete
        </Button>
      </div>
    </div>
  );
}
