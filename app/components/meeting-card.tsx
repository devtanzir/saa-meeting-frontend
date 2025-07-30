'use client';

import React from 'react';

interface MeetingItems {
  _id?: string;
  meetingTopic: string;
  clientName: string;
  profileName: string;
  clientMeetingTime: string;
  myTime: string;
  quotation: string;
}

interface MeetingCardProps {
  meeting: MeetingItems;
  onEdit?: () => void;
  onDelete?: () => void;
}

const MeetingCard = ({ meeting, onEdit, onDelete }: MeetingCardProps) => {
  return (
    <div className="bg-white border rounded-xl shadow-md p-4 hover:shadow-lg transition-all space-y-2">
      <h3 className="text-lg font-semibold text-blue-700">{meeting.meetingTopic}</h3>

      <div className="text-sm text-gray-700">
        <p><span className="font-medium">Client:</span> {meeting.clientName}</p>
        <p><span className="font-medium">Profile:</span> {meeting.profileName}</p>
        <p><span className="font-medium">Client Time:</span> {new Date(meeting.clientMeetingTime).toLocaleString()}</p>
        <p><span className="font-medium">My Time:</span> {new Date(meeting.myTime).toLocaleString()}</p>
      </div>

      <div className="text-sm text-gray-600 italic">
        <p>“{meeting.quotation}”</p>
      </div>

      <div className="flex gap-2 mt-2">
        {onEdit && (
          <button
            onClick={onEdit}
            className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Edit
          </button>
        )}
        {onDelete && (
          <button
            onClick={onDelete}
            className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default MeetingCard;
