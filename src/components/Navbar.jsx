import { SelectNewRole } from "./SelectRoleDropdown";

export default function Navbar({ title, OnRoleGetsChanged }) {
  return (
    <nav className="max-w-7xl rounded-t-2xl mx-auto flex items-center justify-between bg-white shadow px-6 py-3 sticky top-0 z-50">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      <SelectNewRole OnRoleGetsChanged={OnRoleGetsChanged} />
    </nav>
  );
}
