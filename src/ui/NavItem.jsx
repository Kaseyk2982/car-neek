import { NavLink } from "react-router-dom";

export default function NavItem({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group flex items-center gap-4 ${
          isActive
            ? "bg-gray-100 rounded-lg text-gray-800 font-semibold py-5 px-10"
            : "text-gray-600 text-2xl font-semibold py-5 px-10  hover:text-gray-800 hover:bg-gray-100 hover:rounded-lg"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
