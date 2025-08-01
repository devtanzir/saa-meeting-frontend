"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { timezones } from "../constants/timezones";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { profileName } from "../constants/profile-name";
import { FormDataInterface } from "../interface/formdata";
import { MeetingFormProps } from "../interface/meeting-props";


const MeetingForm = ({createMeeting}: MeetingFormProps) => {
  const formInitialData: FormDataInterface = {
    meetingTopic: "",
    clientName: "",
    profileName: "",
    clientMeetingTime: "",
    myTime: "",
    quotation: "",
    isPending: true,
    clientTimezone: "",
    notes: "",
    yourName: ""
  };
  const [formData, setFormData] = useState({ ...formInitialData });
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMeeting(formData);
    setFormData({ ...formInitialData });
  };

  return (
    <>
      <div className="xl:col-span-1">
        <Card className="sticky top-8 border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <Plus className="h-4 w-4 text-white" />
              </div>
              Schedule New Meeting
            </CardTitle>
            <CardDescription className="text-base">
              Fill in the details to create a new client meeting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="meetingTopic"
                  className="text-sm font-semibold text-gray-700"
                >
                  Meeting Topic *
                </Label>
                <Input
                  id="meetingTopic"
                  value={formData.meetingTopic}
                  onChange={(e) =>
                    handleInputChange("meetingTopic", e.target.value)
                  }
                  placeholder="e.g., Website Redesign Discussion"
                  className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="clientName"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Client Name *
                  </Label>
                  <Input
                    id="clientName"
                    value={formData.clientName}
                    onChange={(e) =>
                      handleInputChange("clientName", e.target.value)
                    }
                    placeholder="John Doe"
                    className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="yourName"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Your Name *
                  </Label>
                  <Input
                    id="yourName"
                    value={formData.yourName}
                    onChange={(e) =>
                      handleInputChange("yourName", e.target.value)
                    }
                    placeholder="Your Name"
                    className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="profileName"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Profile Name *
                  </Label>
                  <Select
                    value={formData.profileName}
                    onValueChange={(value) =>
                      handleInputChange("profileName", value)
                    }
                  >
                    <SelectTrigger className="h-12 w-full border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue placeholder="Select Fiverr Profile" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      {profileName.map((profile) => (
                        <SelectItem key={profile} value={profile}>
                          {profile}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="clientTimezone"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Client Timezone *
                  </Label>
                  <Select
                    value={formData.clientTimezone}
                    onValueChange={(value) =>
                      handleInputChange("clientTimezone", value)
                    }
                  >
                    <SelectTrigger className="h-12 w-full border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue placeholder="Select client's timezone" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      {timezones.map((timezone) => (
                        <SelectItem key={timezone} value={timezone}>
                          {timezone}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="clientMeetingTime"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Client Time *
                  </Label>
                  <Input
                    id="clientMeetingTime"
                    type="datetime-local"
                    value={formData.clientMeetingTime}
                    onChange={(e) =>
                      handleInputChange("clientMeetingTime", e.target.value)
                    }
                    className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="myTime"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Your Time *
                  </Label>
                  <Input
                    id="myTime"
                    type="datetime-local"
                    value={formData.myTime}
                    onChange={(e) =>
                      handleInputChange("myTime", e.target.value)
                    }
                    className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="quotation"
                  className="text-sm font-semibold text-gray-700"
                >
                  Quotation Link
                </Label>
                <Input
                  id="quotation"
                  value={formData.quotation}
                  onChange={(e) =>
                    handleInputChange("quotation", e.target.value)
                  }
                  placeholder="https://google.docs...."
                  className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                    <Label htmlFor="notes" className="text-sm font-semibold text-gray-700">
                      Meeting Notes
                    </Label>
                    <textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      placeholder="Add any important notes, requirements, or discussion points..."
                      className="w-full h-24 px-3 py-2 border-2 border-gray-200 focus:border-blue-500 transition-colors rounded-lg resize-none text-sm"
                      rows={3}
                    />
                  </div>

              <div className="space-y-3">
                <Label className="text-sm font-semibold text-gray-700">
                  Meeting Status
                </Label>
                <div className="flex gap-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      checked={formData.isPending}
                      onChange={() => handleInputChange("isPending", true)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Pending
                    </span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      checked={!formData.isPending}
                      onChange={() => handleInputChange("isPending", false)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Done
                    </span>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] cursor-pointer"
              >
                <Plus className="h-5 w-5 mr-2" />
                Schedule Meeting
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MeetingForm;
