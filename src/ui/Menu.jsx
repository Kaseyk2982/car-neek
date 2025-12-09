import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

const MenuContext = createContext();

export default function Menu({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const open = setOpenId;
  const close = () => setOpenId("");
  return (
    <MenuContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenuContext);

  function handleClick(e) {
    e.stopPropagation();
    if (openId === id) {
      close();
    } else {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();

      setPosition({
        x: window.innerWidth - rect.width - rect.x + 20,
        y: rect.y + rect.height - 6,
      });
      open(id);
    }
  }

  return (
    <button
      className="bg-none border-0 p-2 rounded-sm translate-x-10 transition-all hover:bg-gray-100"
      onClick={handleClick}
    >
      <HiEllipsisVertical className="w-10 h-10 text-gray-700" />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenuContext);
  if (openId !== id) return null;
  const ref = useOutsideClick(close, false);

  return createPortal(
    <ul
      className="fixed bg-gray-50 shadow-md rounded-md"
      position={position}
      style={{
        right: `${position.x}px`,
        top: `${position.y}px`,
      }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenuContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <button
      className="w-full text-left bg-none border-0 py-5 px-10 text-2xl transition-all flex items-center gap-6 hover:bg-gray-100"
      onClick={handleClick}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

Menu.Menu = Menu;
Menu.Toggle = Toggle;
Menu.List = List;
Menu.Button = Button;
