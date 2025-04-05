// <<<<<<< HEAD
// "use client";
// =======
// "use client";
// import React, { useState, useEffect } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// const Attendance = () => {
//   const [activeTab, setActiveTab] = useState<'Y' | 'M'>('Y');
//   const [attendanceData, setAttendanceData] = useState({
//     month: 'November 2024',
//     percentage: 80,
//     totalDays: 20,
//     present: 16,
//     absent: 4,
//     lastUpdated: '24 Nov\'24'
//   });

//   useEffect(() => {
//     if (activeTab === 'Y') {
//       setAttendanceData({
//         month: 'Year 2024',
//         percentage: 85,
//         totalDays: 220,
//         present: 187,
//         absent: 33,
//         lastUpdated: '24 Nov\'24'
//       });
//     } else {
//       setAttendanceData({
//         month: 'November 2024',
//         percentage: 80,
//         totalDays: 20,
//         present: 16,
//         absent: 4,
//         lastUpdated: '24 Nov\'24'
//       });
//     }
//   }, [activeTab]);

//   return (
//     <div>
//       <Card className="overflow-hidden">
//         <CardHeader className="flex flex-row items-center justify-between pb-2">
//           <CardTitle>Attendance</CardTitle>
//           <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'Y' | 'M')}>
//             <TabsList className="bg-gray-100 rounded-full p-0.5 flex">
//               <TabsTrigger
//                 value="Y"
//                 className={`rounded-full px-3 py-1 text-sm ${activeTab === 'Y' ? 'bg-blue-800 text-white' : ''}`}
//               >
//                 Y
//               </TabsTrigger>
//               <TabsTrigger
//                 value="M"
//                 className={`rounded-full px-3 py-1 text-sm ${activeTab === 'M' ? 'bg-blue-800 text-white' : ''}`}
//               >
//                 M
//               </TabsTrigger>
//             </TabsList>
//           </Tabs>
//         </CardHeader>
//         <CardContent className="pt-0">
//           <div className="flex flex-col items-center">
//             <h3 className="text-lg font-medium mb-4">{attendanceData.month}</h3>
//             <div className="relative h-36 w-36 mb-4">
//               <div className="h-36 w-36 rounded-full bg-gray-100"></div>
//               <div className="absolute top-0 left-0 h-36 w-36">
//                 <svg viewBox="0 0 100 100" className="h-full w-full">
//                   <circle
//                     cx="50"
//                     cy="50"
//                     r="40"
//                     fill="transparent"
//                     stroke="#e5e7eb"
//                     strokeWidth="15"
//                     strokeDasharray="251.2"
//                     strokeDashoffset="0"
//                   />
//                   <circle
//                     cx="50"
//                     cy="50"
//                     r="40"
//                     fill="transparent"
//                     stroke="#1E3A8A"
//                     strokeWidth="15"
//                     strokeDasharray="251.2"
//                     strokeDashoffset={`${(1 - attendanceData.percentage / 100) * 251.2}`}
//                     transform="rotate(-90 50 50)"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </div>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-4xl font-bold">{attendanceData.percentage}%</span>
//               </div>
//             </div>
//             <div className="w-full text-sm">
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-700">Total Working days</span>
//                 <span className="font-medium">: {attendanceData.totalDays}</span>
//               </div>
//               <div className="flex justify-between items-center mt-1">
//                 <span className="text-gray-700">No. Present</span>
//                 <span className="font-medium">: {attendanceData.present}</span>
//               </div>
//               <div className="flex justify-between items-center mt-1">
//                 <span className="text-gray-700">No. Absent</span>
//                 <span className="font-medium">: {attendanceData.absent}</span>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-4 self-start">Last updated on {attendanceData.lastUpdated}</p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Attendance;

