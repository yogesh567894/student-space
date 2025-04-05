"use client";

import withAuth from "../hoc/withAuth";

const ExamSchedulePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Exam Schedule</h1>
      <div className="grid gap-4">
        {/* Add your exam schedule content here */}
        <p>Exam schedule content coming soon...</p>
      </div>
    </div>
  );
};

export default withAuth(ExamSchedulePage, ["STUDENT"]); 