import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

export default function Header({ className = "", leftContent = null }) {
  return (
    <header
      className={`bg-gray-50 py-5 px-16 border-b border-slate-100 border-solid flex items-center gap-6 ${className}`}
    >
      {leftContent ? <div className="flex items-center">{leftContent}</div> : null}
      <div className="flex items-center gap-12 ml-auto">
        <UserAvatar />
        <HeaderMenu />
      </div>
    </header>
  );
}
