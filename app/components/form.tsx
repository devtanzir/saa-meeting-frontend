'use client';
import { useState } from 'react';

interface MeetingItems {
  meetingTopic: string;
  clientName: string;
  profileName: string;
  clientMeetingTime: string;
  myTime: string;
  quotation: string;
}

interface MeetingFormProps {
  createMeeting: (data: MeetingItems) => void;
  initialData?: MeetingItems; // optional, for edit mode
}

const MeetingForm = ({ createMeeting, initialData }: MeetingFormProps) => {
  const [formData, setFormData] = useState<MeetingItems>(
    initialData || {
      meetingTopic: '',
      clientName: '',
      profileName: '',
      clientMeetingTime: '',
      myTime: '',
      quotation: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMeeting(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 border rounded shadow">
      <div>
        <label htmlFor="meetingTopic">Meeting Topic</label>
        <input
          type="text"
          name="meetingTopic"
          id="meetingTopic"
          value={formData.meetingTopic}
          onChange={handleChange}
          required
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div>
        <label htmlFor="clientName">Client Name</label>
        <input
          type="text"
          name="clientName"
          id="clientName"
          value={formData.clientName}
          onChange={handleChange}
          required
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div>
        <label htmlFor="profileName">Profile Name</label>
        <input
          type="text"
          name="profileName"
          id="profileName"
          value={formData.profileName}
          onChange={handleChange}
          required
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div>
        <label htmlFor="clientMeetingTime">Client Meeting Time</label>
        <input
          type="datetime-local"
          name="clientMeetingTime"
          id="clientMeetingTime"
          value={formData.clientMeetingTime}
          onChange={handleChange}
          required
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div>
        <label htmlFor="myTime">My Time</label>
        <input
          type="datetime-local"
          name="myTime"
          id="myTime"
          value={formData.myTime}
          onChange={handleChange}
          required
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div>
        <label htmlFor="quotation">Quotation</label>
        <textarea
          name="quotation"
          id="quotation"
          value={formData.quotation}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default MeetingForm;
