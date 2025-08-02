import MeetingHeader from "./meeting-header";
import MeetingForm from "./meeting-form";
import MeetingListSection from "./meeting-list-section";
import useApp from "../hooks/useApp";

const MeetingScheduler = () => {
  const {
    createMeeting,
    deleteMeeting,
    state: meetings,
    updateMeeting,
  } = useApp();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-[1920px] mx-auto px-8 py-12">
        {/* Header Section */}
        <MeetingHeader />
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Form Section */}
          <MeetingForm createMeeting={createMeeting} />
          {/* Meetings List Section */}
          <MeetingListSection
            meetings={meetings}
            deleteMeeting={deleteMeeting}
            updateMeeting={updateMeeting}
          />
        </div>
      </div>
    </div>
  );
};
export default MeetingScheduler;
