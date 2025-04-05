"use client";

import withAuth from "../hoc/withAuth";

const EventsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">School Events</h1>
      <div className="grid gap-4">
        {/* Add your events content here */}
        <p>Events content coming soon...</p>
      </div>
    </div>
  );
};

export default withAuth(EventsPage, ["STUDENT"]); 