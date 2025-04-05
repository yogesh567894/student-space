"use client";

import withAuth from "../hoc/withAuth";

const SubjectsSyllabusPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Subjects and Syllabus</h1>
      <div className="grid gap-4">
        {/* Add your subjects and syllabus content here */}
        <p>Subjects and syllabus content coming soon...</p>
      </div>
    </div>
  );
};

export default withAuth(SubjectsSyllabusPage, ["STUDENT"]); 