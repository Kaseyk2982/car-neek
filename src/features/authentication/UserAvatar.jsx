import { useUser } from "./useUser";

export default function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <div className="flex gap-5 items-center font-semibold text-xl">
      <img
        src={avatar || "default-user.jpg"}
        alt={fullName}
        className="block w-14 aspect-square object-cover object-center rounded-full"
      />
      <span>{fullName}</span>
    </div>
  );
}
