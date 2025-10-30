import AssignmentCard from "../components/AssignmentCard";
import { assignments } from "../AssignmentData";
import Navbar from "../components/Navbar";

export default function StudentDashboard({ studentName, OnRoleGetsChanged }) {
  return (
    <div className="min-h-screen bg-gray-100 p-2">
     

      <Navbar title="🎓 Student Dashboard" OnRoleGetsChanged={OnRoleGetsChanged} />

      <div className="max-w-7xl mx-auto p-6 bg-slate-50">
        <h2 className="text-lg font-semibold mb-4">
          Assignments for <span className="text-blue-600">{studentName}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {assignments.map((a) => (
            <AssignmentCard
              key={a.id}
              assignment={a}
              studentName={studentName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
