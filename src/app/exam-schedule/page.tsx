// "use client";
// import withAuth from "../hoc/withAuth";

import Sidebar from "../student-dash/components/Sidebar";


const ExamSchedulePage = () => {
  return (
    <div className="flex h-screen bg-white">
          <Sidebar /> 
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Exam Schedule</h1>
      <div className="grid gap-4">
        {/* Add your exam schedule content here */}
        <p>Exam schedule content coming soon...</p>
      </div>
    </div>
  </div>
  );
};

export default ExamSchedulePage;
// export default withAuth(ExamSchedulePage, ["STUDENT"]); 