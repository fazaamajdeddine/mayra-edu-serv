const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Mathematics Exam</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-20
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            The mid-term Mathematics Exam for all grades will be held on January 20th. Please ensure students are prepared and bring necessary materials.
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Parent-Teacher Conference</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-02-10
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Parents are invited to meet with teachers to discuss student progress. Please schedule your appointment with the school office.
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">School Holiday</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-03-15
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Reminder: The school will be closed for a holiday on March 15th. Classes will resume on March 16th.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
