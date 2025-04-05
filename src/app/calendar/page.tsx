"use client";

import React, { useState } from "react";
import { Bell, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// <<<<<<< HEAD
// =======
import Sidebar from "@/app/student-dash/components/Sidebar";
// >>>>>>> roleselectionpage

interface CalendarEvent {
  date: string;
  title: string;
  type: "Holiday" | "Working Day" | "Event" | "Examination";
}

const AcademicCalendarPage: React.FC = () => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  const [currentMonth, setCurrentMonth] = useState(0); // January
  const [currentYear, setCurrentYear] = useState(2025);
  
  const januaryEvents: CalendarEvent[] = [
    { date: "01 Jan'25", title: "New Year", type: "Holiday" },
    { date: "02 Jan'25", title: "School Reopens", type: "Working Day" },
    { date: "03 Jan'25", title: "", type: "Working Day" },
    { date: "04 Jan'25", title: "", type: "Working Day" },
    { date: "05 Jan'25", title: "", type: "Holiday" },
    { date: "06 Jan'25", title: "", type: "Working Day" },
    { date: "07 Jan'25", title: "", type: "Working Day" },
    { date: "08 Jan'25", title: "", type: "Working Day" },
    { date: "09 Jan'25", title: "", type: "Working Day" },
    { date: "10 Jan'25", title: "", type: "Working Day" },
    { date: "11 Jan'25", title: "Summer Camp Registration", type: "Event" },
    { date: "12 Jan'25", title: "", type: "Holiday" },
    { date: "13 Jan'25", title: "", type: "Working Day" },
    { date: "14 Jan'25", title: "Parent-Teacher Meeting", type: "Working Day" },
    { date: "15 Jan'25", title: "Annual Day Rehearsals Begin", type: "Working Day" },
    { date: "16 Jan'25", title: "Computer Science Exam", type: "Examination" },
    { date: "17 Jan'25", title: "", type: "Working Day" },
    { date: "18 Jan'25", title: "", type: "Holiday" },
    { date: "19 Jan'25", title: "", type: "Holiday" },
    { date: "20 Jan'25", title: "Field Trip to Museum", type: "Event" },
    { date: "21 Jan'25", title: "", type: "Working Day" },
    { date: "22 Jan'25", title: "", type: "Working Day" },
    { date: "23 Jan'25", title: "", type: "Working Day" },
    { date: "24 Jan'25", title: "", type: "Working Day" },
    { date: "25 Jan'25", title: "", type: "Holiday" },
    { date: "26 Jan'25", title: "Republic Day", type: "Holiday" },
    { date: "27 Jan'25", title: "", type: "Working Day" },
    { date: "28 Jan'25", title: "", type: "Working Day" },
    { date: "29 Jan'25", title: "", type: "Working Day" },
    { date: "30 Jan'25", title: "", type: "Working Day" },
    { date: "31 Jan'25", title: "", type: "Working Day" },
  ];
  
  // Update the eventsData object
  const eventsData: { [key: number]: CalendarEvent[] } = {
    0: januaryEvents,
    1: [
      { date: "01 Feb'25", title: "", type: "Working Day" },
      { date: "02 Feb'25", title: "", type: "Holiday" },
      { date: "15 Feb'25", title: "Mid-Term Exams Begin", type: "Examination" },
      // Add more February events as needed
    ],
    // Add other months with similar structure
  };
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Holiday":
        return "bg-[#1E3A8A] text-white";
      case "Event":
        return "bg-[#1E3A8A] text-white";
      case "Examination":
        return "bg-white text-[#1E3A8A] border border-[#1E3A8A]";
      default:
        return "bg-white text-[#1E3A8A] border border-[#1E3A8A]";
    }
  };
  
  const navigateMonth = (direction: number) => {
    let newMonth = currentMonth + direction;
    let newYear = currentYear;
    
    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    } else if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }
    
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };
  
  const currentEvents = eventsData[currentMonth] || [];
  
  return (
// <<<<<<< HEAD
//     <div className="min-h-screen bg-gray-50">
//       {/* Mobile Header */}
//       <header className="md:hidden flex items-center justify-between bg-white p-4 border-b">
//         <Menu className="h-6 w-6 text-[#1E3A8A]" />
//         <h1 className="text-xl font-bold text-[#1E3A8A]">Academic Calendar</h1>
//         <div className="flex items-center gap-3">
//           <Bell className="h-5 w-5 text-[#1E3A8A]" />
//           <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
//             <img src="/mock-profile.jpg" alt="Profile" className="w-full h-full object-cover" />
//           </div>
//         </div>
//       </header>
      
//       {/* Desktop Header */}
//       <header className="hidden md:flex items-center justify-between bg-white p-6 border-b">
//         <h1 className="text-2xl font-bold text-[#1E3A8A]">Academic Calendar</h1>
//         <div className="flex items-center gap-4">
//           <Bell className="h-6 w-6 text-[#1E3A8A] cursor-pointer" />
//           <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden cursor-pointer">
//             <img src="/mock-profile.jpg" alt="Profile" className="w-full h-full object-cover" />
//           </div>
//         </div>
//       </header>
      
//       <div className="max-w-4xl mx-auto p-4 md:p-6">
//         {/* Month Navigation */}
//         <div className="flex justify-center items-center mb-6">
//           <Button 
//             variant="ghost" 
//             size="icon" 
//             onClick={() => navigateMonth(-1)}
//             className="text-[#1E3A8A]"
//           >
//             <ChevronLeft className="h-6 w-6" />
//           </Button>
//           <h2 className="text-xl font-bold text-[#1E3A8A] mx-4">
//             {months[currentMonth]} {currentYear}
//           </h2>
//           <Button 
//             variant="ghost" 
//             size="icon" 
//             onClick={() => navigateMonth(1)}
//             className="text-[#1E3A8A]"
//           >
//             <ChevronRight className="h-6 w-6" />
//           </Button>
//         </div>
        
//         {/* Desktop Calendar View */}
//         <div className="hidden md:block mb-6">
//           <Card>
//             <CardContent className="p-6">
//               <div className="grid grid-cols-7 gap-2 mb-4">
//                 {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//                   <div key={day} className="text-center font-medium text-[#1E3A8A]">
//                     {day}
//                   </div>
//                 ))}
                
//                 {/* Calendar grid - would need proper date calculation */}
//                 {Array.from({ length: 35 }).map((_, index) => {
//                   const day = index - 3; // Adjust based on month start day
//                   return (
//                     <div 
//                       key={index} 
//                       className={`h-24 border rounded-md p-2 ${
//                         day <= 0 || day > 31 ? "bg-gray-100" : 
//                         day === 1 || day === 5 || day === 12 || day === 18 || day === 19 || day === 25 || day === 26 ? 
//                         "bg-[#1E3A8A] text-white" : "bg-white"
//                       }`}
//                     >
//                       {day > 0 && day <= 31 && (
//                         <>
//                           <div className="font-medium">{day}</div>
//                           <div className="text-xs mt-1 line-clamp-2">
//                             {day === 1 && "New Year"}
//                             {day === 2 && "School Reopens"}
//                             {day === 11 && "Summer Camp Registration"}
//                             {day === 14 && "Parent-Teacher Meeting"}
//                             {day === 15 && "Annual Day Rehearsals"}
//                             {day === 16 && "CS Exam"}
//                             {day === 20 && "Field Trip"}
//                             {day === 26 && "Republic Day"}
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
        
//         {/* List View (Mobile and Desktop) */}
//         <div className="space-y-2">
//           {currentEvents.map((event, index) => (
//             <div 
//               key={index} 
//               className={`flex items-center rounded-md overflow-hidden ${getTypeColor(event.type)}`}
//             >
//               <div className="w-24 md:w-32 p-2 md:p-3 text-center border-r border-opacity-20">
//                 {event.date.split(" ")[0]} {event.date.split(" ")[1]}
//               </div>
//               <div className="flex-1 p-2 md:p-3">
//                 {event.title || (event.type === "Working Day" ? "Working Day" : "")}
//               </div>
//               <div className="w-32 p-2 md:p-3 text-right">
//                 {event.type}
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Legend (Desktop only) */}
//         <div className="hidden md:flex justify-end mt-6 gap-4">
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4 bg-[#1E3A8A]"></div>
//             <span>Holiday/Event</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4 border border-[#1E3A8A]"></div>
//             <span>Working Day</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4 bg-white border border-[#1E3A8A]"></div>
//             <span>Examination</span>
// =======
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <header className="md:hidden flex items-center justify-between bg-white p-4 border-b">
          <div className="w-6"></div>
          <h1 className="text-xl font-bold text-[#1E3A8A]">Academic Calendar</h1>
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-[#1E3A8A]" />
            <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
              <img src="/mock-profile.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>
        
        {/* Desktop Header */}
        <header className="hidden md:flex items-center justify-between bg-white p-6 border-b">
          <h1 className="text-2xl font-bold text-[#1E3A8A]">Academic Calendar</h1>
          <div className="flex items-center gap-4">
            <Bell className="h-6 w-6 text-[#1E3A8A] cursor-pointer" />
            <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden cursor-pointer">
              <img src="/mock-profile.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>
        
        <div className="max-w-4xl mx-auto p-4 md:p-6">
          {/* Month Navigation */}
          <div className="flex justify-center items-center mb-6">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigateMonth(-1)}
              className="text-[#1E3A8A]"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <h2 className="text-xl font-bold text-[#1E3A8A] mx-4">
              {months[currentMonth]} {currentYear}
            </h2>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigateMonth(1)}
              className="text-[#1E3A8A]"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Desktop Calendar View */}
          <div className="hidden md:block mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center font-medium text-[#1E3A8A]">
                      {day}
                    </div>
                  ))}
                  
                  {/* Calendar grid - would need proper date calculation */}
                  {Array.from({ length: 35 }).map((_, index) => {
                    const day = index - 3; // Adjust based on month start day
                    return (
                      <div 
                        key={index} 
                        className={`h-24 border rounded-md p-2 ${
                          day <= 0 || day > 31 ? "bg-gray-100" : 
                          day === 1 || day === 5 || day === 12 || day === 18 || day === 19 || day === 25 || day === 26 ? 
                          "bg-[#1E3A8A] text-white" : "bg-white"
                        }`}
                      >
                        {day > 0 && day <= 31 && (
                          <>
                            <div className="font-medium">{day}</div>
                            <div className="text-xs mt-1 line-clamp-2">
                              {day === 1 && "New Year"}
                              {day === 2 && "School Reopens"}
                              {day === 11 && "Summer Camp Registration"}
                              {day === 14 && "Parent-Teacher Meeting"}
                              {day === 15 && "Annual Day Rehearsals"}
                              {day === 16 && "CS Exam"}
                              {day === 20 && "Field Trip"}
                              {day === 26 && "Republic Day"}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* List View (Mobile and Desktop) */}
          <div className="space-y-2">
            {currentEvents.map((event, index) => (
              <div 
                key={index} 
                className={`flex items-center rounded-md overflow-hidden ${getTypeColor(event.type)}`}
              >
                <div className="w-24 md:w-32 p-2 md:p-3 text-center border-r border-opacity-20">
                  {event.date.split(" ")[0]} {event.date.split(" ")[1]}
                </div>
                <div className="flex-1 p-2 md:p-3">
                  {event.title || (event.type === "Working Day" ? "Working Day" : "")}
                </div>
                <div className="w-32 p-2 md:p-3 text-right">
                  {event.type}
                </div>
              </div>
            ))}
          </div>
          
          {/* Legend (Desktop only) */}
          <div className="hidden md:flex justify-end mt-6 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#1E3A8A]"></div>
              <span>Holiday/Event</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-[#1E3A8A]"></div>
              <span>Working Day</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border border-[#1E3A8A]"></div>
              <span>Examination</span>
            </div>
{/* >>>>>>> roleselectionpage */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendarPage;
