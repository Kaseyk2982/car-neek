import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Applayout() {
  const [isOpen, setIsOpen] = useState(true);

  const layoutClasses = isOpen
    ? "flex flex-col h-screen md:grid md:grid-cols-[26rem_1fr] md:grid-rows-[auto_1fr]"
    : "flex flex-col h-screen md:grid md:grid-cols-[1fr] md:grid-rows-[auto_1fr]";

  const headerClasses = isOpen ? "md:col-start-2" : "md:col-start-1";
  const mainClasses = isOpen ? "md:col-start-2" : "md:col-start-1";
  return (
    <div className={layoutClasses}>
      <Header
        className={headerClasses}
        leftContent={
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-pressed={isOpen}
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            {isOpen ? "Hide menu" : "Show menu"}
          </button>
        }
      />
      {isOpen ? (
        <Sidebar className="md:row-start-1 md:row-span-2 md:col-start-1" />
      ) : null}

      <main
        className={`bg-gray-100 px-16 pt-16 pb-24 overflow-scroll flex-1 md:flex-none md:min-h-0 md:overflow-auto ${mainClasses}`}
      >
        <Outlet />
      </main>
    </div>
  );
}
