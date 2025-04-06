"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { Info } from "lucide-react";
 
import Sidebar from "@/app/student-dash/components/Sidebar";


interface ClassSession {
  subject: string;
  classType: string;
  timeSlot: string;
  teacher: string;
  isBreak?: boolean;
}

const ClassTimetablePage = () => {
  const [activeDay, setActiveDay] = useState<string>("Monday");
  
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
 
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Class Timetable</h1>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="flex space-x-2 mb-4">
              {days.map((day) => (
                <button
                  key={day}
                  className={`px-4 py-2 rounded-md ${
                    activeDay === day
                      ? "bg-[#1E3A8A] text-white"
                      : "bg-white text-gray-700 border"
                  }`}
                  onClick={() => setActiveDay(day)}
                >
                  {day}
                </button>
              ))}
            </div>

            <div className="space-y-2">
              {timetableData[activeDay]?.map((session, index) => (
               <Card key={index} className={`${session.isBreak ? 'bg-[#1E3A8A] text-white' : 'bg-white'}`}>
               <CardContent className="py-2 px-4">
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
               </CardContent>
             </Card>
             
             
              ))}
            </div>
          </div>

          <div className="col-span-1">
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

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-[#1E3A8A]">Exam Schedule</h2>
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">No exams scheduled yet.</p>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default ClassTimetablePage;
