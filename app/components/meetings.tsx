"use client";
import useApp from "../hooks/useApp";
import MeetingForm from "./form";
import MeetingCard from "./meeting-card";

const Meetings = () => {
  const { createMeeting, deleteMeeting, state: meetings } = useApp();

  return (
    <div>
      <MeetingForm createMeeting={createMeeting} />
      {meetings?.map((item) => (
        <MeetingCard
          key={item._id}
          meeting={item}
          onDelete={() => deleteMeeting(item._id!)}
          onEdit={() => console.log("Delete", item._id)}
        />
      ))}
    </div>
  );
};

export default Meetings;
