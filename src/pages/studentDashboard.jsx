import AssignmentCard from "../components/AssignmentCard";
import { assignments } from "../AssignmentData";
import Navbar from "../components/Navbar";
import { BookOpen } from "lucide-react";

export default function StudentDashboard({ studentName, OnRoleGetsChanged }) {
  return (
    <div className="min-h-screen bg-gray-100 p-2">
     

      <Navbar title="Student Dashboard" OnRoleGetsChanged={OnRoleGetsChanged} />

      <div className="max-w-7xl mx-auto p-6 bg-slate-50">
        
        <div className="md:p-6 p-2">
            <h2 className="md:text-2xl text-xl font-bold text-gray-800 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-gray-600" />
              Assignments for
              <span className="text-indigo-600">{studentName}</span>
            </h2>
            <p className="text-gray-600  text-sm md:text-lg m-2">
              Check your all assignments below.
            </p>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          {assignments.map((a) => (
            <AssignmentCard
              key={a.id}
              assignment={a}
              studentName={studentName}
            />
          ))}
        </div>
      </div>

       <footer className="w-full mx-auto max-w-7xl mt-10 py-4 flex justify-center text-gray-500 text-sm ">
        © {new Date().getFullYear()} Student Dashboard — Track your assignments
      </footer>


    </div>
  );
}
