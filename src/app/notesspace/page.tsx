"use client";

import React, { useState } from "react";
import { Bell, Book, Bookmark, BookmarkCheck, Filter, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
// <<<<<<< HEAD


// =======
import Sidebar from "@/app/student-dash/components/Sidebar";
// >>>>>>> roleselectionpage

interface NoteItem {
  id: string;
  title: string;
  description: string;
  uploadDate: string;
  teacher: string;
  isImportant: boolean;
  type: "note" | "video" | "assignment";
  subject: string;
  color?: string;
  status?: "pending" | "completed" | "overdue";
  dueDate?: string;
}

const getFilteredItems = (items: NoteItem[], filter: string, type: "note" | "video" | "assignment") => {
  let filteredItems = items.filter(item => item.type === type);
  
  if (filter === "Important") {
    filteredItems = filteredItems.filter(item => item.isImportant);
  }
  
  if (filter === "Subjects") {
    const subjects = [...new Set(filteredItems.map(item => item.subject))];
    return subjects.map(subject => ({
      subject,
      items: filteredItems.filter(item => item.subject === subject)
    }));
  }
  
  return [{ subject: "", items: filteredItems }];
};

const DigitalNotesSpace = () => {
  const [notesFilter, setNotesFilter] = useState<"Subjects" | "Recently Added" | "Important" | "Last Seen">("Subjects");
  const [videosFilter, setVideosFilter] = useState<"Subjects" | "Recently Added" | "Important" | "Last Seen">("Subjects");
  const [assignmentsFilter, setAssignmentsFilter] = useState<"Subjects" | "Recently Added" | "Important" | "Last Seen">("Subjects");

  const initialNotes: NoteItem[] = [
    {
      id: "1",
      title: "Integration Short Notes - Ch8",
      description: "Integration notes for Chapter 8",
      uploadDate: "22 Nov'24",
      teacher: "Teacher Name",
      isImportant: false,
      type: "note",
      subject: "Mathematics"
    },
    {
      id: "2",
      title: "Differentiation Important Questions",
      description: "Differentiation notes for all units",
      uploadDate: "22 Nov'24",
      teacher: "Teacher Name",
      isImportant: true,
      type: "note",
      subject: "Mathematics"
    },
    {
      id: "3",
      title: "Integration Short Notes - Ch8",
      description: "Integration notes for Chapter 8",
      uploadDate: "22 Nov'24",
      teacher: "Teacher Name",
      isImportant: false,
      type: "note",
      subject: "Accountancy"
    },
    {
      id: "4",
      title: "Differentiation Important Questions",
      description: "Differentiation notes for all units",
      uploadDate: "22 Nov'24",
      teacher: "Teacher Name",
      isImportant: true,
      type: "note",
      subject: "Accountancy"
    },
    {
      id: "5",
      title: "Integration Ch8 One Shot",
      description: "Integration Lecture for Chapter 8",
      uploadDate: "22 Nov'24",
      teacher: "Teacher Name",
      isImportant: false,
      type: "video",
      subject: "Mathematics"
    },
    {
      id: "6",
      title: "Computer Lab Record",
      description: "Submit Lab Exp-6 of Computer Lab",
      uploadDate: "22 Nov'24",
      teacher: "Teacher Name",
      isImportant: false,
      type: "assignment",
      subject: "Computer Science",
      dueDate: "22 Nov'24",
      status: "pending",
      color: "green"
    },
    {
      id: "7",
      title: "Computer Lab Record",
      description: "Submit Lab Exp-7 of Computer Lab",
      uploadDate: "01 Dec'24",
      teacher: "Teacher Name",
      isImportant: false,
      type: "assignment",
      subject: "Computer Science",
      dueDate: "01 Dec'24",
      status: "pending",
      color: "blue"
    },
    {
      id: "8",
      title: "Computer Lab Record",
      description: "Submit Lab Exp-5 of Computer Lab",
      uploadDate: "18 Nov'24",
      teacher: "Teacher Name",
      isImportant: false,
      type: "assignment",
      subject: "Computer Science",
      dueDate: "18 Nov'24",
      status: "overdue",
      color: "red"
    }
  ];

  const [notes, setNotes] = useState<NoteItem[]>(initialNotes);

  const toggleBookmark = (id: string) => {
    setNotes(prevNotes => 
      prevNotes.map(note => 
        note.id === id 
          ? { ...note, isImportant: !note.isImportant }
          : note
      )
    );
  };

  return (
// <<<<<<< HEAD
//     <div className="min-h-screen bg-gray-50">
//       {/* Desktop Layout */}
//       <div className="hidden md:flex h-screen">
//         {/* Sidebar */}
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
//                     item === "Digital Notes Space" ? "bg-blue-800" : ""
//                   }`}
//                 >
//                   {item}
//                 </div>
//               ))}
//             </nav>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 overflow-auto p-6">
//           <div className="flex justify-between items-center mb-6 border-b pb-4">
//             <h1 className="text-2xl font-bold text-[#1E3A8A]">Digital Notes Space</h1>
//             <div className="flex items-center gap-4">
//               <Bell className="h-6 w-6 text-gray-500 cursor-pointer" />
//               <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden">
//                 <img src="/mock-profile.jpg" alt="Profile" className="w-full h-full object-cover" />
//               </div>
//             </div>
//           </div>

//           {/* Notes Section */}
//           <div className="mb-8">
//             <h2 className="text-lg font-medium text-[#1E3A8A] mb-4">Notes</h2>
            
//             <div className="flex space-x-2 mb-4">
//               <div className="flex items-center mr-2">
//                 <Filter className="h-5 w-5 text-[#1E3A8A]" />
//               </div>
//               {["Subjects", "Recently Added", "Important", "Last Seen"].map((filter) => (
//                 <button
//                   key={filter}
//                   className={`px-4 py-1 rounded-md text-sm ${
//                     notesFilter === filter
//                       ? "bg-[#1E3A8A] text-white"
//                       : "bg-white text-gray-700 border"
//                   }`}
//                   onClick={() => setNotesFilter(filter as any)}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>

//             {getFilteredItems(notes, notesFilter, "note").map((group, groupIndex) => (
//               <div key={groupIndex} className="mb-6">
//                 {group.subject && (
//                   <div className="flex justify-between items-center mb-2">
//                     <h3 className="text-lg font-medium">{group.subject}</h3>
//                     <button className="text-[#1E3A8A] text-sm">See All</button>
//                   </div>
//                 )}
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {group.items.map((note) => (
//                     <div key={note.id} className={`border rounded-md overflow-hidden ${note.isImportant ? "bg-[#1E3A8A] text-white" : "bg-white"}`}>
//                       <div className="p-4">
//                         <div className="flex justify-between items-start">
//                           <div className="flex items-start gap-3">
//                             <div className="mt-1">
//                               <Book className="h-5 w-5" />
//                             </div>
//                             <div>
//                               <h4 className="font-medium">{note.title}</h4>
//                               <p className="text-sm opacity-80">{note.description}</p>
//                               <p className="text-sm opacity-70">Uploaded on {note.uploadDate}</p>
//                               <div className="flex items-center gap-2 mt-1">
//                                 <div className="h-6 w-6 rounded-full bg-gray-300"></div>
//                                 <span className="text-sm">{note.teacher}</span>
//                               </div>
//                             </div>
//                           </div>
//                           <button 
//                             onClick={() => toggleBookmark(note.id)}
//                             className="transition-transform hover:scale-110"
//                           >
//                             {note.isImportant ? (
//                               <BookmarkCheck className="h-5 w-5 text-white" />
//                             ) : (
//                               <Bookmark className="h-5 w-5 text-gray-400" />
//                             )}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Lecture Videos Section */}
//           <div className="mb-8">
//             <h2 className="text-lg font-medium text-[#1E3A8A] mb-4">Lecture Videos</h2>
            
//             <div className="flex space-x-2 mb-4">
//               <div className="flex items-center mr-2">
//                 <Filter className="h-5 w-5 text-[#1E3A8A]" />
//               </div>
//               {["Subjects", "Recently Added", "Important", "Last Seen"].map((filter) => (
//                 <button
//                   key={filter}
//                   className={`px-4 py-1 rounded-md text-sm ${
//                     videosFilter === filter
//                       ? "bg-[#1E3A8A] text-white"
//                       : "bg-white text-gray-700 border"
//                   }`}
//                   onClick={() => setVideosFilter(filter as any)}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>

//             <div className="grid grid-cols-1 gap-4">
//   {getFilteredItems(notes, videosFilter, "video").map((group, groupIndex) => (
//     <React.Fragment key={groupIndex}>
//       {group.items.map((video) => (
//         <div key={video.id} className="border rounded-md overflow-hidden bg-white">
//           <div className="p-4">
//             <div className="flex justify-between items-start">
//               <div className="flex items-start gap-3">
//                 <div className="mt-1 bg-gray-100 p-4 rounded-md">
//                   <Play className="h-5 w-5 text-[#1E3A8A]" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">{video.title}</h4>
//                   <p className="text-sm text-gray-600">{video.description}</p>
//                   <p className="text-sm text-gray-500">Uploaded on {video.uploadDate}</p>
//                   <div className="flex items-center gap-2 mt-1">
//                     <div className="h-6 w-6 rounded-full bg-gray-300"></div>
//                     <span className="text-sm">{video.teacher}</span>
//                   </div>
//                 </div>
//               </div>
//               <button 
//                 onClick={() => toggleBookmark(video.id)}
//                 className="transition-transform hover:scale-110"
//               >
//                 {video.isImportant ? (
//                   <BookmarkCheck className="h-5 w-5 text-[#1E3A8A]" />
//                 ) : (
//                   <Bookmark className="h-5 w-5 text-gray-400" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </React.Fragment>
//   ))}
// </div>

//           </div>

//           {/* Assignments Section */}
//           <div>
//             <h2 className="text-lg font-medium text-[#1E3A8A] mb-4">Assignments</h2>
            
//             <div className="flex space-x-2 mb-4">
//               <div className="flex items-center mr-2">
//                 <Filter className="h-5 w-5 text-[#1E3A8A]" />
//               </div>
//               {["Subjects", "Recently Added", "Important", "Last Seen"].map((filter) => (
//                 <button
//                   key={filter}
//                   className={`px-4 py-1 rounded-md text-sm ${
//                     assignmentsFilter === filter
//                       ? "bg-[#1E3A8A] text-white"
//                       : "bg-white text-gray-700 border"
//                   }`}
//                   onClick={() => setAssignmentsFilter(filter as any)}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>

//            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//   {getFilteredItems(notes, assignmentsFilter, "assignment").map((group, groupIndex) => (
//     <React.Fragment key={groupIndex}>
//       {group.items.map((assignment) => (
//         <div key={assignment.id} className="border rounded-md overflow-hidden bg-white">
//           <div className="p-4">
//             <div className="flex items-start gap-2">
//               <div className={`w-1 h-full rounded-full ${
//                 assignment.color === 'green' ? 'bg-green-500' : 
//                 assignment.color === 'blue' ? 'bg-blue-500' : 
//                 'bg-red-500'
//               } self-stretch`}></div>
//               <div className="flex-1">
//                 <div className="flex justify-between items-start">
//                   <h4 className="font-medium">{assignment.title}</h4>
//                   <button 
//                     onClick={() => toggleBookmark(assignment.id)}
//                     className="transition-transform hover:scale-110"
//                   >
//                     {assignment.isImportant ? (
//                       <BookmarkCheck className="h-5 w-5 text-[#1E3A8A]" />
//                     ) : (
//                       <Bookmark className="h-5 w-5 text-gray-400" />
//                     )}
//                   </button>
//                 </div>
//                 <p className="text-sm text-gray-600">{assignment.description}</p>
//                 <p className="text-sm text-gray-500">Due Date: {assignment.dueDate}</p>
//                 <div className="flex items-center gap-2 mt-1">
//                   <div className="h-6 w-6 rounded-full bg-gray-300"></div>
//                   <span className="text-sm">{assignment.teacher}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </React.Fragment>
//   ))}
// </div>

            


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
//           <h1 className="text-xl font-bold text-[#1E3A8A]">Digital Notes Space</h1>
//           <div className="flex items-center gap-3">
//             <Bell className="h-5 w-5 text-gray-500 cursor-pointer" />
//             <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
//               <img src="/mock-profile.jpg" alt="Profile" className="w-full h-full object-cover" />
//             </div>
//           </div>
//         </header>

//         <div className="p-4">
//           <div className="mb-6">
//             <h2 className="text-lg font-medium text-[#1E3A8A] mb-2">Notes</h2>
            
//             <div className="flex overflow-x-auto space-x-2 mb-4 pb-2">
//               <div className="flex items-center mr-2">
//                 <Filter className="h-5 w-5 text-[#1E3A8A]" />
//               </div>
//               {["Subjects", "Recently Added", "Important", "Last Seen"].map((filter) => (
//                 <button
//                   key={filter}
//                   className={`px-4 py-1 rounded-md text-sm whitespace-nowrap ${
//                     notesFilter === filter
//                       ? "bg-[#1E3A8A] text-white"
//                       : "bg-white text-gray-700 border"
//                   }`}
//                   onClick={() => setNotesFilter(filter as any)}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>

//             {getFilteredItems(notes, notesFilter, "note").map((group, groupIndex) => (
//               <div key={groupIndex} className="mb-6">
//                 {group.subject && (
//                   <div className="flex justify-between items-center mb-2">
//                     <h3 className="text-lg font-medium">{group.subject}</h3>
//                     <button className="text-[#1E3A8A] text-sm">See All</button>
//                   </div>
//                 )}
                
//                 <div className="space-y-4">
//                   {group.items.slice(0, 2).map((note) => (
//                     <div key={note.id} className={`border rounded-md overflow-hidden ${note.isImportant ? "bg-[#1E3A8A] text-white" : "bg-white"}`}>
//                       <div className="p-4">
//                         <div className="flex justify-between items-start">
//                           <div className="flex items-start gap-3">
//                             <div className="mt-1">
//                               <Book className="h-5 w-5" />
//                             </div>
//                             <div>
//                               <h4 className="font-medium">{note.title}</h4>
//                               <p className="text-sm opacity-80">{note.description}</p>
//                               <p className="text-sm opacity-70">Uploaded on {note.uploadDate}</p>
//                               <div className="flex items-center gap-2 mt-1">
//                                 <div className="h-6 w-6 rounded-full bg-gray-300"></div>
//                                 <span className="text-sm">{note.teacher}</span>
//                               </div>
//                             </div>
//                           </div>
//                           <button 
//                             onClick={() => toggleBookmark(note.id)}
//                             className="transition-transform hover:scale-110"
//                           >
//                             {note.isImportant ? (
//                               <BookmarkCheck className="h-5 w-5 text-white" />
//                             ) : (
//                               <Bookmark className="h-5 w-5 text-gray-400" />
//                             )}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

// {/* Mobile Lecture Videos Section */}
// <div className="mb-6">
//   <h2 className="text-lg font-medium text-[#1E3A8A] mb-2">Lecture Videos</h2>
  
//   <div className="flex overflow-x-auto space-x-2 mb-4 pb-2">
//     <div className="flex items-center mr-2">
//       <Filter className="h-5 w-5 text-[#1E3A8A]" />
//     </div>
//     {["Subjects", "Recently Added", "Important", "Last Seen"].map((filter) => (
//       <button
//         key={filter}
//         className={`px-4 py-1 rounded-md text-sm whitespace-nowrap ${
//           videosFilter === filter
//             ? "bg-[#1E3A8A] text-white"
//             : "bg-white text-gray-700 border"
//         }`}
//         onClick={() => setVideosFilter(filter as any)}
//       >
//         {filter}
//       </button>
//     ))}
//   </div>
  
//   <div className="space-y-4">
//     {getFilteredItems(notes, videosFilter, "video").slice(0, 2).map((group) => (
//       <React.Fragment key={group.subject}>
//         {group.items.map((video) => (
//           <div key={video.id} className="border rounded-md overflow-hidden bg-white">
//             <div className="p-4">
//               <div className="flex justify-between items-start">
//                 <div className="flex items-start gap-3">
//                   <div className="mt-1 bg-gray-100 p-3 rounded-md">
//                     <Play className="h-4 w-4 text-[#1E3A8A]" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-sm">{video.title}</h4>
//                     <p className="text-xs text-gray-600">{video.description}</p>
//                     <p className="text-xs text-gray-500">Uploaded on {video.uploadDate}</p>
//                     <div className="flex items-center gap-2 mt-1">
//                       <div className="h-5 w-5 rounded-full bg-gray-300"></div>
//                       <span className="text-xs">{video.teacher}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <button onClick={() => toggleBookmark(video.id)}>
//                   {video.isImportant ? (
//                     <BookmarkCheck className="h-4 w-4 text-[#1E3A8A]" />
//                   ) : (
//                     <Bookmark className="h-4 w-4 text-gray-400" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </React.Fragment>
//     ))}
//   </div>
// </div>

// {/* Mobile Assignments Section */}
// <div>
//   <h2 className="text-lg font-medium text-[#1E3A8A] mb-2">Assignments</h2>
  
//   <div className="flex overflow-x-auto space-x-2 mb-4 pb-2">
//     <div className="flex items-center mr-2">
//       <Filter className="h-5 w-5 text-[#1E3A8A]" />
//     </div>
//     {["Subjects", "Recently Added", "Important", "Last Seen"].map((filter) => (
//       <button
//         key={filter}
//         className={`px-4 py-1 rounded-md text-sm whitespace-nowrap ${
//           assignmentsFilter === filter
//             ? "bg-[#1E3A8A] text-white"
//             : "bg-white text-gray-700 border"
//         }`}
//         onClick={() => setAssignmentsFilter(filter as any)}
//       >
//         {filter}
//       </button>
//     ))}
//   </div>
  
//   <div className="grid grid-cols-1 gap-3 overflow-x-auto pb-2">
//     <div className="flex space-x-3 w-full">
//       {getFilteredItems(notes, assignmentsFilter, "assignment").map((group) => (
//         group.items.map((assignment) => (
//           <div key={assignment.id} className="border rounded-md overflow-hidden bg-white min-w-[250px] w-[250px]">
//             <div className="p-3">
//               <div className="flex items-start gap-2">
//                 <div className={`w-1 h-full rounded-full ${
//                   assignment.color === 'green' ? 'bg-green-500' : 
//                   assignment.color === 'blue' ? 'bg-blue-500' : 
//                   'bg-red-500'
//                 } self-stretch`}></div>
//                 <div className="flex-1">
//                   <div className="flex justify-between items-start">
//                     <h4 className="font-medium text-sm">{assignment.title}</h4>
//                     <button onClick={() => toggleBookmark(assignment.id)}>
//                       {assignment.isImportant ? (
//                         <BookmarkCheck className="h-4 w-4 text-[#1E3A8A]" />
//                       ) : (
//                         <Bookmark className="h-4 w-4 text-gray-400" />
//                       )}
//                     </button>
//                   </div>
//                   <p className="text-xs text-gray-600">{assignment.description}</p>
//                   <p className="text-xs text-gray-500">Due Date: {assignment.dueDate}</p>
//                   <div className="flex items-center gap-2 mt-1">
//                     <div className="h-5 w-5 rounded-full bg-gray-300"></div>
//                     <span className="text-xs">{assignment.teacher}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))
//       ))}
//     </div>
//   </div>
// </div>


//           </div>
//         </div>
//       </div>
     
// =======
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Digital Notes Space</h1>
        
        {/* Notes Section */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-[#1E3A8A] mb-4">Notes</h2>
          
          <div className="flex space-x-2 mb-4">
            <div className="flex items-center mr-2">
              <Filter className="h-5 w-5 text-[#1E3A8A]" />
            </div>
            {["Subjects", "Recently Added", "Important", "Last Seen"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-1 rounded-md text-sm ${
                  notesFilter === filter
                    ? "bg-[#1E3A8A] text-white"
                    : "bg-white text-gray-700 border"
                }`}
                onClick={() => setNotesFilter(filter as any)}
              >
                {filter}
              </button>
            ))}
          </div>

          {getFilteredItems(notes, notesFilter, "note").map((group, groupIndex) => (
            <div key={groupIndex} className="mb-6">
              {group.subject && (
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">{group.subject}</h3>
                  <button className="text-[#1E3A8A] text-sm">See All</button>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((note) => (
                  <div key={note.id} className={`border rounded-md overflow-hidden ${note.isImportant ? "bg-[#1E3A8A] text-white" : "bg-white"}`}>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <div className="mt-1">
                            <Book className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium">{note.title}</h4>
                            <p className="text-sm opacity-80">{note.description}</p>
                            <p className="text-sm opacity-70">Uploaded on {note.uploadDate}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                              <span className="text-sm">{note.teacher}</span>
                            </div>
                          </div>
                        </div>
                        <button 
                          onClick={() => toggleBookmark(note.id)}
                          className="transition-transform hover:scale-110"
                        >
                          {note.isImportant ? (
                            <BookmarkCheck className="h-5 w-5 text-white" />
                          ) : (
                            <Bookmark className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Lecture Videos Section */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-[#1E3A8A] mb-4">Lecture Videos</h2>
          
          <div className="flex space-x-2 mb-4">
            <div className="flex items-center mr-2">
              <Filter className="h-5 w-5 text-[#1E3A8A]" />
            </div>
            {["Subjects", "Recently Added", "Important", "Last Seen"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-1 rounded-md text-sm ${
                  videosFilter === filter
                    ? "bg-[#1E3A8A] text-white"
                    : "bg-white text-gray-700 border"
                }`}
                onClick={() => setVideosFilter(filter as any)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4">
            {getFilteredItems(notes, videosFilter, "video").map((group, groupIndex) => (
              <React.Fragment key={groupIndex}>
                {group.items.map((video) => (
                  <div key={video.id} className="border rounded-md overflow-hidden bg-white">
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 bg-gray-100 p-4 rounded-md">
                            <Play className="h-5 w-5 text-[#1E3A8A]" />
                          </div>
                          <div>
                            <h4 className="font-medium">{video.title}</h4>
                            <p className="text-sm text-gray-600">{video.description}</p>
                            <p className="text-sm text-gray-500">Uploaded on {video.uploadDate}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                              <span className="text-sm">{video.teacher}</span>
                            </div>
                          </div>
                        </div>
                        <button 
                          onClick={() => toggleBookmark(video.id)}
                          className="transition-transform hover:scale-110"
                        >
                          {video.isImportant ? (
                            <BookmarkCheck className="h-5 w-5 text-[#1E3A8A]" />
                          ) : (
                            <Bookmark className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Assignments Section */}
        <div>
          <h2 className="text-lg font-medium text-[#1E3A8A] mb-4">Assignments</h2>
          
          <div className="flex space-x-2 mb-4">
            <div className="flex items-center mr-2">
              <Filter className="h-5 w-5 text-[#1E3A8A]" />
            </div>
            {["Subjects", "Recently Added", "Important", "Last Seen"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-1 rounded-md text-sm ${
                  assignmentsFilter === filter
                    ? "bg-[#1E3A8A] text-white"
                    : "bg-white text-gray-700 border"
                }`}
                onClick={() => setAssignmentsFilter(filter as any)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {getFilteredItems(notes, assignmentsFilter, "assignment").map((group, groupIndex) => (
              <React.Fragment key={groupIndex}>
                {group.items.map((assignment) => (
                  <div key={assignment.id} className="border rounded-md overflow-hidden bg-white">
                    <div className="p-4">
                      <div className="flex items-start gap-2">
                        <div className={`w-1 h-full rounded-full ${
                          assignment.color === 'green' ? 'bg-green-500' : 
                          assignment.color === 'blue' ? 'bg-blue-500' : 
                          'bg-red-500'
                        } self-stretch`}></div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium">{assignment.title}</h4>
                            <button 
                              onClick={() => toggleBookmark(assignment.id)}
                              className="transition-transform hover:scale-110"
                            >
                              {assignment.isImportant ? (
                                <BookmarkCheck className="h-5 w-5 text-[#1E3A8A]" />
                              ) : (
                                <Bookmark className="h-5 w-5 text-gray-400" />
                              )}
                            </button>
                          </div>
                          <p className="text-sm text-gray-600">{assignment.description}</p>
                          <p className="text-sm text-gray-500">Due Date: {assignment.dueDate}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                            <span className="text-sm">{assignment.teacher}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
// >>>>>>> roleselectionpage
  );
};

export default DigitalNotesSpace;
