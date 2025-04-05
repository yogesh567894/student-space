"use client";

import withAuth from "../hoc/withAuth";

const EnquiryPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Enquiry</h1>
      <div className="grid gap-4">
        {/* Add your enquiry form or content here */}
        <p>Enquiry content coming soon...</p>
      </div>
    </div>
  );
};

export default withAuth(EnquiryPage, ["STUDENT"]); 