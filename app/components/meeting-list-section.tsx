"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "@radix-ui/react-select";
import {
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Edit,
  Filter,
  Globe,
  MessageSquare,
  Search,
  ShieldUser,
  Trash2,
  User,
  XCircle,
} from "lucide-react";
import React, { useState } from "react";
import { GetMeeting } from "../interface/get-meeting";

interface MeetingListSectionProps {
  meetings: GetMeeting[] | null;
  deleteMeeting: (value: string) => void;
}
const MeetingListSection = ({
  meetings,
  deleteMeeting,
}: MeetingListSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredMeetings = meetings?.filter((meeting: GetMeeting) => {
    const matchesSearch =
      meeting.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meeting.meetingTopic.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "pending" && meeting.isPending) ||
      (statusFilter === "done" && !meeting.isPending);
    return matchesSearch && matchesStatus;
  });

  const formatDateTime = (dateTime: string) => {
    return new Date(dateTime).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  return (
    <>
      <div className="xl:col-span-2 space-y-8">
        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-0 shadow-lg">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search meetings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-11 border-2 border-gray-200 focus:border-blue-500"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40 h-11 border-2 border-gray-200 focus:border-blue-500">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-semibold"
          >
            {filteredMeetings?.length} Meeting
            {filteredMeetings?.length !== 1 ? "s" : ""}
          </Badge>
        </div>

        {/* Meetings Grid */}
        {filteredMeetings?.length === 0 ? (
          <Card className="text-center py-16 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent>
              <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No Meetings Found
              </h3>
              <p className="text-gray-600 text-lg">
                {searchTerm || statusFilter !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "Schedule your first meeting using the form"}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredMeetings?.reverse().map((meeting: GetMeeting) => (
              <Card
                key={meeting._id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:scale-[1.02]"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                        {meeting.meetingTopic}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-gray-600">
                        <User className="h-4 w-4" />
                        <span className="font-medium">
                          {meeting.clientName}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <ShieldUser className="h-4 w-4" />
                        <span className="font-light">
                          {meeting.profileName}
                        </span>
                      </div>
                    </div>
                    <Badge
                      className={`px-3 py-1 font-semibold ${
                        meeting.isPending
                          ? "bg-amber-100 text-amber-800 hover:bg-amber-200"
                          : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                      }`}
                    >
                      {meeting.isPending ? (
                        <>
                          <XCircle className="h-3 w-3 mr-1" />
                          Pending
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Done
                        </>
                      )}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-blue-900">
                          Client Time
                        </p>
                        <p className="text-sm text-blue-700">
                          {formatDateTime(meeting.clientMeetingTime)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl">
                      <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-indigo-900">
                          Your Time
                        </p>
                        <p className="text-sm text-indigo-700">
                          {formatDateTime(meeting.myTime)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <DollarSign className="h-4 w-4 text-white" />
                      </div>
                      <div className="break-words overflow-hidden w-full">
                        <p className="text-sm font-semibold text-green-900">
                          Quotation
                        </p>
                        <p className="text-sm text-green-700 break-words overflow-hidden">
                          {meeting.quotation
                            ? meeting.quotation
                            : "Quotation is not added"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <Globe className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-purple-900">
                          Timezone
                        </p>
                        <p className="text-sm text-purple-700">
                          {meeting.clientTimezone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-100 rounded-xl">
                      <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 mb-1">
                          Notes
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
                          {meeting.notes
                            ? meeting.notes
                            : "There is nothing to show"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Briefcase className="h-3 w-3" />
                    <span>Handled by {meeting.yourName}</span>
                    <span>•</span>
                    <span>
                      Created{" "}
                      {new Date(meeting.createdAt!).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="pt-4">
                  <div className="flex gap-3 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors bg-transparent cursor-pointer"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-2 border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition-colors bg-transparent cursor-pointer"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="cursor-pointer transition-all duration-300 hover:scale-105">
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction
                            className="cursor-pointer transition-all duration-300 hover:scale-105"
                            onClick={() => deleteMeeting(meeting._id!)}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MeetingListSection;
