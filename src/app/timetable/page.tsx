"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";
// <<<<<<< HEAD
// =======
import Sidebar from "@/app/student-dash/components/Sidebar";
// >>>>>>> roleselectionpage

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
// <<<<<<< HEAD
//     <div className="min-h-screen bg-gray-50">
//       {/* Desktop Layout */}
//       <div className="hidden md:flex h-screen">
//         {/* Sidebar 
//         <div className="w-64 bg-[#1E3A8A] text-white">
//           <div className="p-6">
//             <h1 className="text-2xl font-bold mb-10">Dashboard</h1>
//             <nav className="space-y-1">
//               {[
//                 "Dashboard",
//                 "Attendance",
//                 "Events",
//                 "Marks",
//                 "Timetable",
//                 "Exam Schedule",
//                 "Fee Payment",
//                 "Digital Notes Space",
//                 "Enquiry",
//                 "Academic Calendar",
//                 "Subjects and Syllabus",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className={`py-2 px-4 hover:bg-blue-800 rounded cursor-pointer ${
//                     item === "Timetable" ? "bg-blue-800" : ""
//                   }`}
//                 >
//                   {item}
//                 </div>
//               ))}
//             </nav>
//           </div>
//         </div> */}

//         {/* Main Content */}
//         <div className="flex-1 overflow-auto p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold text-[#1E3A8A]">Class Timetable</h1>
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <div className="h-6 w-6 text-gray-500 cursor-pointer">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
//                     <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
//                   </svg>
//                 </div>
//               </div>
//               <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden">
//                 <img src="/mock-profile.jpg" alt="Profile" className="w-full h-full object-cover" />
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 gap-6">
//             <div className="col-span-2">
//               <div className="flex space-x-2 mb-4">
//                 {days.map((day) => (
//                   <button
//                     key={day}
//                     className={`px-4 py-2 rounded-md ${
//                       activeDay === day
//                         ? "bg-[#1E3A8A] text-white"
//                         : "bg-white text-gray-700 border"
//                     }`}
//                     onClick={() => setActiveDay(day)}
//                   >
//                     {day}
//                   </button>
//                 ))}
//               </div>

//               <div className="space-y-2">
//                 {timetableData[activeDay]?.map((session, index) => (
//                  <Card key={index} className={`${session.isBreak ? 'bg-[#1E3A8A] text-white' : 'bg-white'}`}>
//                  <CardContent className="py-2 px-4">
//                    <div className="grid grid-cols-3 items-center">
//                      <div className="col-span-1">
//                        <p className="font-medium">{session.subject}</p>
//                        {!session.isBreak && <p className="text-xs text-gray-500 dark:text-gray-400">{session.classType}</p>}
//                      </div>
//                      <div className="col-span-1 text-center">
//                        <p>{session.timeSlot}</p>
//                      </div>
//                      <div className="col-span-1 text-right">
//                        {!session.isBreak && <p>{session.teacher}</p>}
//                      </div>
//                    </div>
//                  </CardContent>
//                </Card>
               
               
//                 ))}
//               </div>
//             </div>

//             <div className="col-span-1">
//               <h2 className="text-xl font-bold mb-4 text-[#1E3A8A]">Reminders</h2>
//               <div className="space-y-4">
//                 {reminders.map((reminder, index) => (
//                   <Card key={index}>
//                     <CardContent className="p-4">
//                       <h3 className="font-bold text-lg mb-2">{reminder.subject}</h3>
//                       <p className="text-sm mb-4">{reminder.content}</p>
//                       <div className="flex justify-between items-center text-sm text-gray-500">
//                         <p>Due Date: {reminder.dueDate}</p>
//                         <div className="flex items-center gap-2">
//                           <div className="h-6 w-6 rounded-full bg-gray-300"></div>
//                           <span>{reminder.teacher}</span>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="mt-8">
//             <h2 className="text-xl font-bold mb-4 text-[#1E3A8A]">Exam Schedule</h2>
//             <Card>
//               <CardContent className="p-8 text-center">
//                 <p className="text-gray-500">No exams scheduled yet.</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Layout */}
//       <div className="md:hidden">
//         <header className="flex items-center justify-between bg-white p-4 border-b">
//           <button className="text-gray-700">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="3" y1="12" x2="21" y2="12"></line>
//               <line x1="3" y1="6" x2="21" y2="6"></line>
//               <line x1="3" y1="18" x2="21" y2="18"></line>
//             </svg>
//           </button>
//           <h1 className="text-xl font-bold text-[#1E3A8A]">Class Timetable</h1>
//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <div className="h-5 w-5 text-gray-500 cursor-pointer">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
//                   <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
//                 </svg>
//               </div>
//             </div>
//             <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
//               <img src="/mock-profile.jpg" alt="Profile" className="w-full h-full object-cover" />
//             </div>
//           </div>
//         </header>

//         <div className="p-4">
//           <div className="flex overflow-x-auto space-x-2 mb-4 pb-2">
//             {days.map((day) => (
//               <button
//                 key={day}
//                 className={`px-4 py-2 rounded-md whitespace-nowrap ${
//                   activeDay === day
//                     ? "bg-[#1E3A8A] text-white"
//                     : "bg-white text-gray-700 border"
//                 }`}
//                 onClick={() => setActiveDay(day)}
//               >
//                 {day}
//               </button>
//             ))}
//           </div>

//           <div className="space-y-2 mb-6">
//             {timetableData[activeDay]?.map((session, index) => (
//               <Card key={index} className={`${session.isBreak ? 'bg-[#1E3A8A] text-white' : 'bg-white'}`}>
//                 <CardContent className="p-4">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <p className="font-medium">{session.subject}</p>
//                       {!session.isBreak && <p className="text-sm text-gray-500 dark:text-gray-400">{session.classType}</p>}
//                     </div>
//                     <div className="text-center">
//                       <p>{session.timeSlot}</p>
//                     </div>
//                     <div>
//                       {!session.isBreak && <p>{session.teacher}</p>}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <h2 className="text-xl font-bold mb-4 text-[#1E3A8A]">Exam Schedule</h2>
//           <Card className="mb-6">
//             <CardContent className="p-6 text-center">
//               <p className="text-gray-500">No exams scheduled yet.</p>
//             </CardContent>
//           </Card>

//           <h2 className="text-xl font-bold mb-4 text-[#1E3A8A]">Reminders</h2>
//           <div className="space-y-4">
//             {reminders.map((reminder, index) => (
//               <Card key={index}>
//                 <CardContent className="p-4">
//                   <h3 className="font-bold text-lg mb-2">{reminder.subject}</h3>
//                   <p className="text-sm mb-4">{reminder.content}</p>
//                   <div className="flex justify-between items-center text-sm text-gray-500">
//                     <p>Due Date: {reminder.dueDate}</p>
//                     <div className="flex items-center gap-2">
//                       <div className="h-6 w-6 rounded-full bg-gray-300"></div>
//                       <span>{reminder.teacher}</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
// =======
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
{/* >>>>>>> roleselectionpage */}
        </div>
      </div>
    </div>
  );
};

export default ClassTimetablePage;
