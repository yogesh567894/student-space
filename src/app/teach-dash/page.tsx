"use client";

import React, { useState, useEffect } from "react";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Bell, 
  User,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Sidebar from "@/app/teach-dash/components/Sidebar";
import Side1 from "@/app/teach-dash/components/Side1";
import
{ 
    ChartContainer, 
    ChartTooltip, 
    ChartTooltipContent 
  } from "@/components/ui/chart";
  import { 
    Line, 
    LineChart, 
    CartesianGrid, 
    XAxis, 
    YAxis 
  } from "recharts";
  

const EducationDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [attendanceView, setAttendanceView] = useState('monthly');
  const [currentDisciplineIndex, setCurrentDisciplineIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const disciplineItems = [
    {
      title: "Complaints",
      description: "Couple of students caught for misbehaviour in the Economics class.",
      teacher: "Divya S",
      date: "28 Nov '24"
    },
    {
      title: "Maintenance Issues",
      description: "Class projector not working efficiently.",
      date: "28 Nov '24"
    }
  ];

  const handleNext = () => {
    setCurrentDisciplineIndex((prev) => 
      prev === disciplineItems.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentDisciplineIndex((prev) => 
      prev === 0 ? disciplineItems.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
    {/* Sidebar - Fixed width on large screens */}
    <div className="hidden lg:block w-64 flex-shrink-0 fixed h-screen bg-[#1E3A8A] text-white">
      <Sidebar />
    </div>

    {/* Main Content - Add left margin to match sidebar width on large screens */}
    <div className="flex-1 lg:ml-64 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Left side with hamburger for mobile/tablet */}
          <div className="lg:hidden">
            <Side1 />
          </div>

          {/* Title */}
          <h1 className="text-xl lg:text-2xl font-bold text-[#1E3A8A]">
            Teachers Dashboard
          </h1>

          {/* Right side notifications */}
          { screenWidth > 768 && (
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5 text-gray-600" />
              </Button>
            </div>
          )}
        
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Your existing content starts here */}
          {/* Upcoming Class/Meeting Card */}
          <Card className="mb-6 bg-[#1E3A8A] text-white">
  <CardContent className="p-4 sm:pt-6 sm:pb-4">
    {activeTab === "home" ? (
      <div className="flex flex-col space-y-3">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="font-bold text-base sm:text-lg order-2 sm:order-1">Upcoming Class</h3>
          <p className="text-xs sm:text-sm mb-2 sm:mb-0 order-1 sm:order-2">10:40 am, 14 Nov 2024</p>
        </div>
        <div className="flex flex-col space-y-1 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-300 min-w-[70px]">Subject :</span>
            <span>Economics</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-300 min-w-[70px]">Venue :</span>
            <span>11 A2</span>
          </div>
        </div>
      </div>
    ) : (
      <>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <h3 className="text-base sm:text-lg font-bold order-2 sm:order-1">Meeting Remainder</h3>
          <p className="text-xs sm:text-sm mb-2 sm:mb-0 order-1 sm:order-2">
            10:40 am, 14 Nov 2024
          </p>
        </div>
        <div className="text-xs sm:text-sm space-y-2">
          <p>Teacher&apos;s meet for the next event to be conducted.</p>
          <div className="flex flex-col sm:flex-row sm:gap-8">
            <p className="flex items-center gap-2">
              <span className="text-gray-300">Time :</span>
              <span>10:40 am, 14 Nov 2024</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-gray-300">Venue :</span>
              <span>2nd floor Staff Room</span>
            </p>
          </div>
        </div>
      </>
    )}
  </CardContent>
</Card>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
            <Button 
              variant={activeTab === "home" ? "default" : "outline"}
              className={`${
                activeTab === "home" ? "bg-[#1E3A8A] text-white" : "bg-white text-[#1E3A8A]"
              } border border-[#1E3A8A] hover:bg-blue-700 hover:text-white h-12 sm:h-16 text-sm sm:text-base`}
              onClick={() => setActiveTab("home")}
            >
              Home Class
            </Button>
            <Button 
              variant={activeTab === "handling" ? "default" : "outline"}
              className={`${
                activeTab === "handling" ? "bg-[#1E3A8A] text-white" : "bg-white text-[#1E3A8A]"
              } border border-[#1E3A8A] hover:bg-blue-700 hover:text-white h-12 sm:h-16 text-sm sm:text-base`}
              onClick={() => setActiveTab("handling")}
            >
              Handling Class
            </Button>
          </div>

          {activeTab === "home" ? (
            <>
                  {/* Class Attendance */}
                  <div className="mb-6">
  <h2 className="text-xl font-bold text-[#1E3A8A] mb-4">Class Attendance</h2>
  <Card className="border rounded-lg overflow-hidden">
    <CardContent className="p-3 sm:p-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
        {/* Attendance Circle */}
        <div className="relative w-24 h-24 sm:w-20 sm:h-20 flex-shrink-0">
          <div className="w-full h-full rounded-full border-4 border-slate-100 flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#1e40af"
                  strokeWidth="10"
                  strokeDasharray="282.7"
                  strokeDashoffset={attendanceView === 'monthly' ? '73.5' : '50.5'}
                  transform="rotate(-90 50 50)"
                />
              </svg>
            </div>
            <span className="text-2xl sm:text-xl font-bold">
              {attendanceView === 'monthly' ? '74%' : '80%'}
            </span>
          </div>
        </div>

        {/* Attendance Details */}
        <div className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-4 sm:mb-2">
            <h3 className="font-bold text-[#1E3A8A] mb-2 sm:mb-0">November 2024</h3>
            <div className="flex gap-1">
              <button 
                onClick={() => setAttendanceView('yearly')}
                className={`w-8 h-8 sm:w-6 sm:h-6 flex items-center justify-center border border-gray-300 ${
                  attendanceView === 'yearly' ? 'bg-[#1E3A8A] text-white' : 'bg-white text-gray-800'
                } text-xs`}
              >
                Y
              </button>
              <button 
                onClick={() => setAttendanceView('monthly')}
                className={`w-8 h-8 sm:w-6 sm:h-6 flex items-center justify-center border border-gray-300 ${
                  attendanceView === 'monthly' ? 'bg-[#1E3A8A] text-white' : 'bg-white text-gray-800'
                } text-xs`}
              >
                M
              </button>
            </div>
          </div>
          
          <div className="space-y-2 text-sm w-full">
            <div className="flex items-center justify-between sm:justify-start">
              <span className="sm:w-36">Total Working days</span>
              <span className="font-medium">: {attendanceView === 'monthly' ? '20' : '180'}</span>
            </div>
            <div className="flex items-center justify-between sm:justify-start">
              <span className="sm:w-36">Class Strength</span>
              <span className="font-medium">: 56</span>
            </div>
            <div className="flex items-center justify-between sm:justify-start">
              <span className="sm:w-36">Average Attendance</span>
              <span className="font-medium">: {attendanceView === 'monthly' ? '74%' : '82%'}</span>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
  
  {/* Update Attendance Button - Mobile */}
  <div className="mt-4 w-full">
    <Button 
      variant="outline" 
      className="w-full sm:w-auto bg-[#1E3A8A] text-white hover:bg-blue-700 hover:text-white text-sm px-4 py-2"
    >
      Update Attendance
    </Button>
  </div>
</div>




          {/* Student Fee Details */}

          {/* Student Fee Details - Hidden on screens smaller than 480px */}
<div className="mb-6 hidden sm:block">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-bold text-[#1E3A8A]">Student Fee Details</h2>
    <Button variant="link" className="text-[#1E3A8A] h-auto p-0 text-sm">
      See All
    </Button>
  </div>
  <div className="space-y-2 sm:space-y-3">
    {[1, 2, 3].map((term) => (
      <Card key={term} className="overflow-hidden border border-gray-200">
        <div className="flex h-full">
          <div className="w-1 bg-[#1E3A8A] flex-shrink-0 h-full"></div>
          <div className="flex-1 p-4 flex justify-between items-center">
            <div className="flex-shrink-0">
              <p className="font-medium whitespace-nowrap">Examination Fee</p>
              <p className="text-sm text-gray-500 whitespace-nowrap">Term {term}</p>
            </div>
            <div className="text-right mr-4 flex-shrink-0">
              <p className="font-medium whitespace-nowrap">Rs. 3,800.00</p>
              <p className="text-sm text-gray-500 whitespace-nowrap">Due 18 Dec &apos;24</p>
            </div>
          </div>
          <div className="flex items-center pr-2">
            <Button 
              className="bg-[#1E3A8A] text-white hover:bg-blue-700 text-xs h-8 sm:h-10 px-2 sm:px-3 rounded whitespace-nowrap"
            >
              Check Student Status
            </Button>
          </div>
        </div>
      </Card>
    ))}
  </div>
</div>

          {/* Student Fee Details - Mobile Only (<480px) */}
<div className="mb-6 sm:hidden">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-bold text-[#1E3A8A]">Student Fee Details</h2>
    <Button variant="link" className="text-[#1E3A8A] h-auto p-0 text-sm">
      See All
    </Button>
  </div>
  <div className="space-y-3">
    {[1, 2, 3].map((term) => (
      <Card key={term} className="overflow-hidden border border-gray-200">
        <div className="flex flex-col">
          {/*<div className="w-full h-1 bg-[#1E3A8A]"></div>*/}
          <div className="p-4 w-full">
            <div className="flex flex-col">
              <div className="mb-2">
                <p className="font-medium">Examination Fee</p>
                <p className="text-sm text-gray-500">Term {term}</p>
              </div>
              <div className="mb-3">
                <p className="font-medium">Rs. 3,800.00</p>
                <p className="text-sm text-gray-500">Due 18 Dec &apos;24</p>
              </div>
            </div>
            <div className="mt-2">
              <Button 
                className="w-full bg-[#1E3A8A] text-white hover:bg-blue-700 text-xs h-9 px-3 rounded"
              >
                Check Student Status
              </Button>
            </div>
          </div>
        </div>
      </Card>
    ))}
  </div>
</div>


          {/* Class Discipline */}
          <div>
  <h2 className="text-xl font-bold text-[#1E3A8A] mb-4">Class Discipline</h2>
  <div className="relative">
    <Card className="border border-gray-200 rounded-lg w-full">
      <CardContent className="p-4">
        <h3 className="font-medium mb-2">{disciplineItems[currentDisciplineIndex].title}</h3>
        <p className="text-sm text-gray-600 mb-3">
          {disciplineItems[currentDisciplineIndex].description}
        </p>
        <div className="text-sm text-gray-500">
          {disciplineItems[currentDisciplineIndex].teacher && (
            <p>Teacher: {disciplineItems[currentDisciplineIndex].teacher}</p>
          )}
          <p>Date: {disciplineItems[currentDisciplineIndex].date}</p>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <div className="h-6 w-6 rounded-full bg-slate-300 overflow-hidden">
            <User className="h-full w-full p-1" />
          </div>
          <span className="text-sm">Teacher Name</span>
        </div>
      </CardContent>
    </Card>
    
    <button
      onClick={handlePrev}
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
      aria-label="Previous"
    >
      <ChevronLeft className="h-5 w-5 text-[#1E3A8A]" />
    </button>
    
    <button
      onClick={handleNext}
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
      aria-label="Next"
    >
      <ChevronRight className="h-5 w-5 text-[#1E3A8A]" />
    </button>
    
    <div className="flex justify-center gap-2 mt-4">
      {disciplineItems.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full ${
            index === currentDisciplineIndex ? 'bg-[#1E3A8A]' : 'bg-gray-300'
          }`}
          onClick={() => setCurrentDisciplineIndex(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
</div>
        </>
      ) : (
        <>
          {/* Time Table */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#1E3A8A] mb-4">Time Table</h2>
            <div className="space-y-4">
              {[
                { subject: "Mathematics", time: "7:30 - 8:10", room: "11 A2", type: "Theory Class" },
                { subject: "Economics", time: "8:15 - 8:50", room: "11 A5", type: "Theory Class" },
                { subject: "Business Studies", time: "8:55 - 9:30", room: "12 A3", type: "Theory Class" },
              ].map((cls, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-[#1E3A8A]">{cls.subject}</h3>
                        <p className="text-xs text-gray-500">{cls.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{cls.time}</p>
                        <p className="text-sm">{cls.room}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

         {/* Marks and Notes */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <Card className="overflow-hidden relative">
    <CardContent className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-[#1E3A8A]">Marks</h3>
        <Select defaultValue="11A2-Economics">
          <SelectTrigger className="w-[180px] h-8 text-xs">
            <SelectValue placeholder="Select class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="11A2-Economics">11 A2 - Economics</SelectItem>
            <SelectItem value="11A2-Mathematics">11 A2 - Mathematics</SelectItem>
            <SelectItem value="12A3-Business">12 A3 - Business Studies</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Navigation buttons positioned on sides */}
      <Button 
        variant="ghost" 
        className="absolute left-0 top-1/2 -translate-y-1/2 h-full px-2 hover:bg-gray-100/50"
        onClick={() => {/* Handle previous */}}
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </Button>
      <Button 
        variant="ghost" 
        className="absolute right-0 top-1/2 -translate-y-1/2 h-full px-2 hover:bg-gray-100/50"
        onClick={() => {/* Handle next */}}
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </Button>
      
      {/* Chart Content */}
      <div className="px-8">
        <div className="h-48">
          <ChartContainer 
            config={{
              marks: {
                label: "Marks",
                color: "#1e40af"
              }
            }} 
            className="w-full h-full"
          >
            <LineChart 
              data={[
                { month: "Sep", marks: 65 },
                { month: "Oct", marks: 75 },
                { month: "Nov", marks: 70 },
                { month: "Dec", marks: 90 },
                { month: "Jan", marks: 95 },
                { month: "Feb", marks: 85 }
              ]}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis 
                dataKey="month" 
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis 
                hide={true}
                domain={[0, 100]}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="marks" 
                stroke="#1e40af" 
                strokeWidth={2}
                dot={{ r: 4, fill: "#1e40af" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
        </div>
        <div className="text-xs mt-4 text-center">
          <span className="font-medium">Class Average: 82%</span>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* Notes Card with Navigation */}
  <Card className="overflow-hidden relative">
    <CardContent className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-[#1E3A8A]">Recent Notes</h3>
        <Select defaultValue="11A2">
          <SelectTrigger className="w-[100px] h-8 text-xs">
            <SelectValue placeholder="Select class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="11A2">11 A2</SelectItem>
            <SelectItem value="11A5">11 A5</SelectItem>
            <SelectItem value="12A3">12 A3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Navigation buttons */}
      <Button 
        variant="ghost" 
        className="absolute left-0 top-1/2 -translate-y-1/2 h-full px-2 hover:bg-gray-100/50"
        onClick={() => {/* Handle previous */}}
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </Button>
      <Button 
        variant="ghost" 
        className="absolute right-0 top-1/2 -translate-y-1/2 h-full px-2 hover:bg-gray-100/50"
        onClick={() => {/* Handle next */}}
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </Button>

      {/* Notes Content */}
      <div className="px-8">
        <div className="space-y-6">
          {[
            {
              title: "Math Notes",
              description: "Integration notes for Chapter 8",
              date: "22 Nov &apos;24",
              teacher: "Teacher Name"
            },
            {
              title: "Economics Notes",
              description: "Market structures and competition",
              date: "18 Nov &apos;24",
              teacher: "Teacher Name"
            }
          ].map((note, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-[#1E3A8A]">{note.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{note.description}</p>
                <p className="text-xs text-gray-500 mt-1">Updated on {note.date}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="h-5 w-5 rounded-full bg-slate-300 overflow-hidden">
                    <User className="h-full w-full p-0.5" />
                  </div>
                  <span className="text-xs">{note.teacher}</span>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-[#1E3A8A]">
                View
              </Button>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
</div>

        </>
      )}
    </div>
  </div>
</div>

    </div>

)};

export default EducationDashboard;
