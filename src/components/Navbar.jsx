import { SelectNewRole } from "./SelectRoleDropdown";
import { GraduationCap } from "lucide-react";

export default function Navbar({ title, OnRoleGetsChanged }) {
  return (

    // navbar with gradient color --
    <nav className="border max-w-7xl mx-auto w-full rounded-t-2xl sticky top-0 z-50 
      flex items-center justify-between px-6 py-4 
      bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 
      shadow-sm border-b border-gray-200 backdrop-blur-md bg-opacity-90 
      transition-all duration-300">

      <div className="flex items-center gap-3">
        <div className="p-2 bg-indigo-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <GraduationCap className="w-5 h-5" />
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-tight">
          {title}
        </h1>
      </div>

      
      <div className="flex items-center gap-3">
        <SelectNewRole OnRoleGetsChanged={OnRoleGetsChanged} />
      </div>
    </nav>
  );
}
