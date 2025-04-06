"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info, Menu, Bell } from "lucide-react";
import Sidebar from "@/app/student-dash/components/Sidebar";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";

interface ClassSession {
  subject: string;
  classType: string;
  timeSlot: string;
  teacher: string;
  isBreak?: boolean;
}

const ClassTimetablePage = () => {
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
      { subject: "Physical Educ...", classType: "Phy activity", timeSlot: "12:15 - 12:50", teacher: "Mrs. Divya V." },
      { subject: "Physical Educ...", classType: "Phy activity", timeSlot: "12:55 - 1:25", teacher: "Mrs. Divya V." },
      { subject: "Accountancy", classType: "Theory Class", timeSlot: "1:30 - 2:10", teacher: "Mrs. Divya V." },
    ],
    "Tuesday": [
      { subject: "Physics", classType: "Theory Class", timeSlot: "7:30 - 8:10", teacher: "Mr. Rajesh K." },
      { subject: "Chemistry", classType: "Theory Class", timeSlot: "8:15 - 8:50", teacher: "Mrs. Priya S." },
      { subject: "Computer Science", classType: "Theory Class", timeSlot: "8:55 - 9:30", teacher: "Mr. Yogeshwaran V" },
      { subject: "Short Break", classType: "", timeSlot: "9:30 - 9:40", teacher: "", isBreak: true },
      { subject: "Mathematics", classType: "Theory Class", timeSlot: "9:45 - 10:20", teacher: "Mrs. Divya V." },
      { subject: "Business Studies", classType: "Theory Class", timeSlot: "10:25 - 11:05", teacher: "Mrs. Divya V." },
      { subject: "English", classType: "Theory Classes", timeSlot: "11:10 - 11:40", teacher: "Mrs. Divya V." },
      { subject: "Lunch Break", classType: "", timeSlot: "11:40 - 12:10", teacher: "", isBreak: true },
      { subject: "Economics", classType: "Theory Class", timeSlot: "12:15 - 12:50", teacher: "Mrs. Divya V." },
      { subject: "Accountancy", classType: "Theory Class", timeSlot: "12:55 - 1:25", teacher: "Mrs. Divya V." },
      { subject: "Library", classType: "Reading", timeSlot: "1:30 - 2:10", teacher: "Mrs. Lakshmi R." },
    ],
    "Wednesday": [
      { subject: "Computer Science", classType: "Lab Class", timeSlot: "7:30 - 8:10", teacher: "Mr. Yogeshwaran V" },
      { subject: "Computer Science", classType: "Lab Class", timeSlot: "8:15 - 8:50", teacher: "Mr. Yogeshwaran V" },
      { subject: "Mathematics", classType: "Theory Class", timeSlot: "8:55 - 9:30", teacher: "Mrs. Divya V." },
      { subject: "Short Break", classType: "", timeSlot: "9:30 - 9:40", teacher: "", isBreak: true },
      { subject: "Business Studies", classType: "Theory Class", timeSlot: "9:45 - 10:20", teacher: "Mrs. Divya V." },
      { subject: "Accountancy", classType: "Theory Class", timeSlot: "10:25 - 11:05", teacher: "Mrs. Divya V." },
      { subject: "Economics", classType: "Theory Class", timeSlot: "11:10 - 11:40", teacher: "Mrs. Divya V." },
      { subject: "Lunch Break", classType: "", timeSlot: "11:40 - 12:10", teacher: "", isBreak: true },
      { subject: "English", classType: "Theory Classes", timeSlot: "12:15 - 12:50", teacher: "Mrs. Divya V." },
      { subject: "Physical Educ...", classType: "Phy activity", timeSlot: "12:55 - 1:25", teacher: "Mrs. Divya V." },
      { subject: "Club Activities", classType: "Extra-curricular", timeSlot: "1:30 - 2:10", teacher: "Various" },
    ],
    "Thursday": [
      { subject: "Accountancy", classType: "Theory Class", timeSlot: "7:30 - 8:10", teacher: "Mrs. Divya V." },
      { subject: "Mathematics", classType: "Theory Class", timeSlot: "8:15 - 8:50", teacher: "Mrs. Divya V." },
      { subject: "English", classType: "Theory Classes", timeSlot: "8:55 - 9:30", teacher: "Mrs. Divya V." },
      { subject: "Short Break", classType: "", timeSlot: "9:30 - 9:40", teacher: "", isBreak: true },
      { subject: "Economics", classType: "Theory Class", timeSlot: "9:45 - 10:20", teacher: "Mrs. Divya V." },
      { subject: "Business Studies", classType: "Theory Class", timeSlot: "10:25 - 11:05", teacher: "Mrs. Divya V." },
      { subject: "Computer Science", classType: "Theory Class", timeSlot: "11:10 - 11:40", teacher: "Mr. Yogeshwaran V" },
      { subject: "Lunch Break", classType: "", timeSlot: "11:40 - 12:10", teacher: "", isBreak: true },
      { subject: "Mathematics Quiz", classType: "Assessment", timeSlot: "12:15 - 12:50", teacher: "Mrs. Divya V." },
      { subject: "Physical Educ...", classType: "Phy activity", timeSlot: "12:55 - 1:25", teacher: "Mrs. Divya V." },
      { subject: "Career Guidance", classType: "Counseling", timeSlot: "1:30 - 2:10", teacher: "Mr. Sanjay N." },
    ],
    "Friday": [
      { subject: "English", classType: "Theory Classes", timeSlot: "7:30 - 8:10", teacher: "Mrs. Divya V." },
      { subject: "Business Studies", classType: "Theory Class", timeSlot: "8:15 - 8:50", teacher: "Mrs. Divya V." },
      { subject: "Economics", classType: "Theory Class", timeSlot: "8:55 - 9:30", teacher: "Mrs. Divya V." },
      { subject: "Short Break", classType: "", timeSlot: "9:30 - 9:40", teacher: "", isBreak: true },
      { subject: "Mathematics", classType: "Theory Class", timeSlot: "9:45 - 10:20", teacher: "Mrs. Divya V." },
      { subject: "Computer Science", classType: "Theory Class", timeSlot: "10:25 - 11:05", teacher: "Mr. Yogeshwaran V" },
      { subject: "Accountancy", classType: "Theory Class", timeSlot: "11:10 - 11:40", teacher: "Mrs. Divya V." },
      { subject: "Lunch Break", classType: "", timeSlot: "11:40 - 12:10", teacher: "", isBreak: true },
      { subject: "Assembly", classType: "School Activity", timeSlot: "12:15 - 12:50", teacher: "All Teachers" },
      { subject: "Moral Science", classType: "Value Education", timeSlot: "12:55 - 1:25", teacher: "Mrs. Lakshmi R." },
      { subject: "Class Test", classType: "Assessment", timeSlot: "1:30 - 2:10", teacher: "Mrs. Divya V." },
    ],
  };

  const reminders = [
    {
      subject: "Computer Science",
      content: "Complete Experiment 6 in Lab Record and submit the copy in cabin. Prepare for Viva for Experiment 4 and 5.",
      dueDate: "28 Nov'24",
      teacher: "Teacher Name"
    },
    {
      subject: "Mathematics",
      content: "Quiz will be conducted for Chapters 6 and 7 on 28 Nov'24, Thursday. Be prepared.",
      dueDate: "28 Nov'24",
      teacher: "Teacher Name"
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Only visible on desktop */}
      {!isMobile && <Sidebar />}
      
      <div className="flex-1 overflow-auto">
        {/* Header */}
        {isMobile ? (
          <header className="bg-white p-4 flex items-center justify-between border-b">
            <Menu className="h-6 w-6 text-gray-700" />
            <h1 className="text-xl font-bold text-[#1E3A8A]">Class Timetable</h1>
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-gray-500" />
              <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
                <Image src="/mock-profile.jpg" alt="Profile" width={32} height={32} className="object-cover" />
              </div>
            </div>
          </header>
        ) : (
          <header className="p-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#1E3A8A]">Class Timetable</h1>
            <div className="flex items-center gap-4">
              <Bell className="h-6 w-6 text-gray-500" />
              <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden">
                <Image src="/mock-profile.jpg" alt="Profile" width={40} height={40} className="object-cover" />
              </div>
            </div>
          </header>
        )}

        {/* Main Content */}
        <div className={isMobile ? "p-4" : "p-6"}>
          {/* Day Selector */}
          <div className={`flex ${isMobile ? "overflow-x-auto pb-2" : "flex-wrap"} gap-2 mb-4`}>
            {days.map((day) => (
              <Button
                key={day}
                variant={activeDay === day ? "default" : "outline"}
                className={`${activeDay === day ? "bg-[#1E3A8A] text-white" : ""} ${isMobile ? "whitespace-nowrap" : ""}`}
                onClick={() => setActiveDay(day)}
              >
                {day}
              </Button>
            ))}
          </div>

          <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-6`}>
            {/* Timetable */}
            <div className={`${isMobile ? "" : "col-span-2"}`}>
              <div className="space-y-2 mb-6">
                {timetableData[activeDay]?.map((session, index) => (
                  <Card key={index} className={`${session.isBreak ? 'bg-[#1E3A8A] text-white' : 'bg-white'}`}>
                    <CardContent className={`${isMobile ? "p-4" : "py-2 px-4"}`}>
                      {isMobile ? (
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{session.subject}</p>
                            {!session.isBreak && <p className="text-sm text-gray-500 dark:text-gray-400">{session.classType}</p>}
                          </div>
                          <div className="text-center">
                            <p>{session.timeSlot}</p>
                          </div>
                          <div>
                            {!session.isBreak && <p className="text-sm">{session.teacher}</p>}
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-3 items-center">
                          <div className="col-span-1">
                            <p className="font-medium">{session.subject}</p>
                            {!session.isBreak && <p className="text-xs text-gray-500 dark:text-gray-400">{session.classType}</p>}
                          </div>
                          <div className="col-span-1 text-center">
                            <p>{session.timeSlot}</p>
                          </div>
                          <div className="col-span-1 text-right">
                            {!session.isBreak && <p>{session.teacher}</p>}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Reminders */}
            <div className={isMobile ? "mt-6" : ""}>
              <h2 className="text-xl font-bold mb-4 text-[#1E3A8A]">Reminders</h2>
              <div className="space-y-4">
                {reminders.map((reminder, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2">{reminder.subject}</h3>
                      <p className="text-sm mb-4">{reminder.content}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <p>Due Date: {reminder.dueDate}</p>
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                          <span>{reminder.teacher}</span>
                        </div>
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
    </div>
  );
};

export default ClassTimetablePage;
