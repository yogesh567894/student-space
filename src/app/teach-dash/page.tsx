"use client";

import React, { useState } from "react";
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
  User
} from "lucide-react";
import Sidebar from "./components/Sidebar";
import { 
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

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="bg-white p-4 flex justify-end items-center shadow-sm top-0 z-30">
          <div className="flex items-center gap-4">
            <Bell className="h-6 w-6 text-slate-700" />
            <div className="h-8 w-8 rounded-full bg-slate-300 overflow-hidden">
              <User className="h-full w-full p-1" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6 max-w-5xl">
          {/* Upcoming Class/Meeting Card */}
          <Card className="mb-6 bg-[#1E3A8A] text-white">
            <CardContent className="pt-6 pb-4">
              {activeTab === "home" ? (
                <>
                  <h3 className="font-bold mb-1">Upcoming Class</h3>
                  <p className="text-right text-sm mb-2">10:40 am, 14 Nov 2024</p>
                  <div className="text-sm">
                    <p>Subject : Economics</p>
                    <p>Venue : 11 A2</p>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="font-bold mb-1">Meeting Remainder</h3>
                  <p className="text-right text-sm mb-2">10:40 am, 14 Nov 2024</p>
                  <div className="text-sm">
                    <p>Teacher&apos;s meet for the next event to be conducted.</p>
                    <p>Time : 10:40 am, 14 Nov 2024</p>
                    <p>Venue : 2nd floor Staff Room</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button 
              variant={activeTab === "home" ? "default" : "outline"}
              className={`${activeTab === "home" ? "bg-[#1E3A8A] text-white" : "bg-white text-[#1E3A8A]"} border border-[#1E3A8A] hover:bg-blue-700 hover:text-white h-16`}
              onClick={() => setActiveTab("home")}
            >
              Home Class
            </Button>
            <Button 
              variant={activeTab === "handling" ? "default" : "outline"}
              className={`${activeTab === "handling" ? "bg-[#1E3A8A] text-white" : "bg-white text-[#1E3A8A]"} border border-[#1E3A8A] hover:bg-blue-700 hover:text-white h-16`}
              onClick={() => setActiveTab("handling")}
            >
              Handling Class
            </Button>
          </div>

          {activeTab === "home" ? (
            <>
                  {/* Class Attendance */}
                  <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold text-[#1E3A8A]">Class Attendance</h2>
                      <Button variant="outline" className="bg-[#1E3A8A] text-white hover:bg-blue-700 hover:text-white text-sm px-4 py-1 h-auto">
                      Update Attendance
                      </Button>
                  </div>
                  <Card className="border rounded-lg overflow-hidden">
                      <CardContent className="p-4">
                      <div className="flex items-start gap-6">
                          <div className="relative w-20 h-20 flex-shrink-0">
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
                              <span className="text-xl font-bold">{attendanceView === 'monthly' ? '74%' : '80%'}</span>
                          </div>
                          </div>
                          <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                              <h3 className="font-bold text-[#1E3A8A]">November 2024</h3>
                              <div className="flex gap-1">
                              <button 
                                  onClick={() => setAttendanceView('yearly')}
                                  className={`w-6 h-6 flex items-center justify-center border border-gray-300 ${attendanceView === 'yearly' ? 'bg-[#1E3A8A] text-white' : 'bg-white text-gray-800'} text-xs`}
                              >
                                  Y
                              </button>
                              <button 
                                  onClick={() => setAttendanceView('monthly')}
                                  className={`w-6 h-6 flex items-center justify-center border border-gray-300 ${attendanceView === 'monthly' ? 'bg-[#1E3A8A] text-white' : 'bg-white text-gray-800'} text-xs`}
                              >
                                  M
                              </button>
                              </div>
                          </div>
                          <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="w-36">Total Working days</span>
                  <span className="font-medium">: {attendanceView === 'monthly' ? '20' : '180'}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-36">Class Strength</span>
                  <span className="font-medium">: 56</span>
                </div>
                <div className="flex items-center">
                  <span className="w-36">Average Attendance</span>
                  <span className="font-medium">: {attendanceView === 'monthly' ? '74%' : '82%'}</span>
                </div>
              </div>

                          </div>
                  </div>
                  </CardContent>
              </Card>
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
  <div className="space-y-3">
    {[1, 2, 3].map((term) => (
      <Card key={term} className="overflow-hidden border border-gray-200">
        <div className="flex h-full">
          <div className="w-1 bg-[#1E3A8A] flex-shrink-0 h-full"></div>
          <div className="flex-1 p-4 flex justify-between items-center">
            <div className="flex-shrink-0">
              <p className="font-medium whitespace-nowrap">Examination Fee</p>
              <p className="text-sm text-gray-500 whitespace-nowrap">Term {term}</p>
            </div>
{/* <<<<<<< HEAD
            <div className="space-y-4">
              {[1, 2, 3].map((term) => (
                <Card key={term} className="overflow-hidden">
                  <div className="flex">
                    <div className="w-1 bg-blue-800 flex-shrink-0"></div>
                    <div className="flex-1 p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium">Examination Fee</p>
                        <p className="text-sm text-gray-500">Term {term}</p>
                      </div>
                      <div className="text-right mr-4">
                        <p className="font-medium">Rs. 3,800.00</p>
                        <p className="text-sm text-gray-500">Due 18 Dec &apos;24</p>
                      </div>
                    </div>
                    <Button variant="outline" className="m-2 bg-blue-800 text-white hover:bg-blue-700 hover:text-white text-xs h-auto py-1">
                      Check Student Status
                    </Button>
                  </div>
                </Card>
              ))}
======= */}
            <div className="text-right mr-4 flex-shrink-0">
              <p className="font-medium whitespace-nowrap">Rs. 3,800.00</p>
              <p className="text-sm text-gray-500 whitespace-nowrap">Due 18 Dec &apos;24</p>
{/* >>>>>>> d720cf90efda2d2f32154caeaa4501b8079cb3b6 */}
            </div>
          </div>
          <div className="flex items-center pr-2">
            <Button 
              className="bg-[#1E3A8A] text-white hover:bg-blue-700 text-xs h-10 px-3 rounded whitespace-nowrap"
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
{/* <<<<<<< HEAD
            <h2 className="text-xl font-bold text-blue-800 mb-4">Class Discipline</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-2">Complaints</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Couple of students caught for misbehaviour in the Economics class.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Teacher : Divya S</p>
                    <p>Date : 28 Nov &apos;24</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="h-6 w-6 rounded-full bg-slate-300 overflow-hidden">
                      <User className="h-full w-full p-1" />
                    </div>
                    <span className="text-sm">Teacher Name</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-2">Maintenance Issues</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Class projector not working efficiently.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Date : 28 Nov &apos;24</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="h-6 w-6 rounded-full bg-slate-300 overflow-hidden">
                      <User className="h-full w-full p-1" />
                    </div>
                    <span className="text-sm">Teacher Name</span>
                  </div>
                </CardContent>
              </Card>
            </div>
======= */}
  <h2 className="text-xl font-bold text-[#1E3A8A] mb-4">Class Discipline</h2>
  <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:grid md:grid-cols-2 md:gap-4 md:overflow-x-visible">
    <Card className="border border-gray-200 rounded-lg flex-shrink-0 w-[85%] mr-3 md:w-auto md:mr-0">
      <CardContent className="p-4">
        <h3 className="font-medium mb-2">Complaints</h3>
        <p className="text-sm text-gray-600 mb-3">
          Couple of students caught for misbehaviour in the Economics class.
        </p>
        <div className="text-sm text-gray-500">
          <p>Teacher : Divya S</p>
          <p>Date : 28 Nov &apos;24</p>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <div className="h-6 w-6 rounded-full bg-slate-300 overflow-hidden">
            <User className="h-full w-full p-1" />
{/* >>>>>>> d720cf90efda2d2f32154caeaa4501b8079cb3b6 */}
          </div>
          <span className="text-sm">Teacher Name</span>
        </div>
      </CardContent>
    </Card>
    <Card className="border border-gray-200 rounded-lg flex-shrink-0 w-[85%] md:w-auto">
      <CardContent className="p-4">
        <h3 className="font-medium mb-2">Maintenance Issues</h3>
        <p className="text-sm text-gray-600 mb-3">
          Class projector not working efficiently.
        </p>
        <div className="text-sm text-gray-500">
          <p>Date : 28 Nov &apos;24</p>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <div className="h-6 w-6 rounded-full bg-slate-300 overflow-hidden">
            <User className="h-full w-full p-1" />
          </div>
          <span className="text-sm">Teacher Name</span>
        </div>
      </CardContent>
    </Card>
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
  <Card className="overflow-hidden">
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
      <div className="flex justify-between text-xs mt-4">
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
        <span>Dec</span>
        <span>Jan</span>
        <span>Feb</span>
      </div>
      <div className="flex justify-between text-xs mt-2">
        <span>0%</span>
        <span className="text-center">Class Average: 82%</span>
        <span>100%</span>
      </div>
    </CardContent>
  </Card>
  <Card className="overflow-hidden">
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
{/* <<<<<<< HEAD
                <div className="h-40 flex items-center justify-center">
                  <div className="w-full">
                    <div className="flex justify-between text-xs mb-1">
                      <span>0%</span>
                      <span>Class Average: 82%</span>
                      <span>100%</span>
                    </div>
                    <svg viewBox="0 0 200 100" className="w-full h-20">
                      <polyline
                        points="10,90 40,60 70,70 100,30 130,50 160,20 190,40"
                        fill="none"
                        stroke="#1e40af"
                        strokeWidth="2"
                      />
                      <circle cx="10" cy="90" r="3" fill="#1e40af" />
                      <circle cx="40" cy="60" r="3" fill="#1e40af" />
                      <circle cx="70" cy="70" r="3" fill="#1e40af" />
                      <circle cx="100" cy="30" r="3" fill="#1e40af" />
                      <circle cx="130" cy="50" r="3" fill="#1e40af" />
                      <circle cx="160" cy="20" r="3" fill="#1e40af" />
                      <circle cx="190" cy="40" r="3" fill="#1e40af" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Recent Notes</h3>
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
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Math Notes</h4>
                    <p className="text-xs text-gray-500">Integration notes for Chapter 8</p>
                    <p className="text-xs text-gray-500">Updated on 22 Nov &apos;24</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="h-5 w-5 rounded-full bg-slate-300 overflow-hidden">
                        <User className="h-full w-full p-0.5" />
                      </div>
                      <span className="text-xs">Teacher Name</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
======= */}
                <span className="text-xs">{note.teacher}</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-[#1E3A8A]">
              View
            </Button>
{/* >>>>>>> d720cf90efda2d2f32154caeaa4501b8079cb3b6 */}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
</div>

        </>
      )}
    </main>
  </div>
</div>
)}
export default EducationDashboard;
