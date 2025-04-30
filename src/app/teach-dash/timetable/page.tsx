"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, User } from "lucide-react";
import Sidebar from "@/app/teach-dash/components/Sidebar";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";

interface ClassSession {
  subject: string;
  classType: string;
  timeSlot: string;
  teacher: string;
  isBreak?: boolean;
  room?: string;
}

const TimetablePage = () => {
  const [activeDay, setActiveDay] = useState<string>("Monday");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const timetableData: Record<string, ClassSession[]> = {
    "Monday": [
      { subject: "Mathematics", classType: "Theory Class", timeSlot: "7:30 - 8:10", teacher: "Mrs. Divya V." },
      { subject: "Economics", classType: "Theory Class", timeSlot: "8:15 - 8:50", teacher: "Mrs. Divya V." },
      { subject: "Business Studies", classType: "Theory Class", timeSlot: "8:55 - 9:30", teacher: "Mrs. Divya V." },
      { subject: "Short Break", classType: "", timeSlot: "9:30 - 9:40", teacher: "", isBreak: true },
      { subject: "Computer Science", classType: "Lab Class", timeSlot: "9:45 - 10:20", teacher: "Mr. Yogeshwaran V" },
      { subject: "Computer Science", classType: "Lab Class", timeSlot: "10:25 - 11:05", teacher: "Mr. Yogeshwaran V" },
      { subject: "English", classType: "Theory Classes", timeSlot: "11:10 - 11:40", teacher: "Mrs. Divya V." },
      { subject: "Lunch Break", classType: "", timeSlot: "11:40 - 12:10", teacher: "", isBreak: true },
      { subject: "Physical Education", classType: "Phy activity", timeSlot: "12:15 - 12:50", teacher: "Mrs. Divya V." },
      { subject: "Physical Education", classType: "Phy activity", timeSlot: "12:55 - 1:25", teacher: "Mrs. Divya V." },
      { subject: "Accountancy", classType: "Theory Class", timeSlot: "1:30 - 2:10", teacher: "Mrs. Divya V." },
    ],
    "Tuesday": [
      { subject: "English", classType: "Theory Classes", timeSlot: "7:30 - 8:10", teacher: "Mrs. Divya V." },
      { subject: "Mathematics", classType: "Theory Class", timeSlot: "8:15 - 8:50", teacher: "Mrs. Divya V." },
      { subject: "Accountancy", classType: "Theory Class", timeSlot: "8:55 - 9:30", teacher: "Mrs. Divya V." },
      { subject: "Short Break", classType: "", timeSlot: "9:30 - 9:40", teacher: "", isBreak: true },
      { subject: "Business Studies", classType: "Theory Class", timeSlot: "9:45 - 10:20", teacher: "Mrs. Divya V." },
      { subject: "Computer Science", classType: "Lab Class", timeSlot: "10:25 - 11:05", teacher: "Mr. Yogeshwaran V" },
      { subject: "Economics", classType: "Theory Class", timeSlot: "11:10 - 11:40", teacher: "Mrs. Divya V." },
      { subject: "Lunch Break", classType: "", timeSlot: "11:40 - 12:10", teacher: "", isBreak: true },
      { subject: "Physical Education", classType: "Phy activity", timeSlot: "12:15 - 12:50", teacher: "Mrs. Divya V." },
      { subject: "Mathematics", classType: "Theory Class", timeSlot: "12:55 - 1:25", teacher: "Mrs. Divya V." },
      { subject: "Business Studies", classType: "Theory Class", timeSlot: "1:30 - 2:10", teacher: "Mrs. Divya V." },
    ],
    "Wednesday": [
      { subject: "Economics", classType: "Theory Class", timeSlot: "7:30 - 8:10", teacher: "Mrs. Divya V." },
      { subject: "Business Studies", classType: "Theory Class", timeSlot: "8:15 - 8:50", teacher: "Mrs. Divya V." },
      { subject: "Mathematics", classType: "Theory Class", timeSlot: "8:55 - 9:30", teacher: "Mrs. Divya V." },
      { subject: "Short Break", classType: "", timeSlot: "9:30 - 9:40", teacher: "", isBreak: true },
      { subject: "English", classType: "Theory Classes", timeSlot: "9:45 - 10:20", teacher: "Mrs. Divya V." },
      { subject: "Computer Science", classType: "Lab Class", timeSlot: "10:25 - 11:05", teacher: "Mr. Yogeshwaran V" },
      { subject: "Accountancy", classType: "Theory Class", timeSlot: "11:10 - 11:40", teacher: "Mrs. Divya V." },
      { subject: "Lunch Break", classType: "", timeSlot: "11:40 - 12:10", teacher: "", isBreak: true },
      { subject: "Physical Education", classType: "Phy activity", timeSlot: "12:15 - 12:50", teacher: "Mrs. Divya V." },
      { subject: "Mathematics", classType: "Theory Class", timeSlot: "12:55 - 1:25", teacher: "Mrs. Divya V." },
      { subject: "English", classType: "Theory Classes", timeSlot: "1:30 - 2:10", teacher: "Mrs. Divya V." },
    ],
    "Thursday": [
      { subject: "Business Studies", classType: "Theory Class", timeSlot: "7:30 - 8:10", teacher: "Mrs. Divya V." },
      { subject: "Accountancy", classType: "Theory Class", timeSlot: "8:15 - 8:50", teacher: "Mrs. Divya V." },
      { subject: "Computer Science", classType: "Lab Class", timeSlot: "8:55 - 9:30", teacher: "Mr. Yogeshwaran V" },
      { subject: "Short Break", classType: "", timeSlot: "9:30 - 9:40", teacher: "", isBreak: true },
      { subject: "Mathematics", classType: "Theory Class", timeSlot: "9:45 - 10:20", teacher: "Mrs. Divya V." },
      { subject: "English", classType: "Theory Classes", timeSlot: "10:25 - 11:05", teacher: "Mrs. Divya V." },
      { subject: "Economics", classType: "Theory Class", timeSlot: "11:10 - 11:40", teacher: "Mrs. Divya V." },
      { subject: "Lunch Break", classType: "", timeSlot: "11:40 - 12:10", teacher: "", isBreak: true },
      { subject: "Physical Education", classType: "Phy activity", timeSlot: "12:15 - 12:50", teacher: "Mrs. Divya V." },
      { subject: "Business Studies", classType: "Theory Class", timeSlot: "12:55 - 1:25", teacher: "Mrs. Divya V." },
      { subject: "Mathematics", classType: "Theory Class", timeSlot: "1:30 - 2:10", teacher: "Mrs. Divya V." },
    ],
    "Friday": [
      { subject: "Accountancy", classType: "Theory Class", timeSlot: "7:30 - 8:10", teacher: "Mrs. Divya V." },
      { subject: "Computer Science", classType: "Lab Class", timeSlot: "8:15 - 8:50", teacher: "Mr. Yogeshwaran V" },
      { subject: "English", classType: "Theory Classes", timeSlot: "8:55 - 9:30", teacher: "Mrs. Divya V." },
      { subject: "Short Break", classType: "", timeSlot: "9:30 - 9:40", teacher: "", isBreak: true },
      { subject: "Business Studies", classType: "Theory Class", timeSlot: "9:45 - 10:20", teacher: "Mrs. Divya V." },
      { subject: "Economics", classType: "Theory Class", timeSlot: "10:25 - 11:05", teacher: "Mrs. Divya V." },
      { subject: "Mathematics", classType: "Theory Class", timeSlot: "11:10 - 11:40", teacher: "Mrs. Divya V." },
      { subject: "Lunch Break", classType: "", timeSlot: "11:40 - 12:10", teacher: "", isBreak: true },
      { subject: "Physical Education", classType: "Phy activity", timeSlot: "12:15 - 12:50", teacher: "Mrs. Divya V." },
      { subject: "Accountancy", classType: "Theory Class", timeSlot: "12:55 - 1:25", teacher: "Mrs. Divya V." },
      { subject: "English", classType: "Theory Classes", timeSlot: "1:30 - 2:10", teacher: "Mrs. Divya V." },
    ],
  };

  const reminders = [
    {
      subject: "Meeting Update",
      content: (
        <>
          Teacher's meet for the next event to be conducted.<br />
          <b>Time</b> : 10:40 am, 14 Nov/2024<br />
          <b>Venue</b> : 2nd Floor Staff Room
        </>
      ),
      teacher: "Teacher Name"
    },
    {
      subject: "Class Substitution",
      content: (
        <>
          Class substitution for 11A3<br />
          <b>Day</b> : Tuesday, 16 Nov/2024<br />
          <b>Period</b> : 5th, 10:40 am
        </>
      ),
      teacher: "Teacher Name"
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for Desktop */}
      {!isMobile && (
        <div className="w-1/5">
          <Sidebar />
        </div>
      )}

      {/* Main Content Area */}
      <div className={`flex-1 ${isMobile ? "p-4" : "p-8"} overflow-auto`}>
        {/* Header */}
        {/* <header className={`flex ${isMobile ? "justify-between" : "justify-start"} items-center bg-white p-4 border-b`}>
          {!isMobile && <h1 clxassName="text-2xl font-bold text-[#1E3A8A]">Personal Timetable</h1>}
          {isMobile && (
            <>
              <Sidebar />
              <h1 className="text-xl font-bold text-[#1E3A8A] pt-3 pl-12">Personal Timetable</h1>
            </>
          )}
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 mt-2 text-gray-500" />
            <div className="h-8 w-8 mt-2 rounded-full bg-gray-300 overflow-hidden">
              <Image src="/mock-profile.jpg" alt="Profile" width={32} height={32} className="object-cover" />
            </div>
          </div>
        </header> */}
        <header className={`flex ${isMobile ? "justify-between" : "justify-between"} mb-6`}>
          <div className="flex items-center gap-3">
            {!isMobile && <h1 className="text-2xl font-bold text-[#1E3A8A]">Personal Timetable</h1>}
            {isMobile && (
              <>
                <Sidebar />
                <h1 className="text-xl font-bold text-[#1E3A8A] pt-3 pl-12">Personal Timetable</h1>
              </>
            )}
          </div>
          <div className="flex items-center gap-4 mt-1">
            <Bell className="h-5 w-5 text-gray-500" />
              {/*<Image src="/mock-profile.jpg" alt="Profile" width={32} height={32} className="object-cover" />*/}
            <User className="h-5 w-5 text-gray-600" />
          </div>
        </header>

        {/* Day Selector */}
        <div className={`flex ${isMobile ? "overflow-x-auto pb-2" : "flex-wrap"} gap-1 mb-4`}>
          {days.map((day) => (
            <Button
              key={day}
              variant={activeDay === day ? "default" : "outline"}
              className={`${activeDay === day ? "bg-[#1E3A8A] text-white" : ""}`}
              onClick={() => setActiveDay(day)}
            >
              {day}
            </Button>
          ))}
        </div>

        {/* Timetable and Reminders Layout */}
        <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-6`}>
          <div className={`${isMobile ? "" : "col-span-2"}`}>
            <div className="space-y-2 mb-6">
              {timetableData[activeDay]?.map((session, index) => (
                <Card key={index} className={`${session.isBreak ? 'bg-[#1E3A8A] text-white' : 'bg-white'}`}>
                  <CardContent className={`${isMobile ? "p-4" : "py-2 px-4"}`}>
                    <div className="grid grid-cols-3 items-center">
                      <div className="col-span-1">
                        <p className="font-medium">{session.subject}</p>
                        {!session.isBreak && <p className="text-xs text-gray-500 dark:text-gray-400">{session.classType}</p>}
                      </div>
                      <div className="col-span-1 text-center">
                        <p>{session.timeSlot}</p>
                      </div>
                      <div className="col-span-1 text-right">
                        {!session.isBreak && <p>{session.room}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className={isMobile ? "mt-6" : ""}>
            <h2 className="text-xl font-bold mb-4 text-[#1E3A8A]">Reminders</h2>
            <div className="space-y-4">
              {reminders.map((reminder, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{reminder.subject}</h3>
                    <div className="text-sm mb-4">{reminder.content}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                      <span>{reminder.teacher}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Exam Schedule */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-[#1E3A8A]">Exam Schedule</h2>
          <Card>
            <CardContent className={`${isMobile ? "p-6" : "p-8"} text-center`}>
              <p className="text-gray-500">No exams scheduled yet.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TimetablePage;
