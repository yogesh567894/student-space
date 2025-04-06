// import withAuth from "../hoc/withAuth";

import Sidebar from "../student-dash/components/Sidebar";

const EnquiryPage = () => {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar /> 
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Enquiry</h1>
      <div className="grid gap-4">
        {/* Add your enquiry form or content here */}
        <p>Enquiry content coming soon...</p>
      </div>
    </div>
    </div>
  );
};

export default EnquiryPage;
// export default withAuth(EnquiryPage, ["STUDENT"]); 