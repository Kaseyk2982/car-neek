import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <header className="bg-gray-50 py-5 px-16 border-b border-slate-100 border-solid flex gap-12 items-center justify-end">
      <UserAvatar />
      <HeaderMenu />
    </header>
  );
}
