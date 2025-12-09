import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Applayout() {
  return (
    <div className="grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      <Sidebar />

      <main className="bg-gray-100 px-16 pt-16 pb-24 min-h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
}
