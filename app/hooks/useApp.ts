"use client";
import useFetch from "@/hooks/useFetch";
import axios from "axios";
import { FormDataInterface } from "../interface/formdata";
import { toast } from "sonner";

const useApp = () => {
  const { state, getData, loading, create, update, deleteOne } = useFetch();

  const API_PREFIX = process.env.NEXT_PUBLIC_API_PREFIX;

  /**
   * Create list of dynamic meetings
   * @param {Object} values
   */
  const createMeeting = async (values: FormDataInterface) => {
    try {
      create(values);
      // Send the data to the API using Axios
      const response = await axios.post(
        `${API_PREFIX}/meetings/meeting-create`,
        values
      );

      // Handle the response
      if (response.status === 201) {
        toast.success("Meeting Created successfully!");

        getData();
      } else {
        toast.error("Failed to create the Meeting!");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("An error occurred while submitting the form!");
    }
  };
  /**
   * Update the dynamic meeting
   * @param {Object} updateData
   */
  const updateMeeting = async (
    updateData: FormDataInterface[],
    meetingId: string
  ) => {
    try {
      update(meetingId, updateData);
      // Send the data to the API using Axios
      const response = await axios.patch(
        `${API_PREFIX}/meetings/${meetingId}`,
        updateData
      );

      // Handle the response
      if (response.status === 200) {
        toast.success("Meeting Updated successfully!");
        getData();
      } else {
        toast.error("Failed to update the meeting!");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("An error occurred while submitting the form!");
    }
  };
  /**
   * delete dynamic clock
   * @param {String} id
   */
  const deleteMeeting = async (id: string) => {
    try {
      deleteOne(id);
      // Send the data to the API using Axios
      const response = await axios.delete(`${API_PREFIX}/meetings/${id}`);

      // Handle the response
      if (response.status === 203) {
        toast.success("Meeting Is Deleted!");
        getData();
      } else {
        toast.error("Failed to delete the Meeting!");
      }
    } catch (error) {
      console.error("Error delete the meeting:", error);
      toast.error("An error occurred while deleting the meeting!");
    }
  };

  return {
    state,
    loading,
    createMeeting,
    updateMeeting,
    deleteMeeting,
  };
};

export default useApp;
