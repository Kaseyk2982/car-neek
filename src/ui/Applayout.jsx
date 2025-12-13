import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Applayout() {
  return (
    <div className="flex flex-col h-screen md:grid md:grid-cols-[26rem_1fr] md:grid-rows-[auto_1fr]">
      <Header className="md:col-start-2" />
      <Sidebar className="py-14 px-10 flex flex-col gap-12 md:row-start-1 md:row-span-2 md:col-start-1" />
      <main className="bg-gray-100 px-16 pt-16 pb-24 overflow-scroll flex-1 md:flex-none md:min-h-0 md:overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
