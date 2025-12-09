import { HiOutlineUser } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";

export default function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <ul className="flex gap-2">
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser className="w-10 h-10 transition-transform hover:text-indigo-700 hover:scale-110" />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}
