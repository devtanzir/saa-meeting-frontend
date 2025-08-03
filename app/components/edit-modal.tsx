"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit, Save, X } from "lucide-react";
import { profileName } from "../constants/profile-name";
import { timezones } from "../constants/timezones";
import { Button } from "@/components/ui/button";
import { FormDataInterface } from "../interface/formdata";
import { Dispatch, FormEvent, SetStateAction } from "react";

interface EditModalProps {
  isEditModalOpen: boolean;
  setIsEditModalOpen: Dispatch<SetStateAction<boolean>>;
  handleEditSubmit: (e: FormEvent) => void;
  editFormData: FormDataInterface;
  handleEditInputChange: (
    inputName: string,
    inputValue: string | boolean
  ) => void;
}
const EditModal = ({
  isEditModalOpen,
  setIsEditModalOpen,
  handleEditSubmit,
  editFormData,
  handleEditInputChange,
}: EditModalProps) => {
  return (
    <>
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <Edit className="h-4 w-4 text-white" />
              </div>
              Edit Meeting
            </DialogTitle>
            <DialogDescription>
              Update the meeting details below and save your changes.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleEditSubmit} className="space-y-6 mt-6">
            <div className="space-y-2">
              <Label
                htmlFor="edit-meetingTopic"
                className="text-sm font-semibold text-gray-700"
              >
                Meeting Topic *
              </Label>
              <Input
                id="edit-meetingTopic"
                value={editFormData.meetingTopic}
                onChange={(e) =>
                  handleEditInputChange("meetingTopic", e.target.value)
                }
                placeholder="e.g., Website Redesign Discussion"
                className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="edit-clientName"
                  className="text-sm font-semibold text-gray-700"
                >
                  Client Name *
                </Label>
                <Input
                  id="edit-clientName"
                  value={editFormData.clientName}
                  onChange={(e) =>
                    handleEditInputChange("clientName", e.target.value)
                  }
                  placeholder="John Doe"
                  className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="edit-yourName"
                  className="text-sm font-semibold text-gray-700"
                >
                  Username *
                </Label>
                <Input
                  id="edit-yourName"
                  value={editFormData.yourName}
                  onChange={(e) =>
                  handleEditInputChange("yourName", e.target.value)
                  }
                  placeholder="Your Full Name"
                  className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="edit-profileName"
                  className="text-sm font-semibold text-gray-700"
                >
                  Profile Name *
                </Label>
                <Select
                  value={editFormData.profileName}
                  onValueChange={(value) =>
                    handleEditInputChange("profileName", value)
                  }
                >
                  <SelectTrigger className="h-12 w-full border-2 border-gray-200 focus:border-blue-500">
                    <SelectValue placeholder="Select your profile" />
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
                  htmlFor="edit-clientTimezone"
                  className="text-sm font-semibold text-gray-700"
                >
                  Client Timezone *
                </Label>
                <Select
                  value={editFormData.clientTimezone}
                  onValueChange={(value) =>
                    handleEditInputChange("clientTimezone", value)
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
                  htmlFor="edit-clientMeetingTime"
                  className="text-sm font-semibold text-gray-700"
                >
                  Client Time *
                </Label>
                <Input
                  id="edit-clientMeetingTime"
                  type="datetime-local"
                  value={editFormData.clientMeetingTime}
                  onChange={(e) =>
                    handleEditInputChange("clientMeetingTime", e.target.value)
                  }
                  className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="edit-myTime"
                  className="text-sm font-semibold text-gray-700"
                >
                  Your Time *
                </Label>
                <Input
                  id="edit-myTime"
                  type="datetime-local"
                  value={editFormData.myTime}
                  onChange={(e) =>
                    handleEditInputChange("myTime", e.target.value)
                  }
                  className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="edit-quotation"
                className="text-sm font-semibold text-gray-700"
              >
                Quotation Amount *
              </Label>
              <Input
                id="edit-quotation"
                value={editFormData.quotation}
                onChange={(e) =>
                  handleEditInputChange("quotation", e.target.value)
                }
                placeholder="$5,000"
                className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="edit-notes"
                className="text-sm font-semibold text-gray-700"
              >
                Meeting Notes
              </Label>
              <textarea
                id="edit-notes"
                value={editFormData.notes}
                onChange={(e) => handleEditInputChange("notes", e.target.value)}
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
                    name="edit-status"
                    checked={editFormData.isPending}
                    onChange={() => handleEditInputChange("isPending", true)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Pending
                  </span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="edit-status"
                    checked={!editFormData.isPending}
                    onChange={() => handleEditInputChange("isPending", false)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Confirmed
                  </span>
                </label>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1 cursor-pointer h-12 border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors bg-transparent"
                onClick={() => setIsEditModalOpen(false)}
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 cursor-pointer h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold transition-all duration-200"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditModal;
