import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import Spinner from "../../ui/Spinner";

export default function Logout() {
  const { logout, isLoggingOut } = useLogout();
  return (
    <ButtonIcon onClick={() => logout()} disabled={isLoggingOut}>
      {!isLoggingOut ? (
        <HiArrowRightEndOnRectangle className="w-10 h-10 transition-transform hover:text-indigo-700 hover:scale-110" />
      ) : (
        <Spinner size="md" />
      )}
    </ButtonIcon>
  );
}
