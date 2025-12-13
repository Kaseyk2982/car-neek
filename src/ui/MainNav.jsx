import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi";
import NavItem from "./NavItem";
import { HiOutlineBanknotes, HiOutlineCog8Tooth } from "react-icons/hi2";

import { AiOutlineCar } from "react-icons/ai";

export default function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        <li>
          <NavItem to="/dashboard">
            <HiOutlineHome className="w-10 h-10 transition-transform group-hover:text-indigo-700 group-hover:scale-110" />
            <span>Home</span>
          </NavItem>
        </li>
        <li>
          <NavItem to="/sales">
            <HiOutlineBanknotes className="w-10 h-10 transition-transform group-hover:text-indigo-700 group-hover:scale-110" />
            <span>Sales</span>
          </NavItem>
        </li>
        <li>
          <NavItem to="/vehicles">
            <AiOutlineCar className="w-10 h-10 transition-transform group-hover:text-indigo-700 group-hover:scale-110" />
            <span>Vehicles</span>
          </NavItem>
        </li>

        <li>
          <NavItem to="/users">
            <HiOutlineUsers className="w-10 h-10 transition-transform group-hover:text-indigo-500 group-hover:scale-110" />
            <span>Users</span>
          </NavItem>
        </li>
      </ul>
    </nav>
  );
}
