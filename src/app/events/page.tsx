// "use client";

import Sidebar from "../student-dash/components/Sidebar";

// import withAuth from "../hoc/withAuth";

const EventsPage = () => {
  return (
    <div className="flex h-screen bg-white">
          <Sidebar /> 
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">School Events</h1>
      <div className="grid gap-4">
        {/* Add your events content here */}
        <p>Events content coming soon...</p>
      </div>
    </div>
    </div>
  );
};

export default EventsPage;
// export default withAuth(EventsPage, ["STUDENT"]); 