// >>>>>>> roleselectionpage
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Attendance = () => {
  const [activeTab, setActiveTab] = useState<'Y' | 'M'>('Y');
  const [attendanceData, setAttendanceData] = useState({
    month: 'November 2024',
    percentage: 80,
    totalDays: 20,
    present: 16,
    absent: 4,
// <<<<<<< HEAD
//     lastUpdated: '24 Nov\'24'
// =======
    lastUpdated: "24 Nov'24",
// >>>>>>> roleselectionpage
  });

  useEffect(() => {
    if (activeTab === 'Y') {
      setAttendanceData({
        month: 'Year 2024',
        percentage: 85,
        totalDays: 220,
        present: 187,
        absent: 33,
// <<<<<<< HEAD
//         lastUpdated: '24 Nov\'24'
// =======
        lastUpdated: "24 Nov'24",
// >>>>>>> roleselectionpage
      });
    } else {
      setAttendanceData({
        month: 'November 2024',
        percentage: 80,
        totalDays: 20,
        present: 16,
        absent: 4,
// <<<<<<< HEAD
//         lastUpdated: '24 Nov\'24'
// =======
        lastUpdated: "24 Nov'24",
// >>>>>>> roleselectionpage
      });
    }
  }, [activeTab]);

  return (
    <div>
      <Card className="overflow-hidden">
{/* <<<<<<< HEAD
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Attendance</CardTitle>
======= */}
        {/* Header */}
        <CardHeader className="flex flex-col sm:flex-row items-center justify-between pb-2 gap-y-2">
          <CardTitle className="text-center sm:text-left">Attendance</CardTitle>
{/* >>>>>>> roleselectionpage */}
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'Y' | 'M')}>
            <TabsList className="bg-gray-100 rounded-full p-0.5 flex">
              <TabsTrigger
                value="Y"
// <<<<<<< HEAD
//                 className={`rounded-full px-3 py-1 text-sm ${activeTab === 'Y' ? 'bg-blue-800 text-white' : ''}`}
// =======
                className={`rounded-full px-3 py-1 text-sm ${
                  activeTab === 'Y' ? 'bg-blue-800 text-white' : ''
                }`}
// {/* >>>>>>> roleselectionpage */}
              >
                Y
              </TabsTrigger>
              <TabsTrigger
                value="M"
// <<<<<<< HEAD
//                 className={`rounded-full px-3 py-1 text-sm ${activeTab === 'M' ? 'bg-blue-800 text-white' : ''}`}
// =======
                className={`rounded-full px-3 py-1 text-sm ${
                  activeTab === 'M' ? 'bg-blue-800 text-white' : ''
                }`}
// {/* >>>>>>> roleselectionpage */}
              >
                M
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
{/* <<<<<<< HEAD
        <CardContent className="pt-0">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-medium mb-4">{attendanceData.month}</h3>
            <div className="relative h-36 w-36 mb-4">
              <div className="h-36 w-36 rounded-full bg-gray-100"></div>
              <div className="absolute top-0 left-0 h-36 w-36">
======= */}

        {/* Content */}
        <CardContent className="pt-0">
          <div className="flex flex-col items-center text-center sm:text-left">
            {/* Month/Year */}
            <h3 className="text-lg font-medium mb-4">{attendanceData.month}</h3>

            {/* Circular Progress Chart */}
            <div className="relative h-24 w-24 sm:h-36 sm:w-36 mb-4">
              <div className="h-full w-full rounded-full bg-gray-100"></div>
              <div className="absolute top-0 left-0 h-full w-full">
{/* >>>>>>> roleselectionpage */}
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#e5e7eb"
                    strokeWidth="15"
                    strokeDasharray="251.2"
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#1E3A8A"
// <<<<<<< HEAD
//                     strokeWidth="15"
// =======
                    strokeWidth="8"
// {/* >>>>>>> roleselectionpage */}
                    strokeDasharray="251.2"
                    strokeDashoffset={`${(1 - attendanceData.percentage / 100) * 251.2}`}
                    transform="rotate(-90 50 50)"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
{/* <<<<<<< HEAD
                <span className="text-4xl font-bold">{attendanceData.percentage}%</span>
              </div>
            </div>
            <div className="w-full text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Total Working days</span>
======= */}
                <span className="text-xl sm:text-4xl font-bold">{attendanceData.percentage}%</span>
              </div>
            </div>

            {/* Attendance Details */}
            <div className="w-full text-sm sm:text-base">
              <div className="flex justify-between items-center mt-1">
                <span className="text-gray-700">Total Working Days</span>
{/* >>>>>>> roleselectionpage */}
                <span className="font-medium">: {attendanceData.totalDays}</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-gray-700">No. Present</span>
                <span className="font-medium">: {attendanceData.present}</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-gray-700">No. Absent</span>
                <span className="font-medium">: {attendanceData.absent}</span>
              </div>
            </div>
{/* <<<<<<< HEAD
            <p className="text-xs text-gray-500 mt-4 self-start">Last updated on {attendanceData.lastUpdated}</p>
======= */}

            {/* Last Updated */}
            <p className="text-xs text-gray-500 mt-4 self-start sm:self-end">
              Last updated on {attendanceData.lastUpdated}
            </p>
{/* >>>>>>> roleselectionpage */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// <<<<<<< HEAD
// export default Attendance;
// =======
export default Attendance;
// >>>>>>> roleselectionpage
