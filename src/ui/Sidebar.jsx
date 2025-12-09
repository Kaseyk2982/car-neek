import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Sidebar() {
  return (
    <aside className="bg-gray-50 border-r border-solid border-slate-100 py-14 px-10 row-[1/-1] flex flex-col gap-12">
      <Logo />
      <MainNav />
    </aside>
  );
}
