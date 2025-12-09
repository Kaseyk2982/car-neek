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
        {/* <li>
          <NavItem to="/settings">
            <HiOutlineCog8Tooth className="w-10 h-10 transition-transform group-hover:text-indigo-500 group-hover:scale-110" />
            <span>Settings</span>
          </NavItem>
        </li> */}
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
// transition-transform group-hover:text-blue-500 group-hover:scale-110"

//   &:hover,
//   &:active,
//   &.active:link,
//   &.active:visited {
//     color: var(--color-grey-800);
//     background-color: var(--color-grey-50);
//     border-radius: var(--border-radius-sm);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     color: var(--color-grey-400);
//     transition: all 0.3s;
//   }

//   &:hover svg,
//   &:active svg,
//   &.active:link svg,
//   &.active:visited svg {
//     color: var(--color-brand-600);
