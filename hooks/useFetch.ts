"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { createId } from "@/lib/utils";
import { GetMeeting } from "@/app/interface/get-meeting";
import { toast } from "sonner";

const useFetch = () => {
  const [state, setState] = useState<GetMeeting[] | null>(null);
  const [needLoad, setNeedLoad] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const API_PREFIX = process.env.NEXT_PUBLIC_API_PREFIX;
    // Using IIFE
    (async () => {
      try {
        // Fetch data from the backend
        const response = await axios.get<GetMeeting[]>(`${API_PREFIX}/meetings`);
        setState(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("An error occurred while fetching data!");
      }
    })();
  }, [needLoad]);

  const getData = () => {
    // when data add , edit , delete update rerender the component
    setNeedLoad((prev) => !prev);
  };

  const create = (values: GetMeeting) => {
    values._id = createId();
    setState((prev) => (prev ? [...prev, values] : [values]));
  };

  const update = (meetingId:string, values: GetMeeting[]) => {
    if (state) {
          const updateState = state.map((item: GetMeeting) => {
      if (item._id == meetingId) {
        return {
          ...item,
          ...values,
        };
      }
      return item;
    });
    setState(updateState);
    }

  };

  const deleteOne = (id: string) => {
    if (state) {
       const data = state.filter((item) => item._id !== id);
    setState(data);
    }

  };

  return {
    state,
    getData,
    loading,
    create,
    update,
    deleteOne,
  };
};

export default useFetch;
