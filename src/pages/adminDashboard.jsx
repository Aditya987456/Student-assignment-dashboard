import { AssignmentForm } from "../components/AssignmentForm";
import AdminAssignmentCard from "../components/AssignmentCardAdmin";

export default function AdminDashboard({ assignments, onAddAssignment }) {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* ✅ Assignment creation form */}
        <AssignmentForm onCreate={onAddAssignment} />

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          📚 All Assignments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
          {assignments.length > 0 ? (
            assignments.map((a) => (
              <AdminAssignmentCard key={a.id} assignment={a} />
            ))
          ) : (
            <p className="text-gray-500 text-center">
              No assignments yet. Create one above 👆
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
