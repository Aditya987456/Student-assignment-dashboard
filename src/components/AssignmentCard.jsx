
import {
  Calendar,
  Clock,
  FileText,
  CheckCircle,
  XCircle,
  UploadCloud,
  Upload
} from "lucide-react";

export default function AssignmentCard({ assignment, studentName, handleSubmit }) {
  const isSubmitted = assignment.submitted_Students[studentName];



   const driveLink =
    assignment.driveLink || "https://docs.google.com/forms/d/e/1FAIpQLSdTpvQkiyg1qkE9nXudtZELdTW8023fGrTsnsyoH7j7IOSFMA/viewform?usp=header";

  // when click on submit
  const handleSubmissionClick = () => {
    if (isSubmitted) return;

    const confirmSubmit = window.confirm(
      "✅ Have you completed this assignment and uploaded it to Drive?"
    );

    if (confirmSubmit) {
      handleSubmit(assignment.id, studentName);
      alert("🎉 Assignment marked as submitted successfully!");
    }
  };





  return (
    <div className="relative border border-gray-200 bg-gradient-to-br from-white to-gray-50 rounded-lg px-6 py-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full max-w-lg flex flex-col items-center text-center">
      
      {/* ---- status badge ---- */}
      <div
        className={`absolute top-1 right-1 md:top-3 md:right-4 px-1 py-0 md:px-3 md:py-1.5 text-xs font-semibold rounded-full flex items-center gap-1 transition-all ${
          isSubmitted
            ? "bg-green-100 text-green-700 border border-green-300"
            : "bg-red-100 text-red-700 border border-red-300"
        }`}
      >
        {isSubmitted ? (
          <>
            <CheckCircle className="md:w-3.5 md:h-3.5 w-2.5 h-2.5 " />
            Submitted
          </>
        ) : (
          <>
            <Clock className="md:w-3.5 md:h-3.5 w-2.5 h-2.5" />
            Pending
          </>
        )}
      </div>

      {/* ---- title ---- */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2 w-full flex justify-center items-center gap-2">
        <FileText className="w-5 h-5 text-blue-600" />
        {assignment.title}
      </h2>

      {/* ---- description ---- */}
      <p className="text-gray-600 text-md mb-5 leading-relaxed">
        {assignment.description || "No description provided."}
      </p>

      {/* ---- due date ---- */}
      <p className="text-gray-700 text-sm mb-6">
        <span className="font-medium text-gray-600">Due Date:</span>{" "}
        <span className="text-blue-600 font-semibold">{assignment.dueDate}</span>
      </p>

      {/* ---- buttons ---- */}
      <div className="flex flex-row gap-3 w-full justify-center">
        <a
          href={driveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-md text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 hover:border-blue-400 transition"
        >
          <Upload className="w-4 h-4" />
          Upload to Drive
        </a>

        <button
        onClick={handleSubmissionClick}
          className={`flex-1 flex items-center justify-center gap-1 md:gap-2 py-2.5 rounded-md text-sm font-medium transition border ${
            isSubmitted
              ? "bg-green-600 text-white border-green-600 cursor-not-allowed"
              : "bg-green-50 text-green-700 border-green-300 hover:bg-green-100"
          }`}
          disabled={isSubmitted}
        >
          <CheckCircle className="w-4 h-4" />
          I have submitted
        </button>
      </div>
    </div>
  );
}

