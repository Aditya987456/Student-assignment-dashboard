

export default function AssignmentCard({ assignment, studentName }) {
  const isSubmitted = assignment.submitted_Students[studentName];

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
      <h2 className="text-lg font-semibold text-gray-800">{assignment.title}</h2>
      <p className="text-sm text-gray-500 mb-2">Due: {assignment.dueDate}</p>

      <p className="text-sm">
        Status:{" "}
        <span
          className={`font-medium ${
            isSubmitted ? "text-green-600" : "text-red-600"
          }`}
        >
          {isSubmitted ? "Submitted ✅" : "Pending ❌"}
        </span>
      </p>

      {assignment.driveLink && (
        <a
          href={assignment.driveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm mt-2 inline-block"
        >
          View Assignment
        </a>
      )}
    </div>
  );
}

