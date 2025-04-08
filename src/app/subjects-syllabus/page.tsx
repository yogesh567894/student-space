// "use client";

import Sidebar from "../student-dash/components/Sidebar";

// import withAuth from "../hoc/withAuth";

const SubjectsSyllabusPage = () => {
  return (
    <div className="flex h-screen bg-white">
          <Sidebar /> 
    <div className="flex-1 overflow-y-auto p-6">
        {/* Header */}
        <div className="mb-6">
          {/* Add padding to the page title */}
          <h1 className="text-2xl font-bold mb-4 lg:pl-0 pl-12">Subjects and Syllabus</h1>
        </div>

        {/* Content */}
        <div className="grid gap-4">
          {/* Add your events content here */}
          <p>Subjects and syllabus content coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default SubjectsSyllabusPage;
// export default withAuth(SubjectsSyllabusPage, ["STUDENT"]); 
