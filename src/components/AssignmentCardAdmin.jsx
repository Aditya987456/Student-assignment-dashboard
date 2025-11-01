import React from "react";
import { FileText, CheckCircle, XCircle, Calendar, Users } from "lucide-react";

export default function AdminAssignmentCard({ assignment }) {
  const submittedCount = Object.values(assignment.submitted_Students).filter(
    (s) => s
  ).length;
  const totalStudents = Object.keys(assignment.submitted_Students).length;
  const progress = Math.round((submittedCount / totalStudents) * 100);

  return (
    <div className="w-full max-w-lg bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      {/* ---- Header ---- */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-800">
            {assignment.title}
          </h2>
        </div>
        <span className="text-sm text-gray-500 flex items-center gap-1">
          <Calendar className="w-4 h-4 text-gray-400" />
          {assignment.dueDate}
        </span>
      </div>

      {/* ---- Description ---- */}
      <p className="text-gray-600 mb-4">{assignment.description}</p>

      {/* ---- Progress Bar ---- */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>
            {submittedCount}/{totalStudents} Students Submitted
          </span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-2 bg-green-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* ---- Student Submission Status ---- */}
      <div className="border-t pt-3">
        <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
          <Users className="w-4 h-4 text-indigo-600" /> Submission Status
        </h3>
        <ul className="space-y-1">
          {Object.entries(assignment.submitted_Students).map(
            ([student, submitted]) => (
              <li
                key={student}
                className="flex items-center justify-between text-sm bg-gray-50 px-3 py-1 rounded-md"
              >
                <span className="font-medium text-gray-700">{student}</span>
                {submitted ? (
                  <span className="flex items-center gap-1 text-green-600 font-medium">
                    <CheckCircle className="w-4 h-4" /> Submitted
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-red-600 font-medium">
                    <XCircle className="w-4 h-4" /> Pending
                  </span>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
