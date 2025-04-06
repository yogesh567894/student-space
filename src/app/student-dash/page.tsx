// src/app/page.tsx
"use client";

import { useState } from "react";
import { Bell, BookOpen, ChevronDown, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart } from "@/components/ui/line-chart";
import Attendance from "../dash-comp/attendance";
import Announcement from "../dash-comp/announcement";

import Sidebar from "@/app/student-dash/components/Sidebar";
import Image from "next/image";
 

export default function Dashboard() {
  const [selectedSubject, setSelectedSubject] = useState("Maths");
  const [paymentStatus, setPaymentStatus] = useState({
    schoolFee: true,
    commerceAPC: false,
    bookFee: true
  });

  const handlePaymentChange = (fee: keyof typeof paymentStatus) => {
    setPaymentStatus(prev => ({
      ...prev,
      [fee]: !prev[fee]
    }));
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
 
      <Sidebar />
 

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
 
        <header className="bg-[#1E3A8A] p-6 text-white relative">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/focus-bg.gif" 
              alt="Background" 
              fill 
              style={{ objectFit: "cover", opacity: 0.7 }}
              priority
            />
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-4 z-10">
            <Bell className="h-6 w-6 cursor-pointer" />
            <div className="h-10 w-10 rounded-full bg-gray-300 cursor-pointer overflow-hidden">
              <Image src="/mock-night-city.jpg" alt="Profile" width={40} height={40} className="object-cover" />
            </div>
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold">Aryan Patel, 11A2</h2>
            <p className="text-lg">Maharishi Vidya Mandir Senior Secondary School, Chetpet</p>
          </div>

        </header>

        {/* Content */}
        <div className="p-6 grid grid-cols-1  gap-6">
          {/* Annual Day Invitation 
          <Card className="col-span-full bg-[#1E3A8A] text-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">42nd ANNUAL DAY INVITATION</h3>
                <span className="text-lg">14 Nov' 2024</span>
              </div>
              <p className="mt-4">
                Dear Parents, We cordially invite you to join us for our 42nd Annual Day Celebrations on
                Friday, 15th November 2024 in Kamarajar Arangam, Teynampet, Chennai at 3:00 PM.
              </p>
              <p className="mt-2">Regards Principal</p>
              <div className="flex justify-center mt-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-2 w-2 rounded-full bg-white"></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>*/}
          
          <Announcement />
         
          


          {/* Fee Payment Details */}
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Fee Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-6 px-6">
                {/* School Fee */}
                <div className="flex items-start py-2">
                  <div className="w-1/3">
                    <div className="border-l-4 border-green-500 pl-2 h-full">
                      <p className="font-medium">School Fee</p>
                      <p className="text-sm text-gray-500">Term 2</p>
                    </div>
                  </div>
                  <div className="w-1/6 text-right">
                    <p className="font-medium">Rs. 36,800.00</p>
                    <p className="text-sm text-gray-500">Due 18 Nov&apos; 24</p>
                  </div>
                  <div className="w-1/4 flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        checked={paymentStatus.schoolFee} 
                        onChange={() => handlePaymentChange('schoolFee')} 
                        className="h-4 w-4" 
                      />
                      <span>{paymentStatus.schoolFee ? "Payment Received" : "Payment Pending"}</span>
                    </div>
                  </div>
                  <div className="w-1/4 flex justify-end">
                    <Button className="bg-blue-800 text-white hover:bg-blue-700">
                      Download Invoice
                    </Button>
                  </div>
                </div>

                {/* Commerce APC */}
                <div className="flex items-start py-2">
                  <div className="w-1/3">
                    <div className={`border-l-4 ${paymentStatus.commerceAPC ? 'border-green-500' : 'border-red-500'} pl-2 h-full`}>
                      <p className="font-medium">Commerce APC...</p>
                      <p className="text-sm text-gray-500">One Time</p>
                    </div>
                  </div>
                  <div className="w-1/6 text-right">
                    <p className="font-medium">Rs. 250.00</p>
                    <p className="text-sm text-gray-500">Due 18 Nov&apos; 24</p>
                  </div>
                  <div className="w-1/4 flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        checked={paymentStatus.commerceAPC} 
                        onChange={() => handlePaymentChange('commerceAPC')} 
                        className="h-4 w-4" 
                      />
                      <span>{paymentStatus.commerceAPC ? "Payment Received" : "Payment Pending"}</span>
                    </div>
                  </div>
                  <div className="w-1/4 flex justify-end">
                    <Button className="bg-blue-800 text-white hover:bg-blue-700">
                      Download Invoice
                    </Button>
                  </div>
                </div>

                {/* Book Fee */}
                <div className="flex items-start py-2">
                  <div className="w-1/3">
                    <div className={`border-l-4 ${paymentStatus.bookFee ? 'border-green-500' : 'border-red-500'} pl-2 h-full`}>
                      <p className="font-medium">Book Fee</p>
                      <p className="text-sm text-gray-500">One Time</p>
                    </div>
                  </div>
                  <div className="w-1/6 text-right">
                    <p className="font-medium">Rs. 250.00</p>
                    <p className="text-sm text-gray-500">Due 18 Nov&apos; 24</p>
                  </div>
                  <div className="w-1/4 flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        checked={paymentStatus.bookFee} 
                        onChange={() => handlePaymentChange('bookFee')} 
                        className="h-4 w-4" 
                      />
                      <span>{paymentStatus.bookFee ? "Payment Received" : "Payment Pending"}</span>
                    </div>
                  </div>
                  <div className="w-1/4 flex justify-end">
                    <Button className="bg-blue-800 text-white hover:bg-blue-700">
                      Download Invoice
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div/>


          {/* Attendance */}
          {/*<Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Attendance</CardTitle>
              <Tabs defaultValue="Y">
                <TabsList>
                  <TabsTrigger value="Y">Y</TabsTrigger>
                  <TabsTrigger value="M">M</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-medium mb-4">November 2024</h3>
                <div className="relative h-40 w-40">
                  <div className="h-40 w-40 rounded-full bg-gray-200"></div>
                  <div className="absolute top-0 left-0 h-40 w-40">
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                      <circle 
                        cx="50" cy="50" r="40" 
                        fill="transparent" 
                        stroke="#1E3A8A" 
                        strokeWidth="20" 
                        strokeDasharray="251.2" 
                        strokeDashoffset="50.24" 
                        transform="rotate(-90 50 50)" 
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold">80%</span>
                  </div>
                </div>
                <div className="mt-6 w-full">
                  <div className="flex justify-between">
                    <span>Total Working days</span>
                    <span>: 20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>No. Present</span>
                    <span>: 16</span>
                  </div>
                  <div className="flex justify-between">
                    <span>No. Absent</span>
                    <span>: 04</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">Last updated on 24 Nov'24</p>
              </div>
            </CardContent>
          </Card>*/}
                  <div className="p-6 grid grid-cols-2  gap-6">


          <Attendance />

          {/* Marks */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Marks</CardTitle>
              <div className="relative">
                <select 
                  className="appearance-none bg-blue-800 text-white px-4 py-1 pr-8 rounded"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                >
                  <option>Maths</option>
                  <option>Science</option>
                  <option>English</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-40">
                <LineChart />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <p>FT1 - 28/35</p>
                  <p>FT1 - 28/35</p>
                </div>
                <div className="text-center">
                  <p>FT1 - 28/35</p>
                  <p>FT1 - 28/35</p>
                </div>
                <div className="text-center">
                  <p>FT1 - 28/35</p>
                  <p>FT1 - 28/35</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Class Timetable */}
          <Card>
            <CardHeader>
              <CardTitle>Class Timetable</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-6 gap-1 mb-4">
                {["M", "Tu", "W", "Th", "F", "Sa"].map((day) => (
                  <div key={day} className={`text-center p-1 ${day === "M" ? "bg-blue-800 text-white" : "border"}`}>
                    {day}
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  { subject: "Mathematics", time: "7:30-8:10" },
                  { subject: "Accountancy", time: "7:30-8:10" },
                  { subject: "Business Studies", time: "7:30-8:10" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.subject}</p>
                      <p className="text-sm text-gray-500">{item.time}</p>
                    </div>
                    <Info className="h-5 w-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Focus Mode */}
 
          <div className="bg-[#1A2234] rounded-lg overflow-hidden text-white relative">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/focus-bg.gif" 
                alt="Focus Background" 
                fill 
                style={{ objectFit: "cover", opacity: 0.7 }}
                priority
              />
            </div>
            <div className="p-6 flex flex-col items-center justify-center h-full relative z-10">
 
              <h3 className="text-2xl font-bold mb-2">Focus Mode</h3>
              <p className="mb-6">Pomodoro Timer</p>
            </div>
          </div>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p>No upcoming events</p>
            </CardContent>
          </Card>

          {/* Math Notes */}
          <div className="space-y-6"><Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Math Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p>Integration notes for Chapter 8</p>
                    <p className="text-sm text-gray-500">Uploaded on 22 Nov&apos;24</p>
                  </div>
                  <Info className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                  <span>Teacher Name</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1E3A8A] text-white">
            <CardHeader>
              <CardTitle>Upcoming Examinations</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className="font-medium">Mathematics - Cluster Examinations</p>
                <p>27 Nov&apos;24 - 9:00 am - 11:30 am</p>
              </div>
            </CardContent>
          </Card>
          </div>
          

          {/* Upcoming Examinations */}
          
        </div>
        </div>
      </div>
    </div>
  );
}
