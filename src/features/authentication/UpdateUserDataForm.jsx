import { useState } from "react";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useUser } from "./useUser";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useUpdateUser } from "./useUpdateUser";

export default function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  const { updateUser, isUpdating } = useUpdateUser();

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;

    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email Address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full Name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Avatar Image">
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
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>
      <div className="flex gap-4 justify-end">
        <Button
          variation="secondary"
          type="reset"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update user info</Button>
      </div>
    </Form>
  );
}
