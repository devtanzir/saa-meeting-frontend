import { Calendar } from "lucide-react";

const MeetingHeader = () => {
  return (
    <>
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
          <Calendar className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
          Scaleup Meeting Scheduler
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Streamline your client meetings with intelligent scheduling and
          timezone management
        </p>
      </div>
    </>
  );
};

export default MeetingHeader;
