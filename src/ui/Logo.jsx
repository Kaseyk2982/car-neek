import logo from "../assets/logo.jpg";

export default function Logo() {
  return (
    <div className="text-center flex justify-center">
      <img className="w-48 h-48 rounded-md" src={logo} alt="logo" />
    </div>
  );
}
