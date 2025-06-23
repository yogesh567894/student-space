"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Info, BookOpen, User } from "lucide-react";
import Image from "next/image";
import Sidebar from "@/app/student-dash/components/Sidebar";
import Side1 from "./components/Side1";
import Attendance from "../dash-comp/attendance";
import Announcement from "../dash-comp/announcement";
import Marks from "../dash-comp/marks";
import FocusMode from "../dash-comp/focusmode";
import ProfileStats from "@/app/student-dash/dash-comp/ProfileStats";

export default function StudentDashboard() {
  const [isMobile, setIsMobile] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState({
    schoolFee: true,
    commerceAPC: false,
    bookFee: true
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePaymentChange = (fee: keyof typeof paymentStatus) => {
    setPaymentStatus(prev => ({
      ...prev,
      [fee]: !prev[fee]
    }));
  };

  // Mobile Dashboard Component
  const MobileDashboard = () => {
    return (
      <div className="bg-gray-100 min-h-screen pb-6">
        {/* Header */}
        <div style={{backgroundImage: `url('/focus-bg.gif')`}} className="h-36 bg-cover bg-center relative">
        <header  className=" text-white p-4 flex items-center  justify-between">
         
         <div className="h-6 w-6">
          <Side1 />
         </div>
         {/*<Image src="/focus-bg.gif" alt="Background" fill style={{ objectFit: "contain" }} priority />*/}
     
        
         <div className="flex items-center gap-2">
           <Bell className="h-6 w-6" />
           {/* <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
             <Image src="/profile-placeholder.jpg" alt="Profile" width={32} height={32} />
           </div> */}
           <User className="h-5 w-5 " />
         </div>
       </header>
       <div className="text-white p-4 absolute bottom-0 left-0 right-0 ">
           <h1 className="text-lg font-bold">Aryan Patel, 11A2</h1>
           <p className="text-xs">Maharishi Vidya Mandir Senior Secondary School, Chetpet</p>
         </div>
        </div>
        
        <main className="px-4 space-y-4 mt-4 ">
          {/* Annual Day Invitation */}
          <Card className="rounded-xl overflow-hidden bg-blue-900">
            <CardContent className="p-0">
              <div className=" text-white p-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-base font-bold">42nd ANNUAL DAY INVITATION</h2>
                  <span className="text-xs">14 Nov&apos; 2024</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed">
                  Dear Parents, We cordially invite you to join us for our 42nd Annual Day Celebrations on Friday, 15th November 2024 in Kamarajar Arangam, Teynampet, Chennai at 3:00 PM. Regards Principal
                </p>
                <div className="flex justify-center mt-3 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"}`}></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          

          {/* Attendance and Focus Mode */}
          <div className="grid grid-cols-1 gap-4">
            <ProfileStats />
           <Attendance />
           <Marks />
            
            <FocusMode />
          </div>

          {/* Fee Payment Details */}
         

          


          {/* Class Timetable */}
          <Card className="rounded-xl">
            <CardContent className="p-4">
              <h2 className="text-blue-900 font-bold mb-3">Class Timetable</h2>
              <div className="flex gap-1 mb-4">
                {[
                  { day: "M", active: true },
                  { day: "Tu", active: false },
                  { day: "W", active: false },
                  { day: "Th", active: false },
                  { day: "F", active: false },
                  { day: "Sa", active: false }
                ].map((item) => (
                  <Button 
                    key={item.day} 
                    variant={item.active ? "default" : "outline"} 
                    size="sm" 
                    className={`h-7 px-2 ${item.active ? "bg-blue-900 text-white" : "text-blue-900"}`}
                  >
                    {item.day}
                  </Button>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  { subject: "Mathematics", time: "7:30-8:10" },
                  { subject: "Accountancy", time: "7:30-8:10" },
                  { subject: "Business Studies", time: "7:30-8:10" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">{item.subject}</p>
                      <p className="text-xs text-gray-500">{item.time}</p>
                    </div>
                    <Info className="h-4 w-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

            {/* Upcoming Events */}
          <Card className="rounded-xl">
            <CardContent className="p-4">
              <h2 className="text-blue-900 font-bold mb-3">Upcoming Events</h2>
              <p className="text-sm text-gray-500">No upcoming events</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardContent className="p-4">
              <h2 className="text-blue-900 font-bold mb-3">Fee Payment Details</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-1/3">
                    <div className="border-l-4 border-green-500 pl-2">
                      <p className="text-sm font-medium">School Fee</p>
                      <p className="text-xs text-gray-500">Term 2</p>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <p className="text-sm font-medium">Rs. 36,800.00</p>
                    <p className="text-xs text-gray-500">Due 18 Nov&apos; 24</p>
                  </div>
                  <div className="w-1/3 flex items-center">
                    <input 
                      type="checkbox" 
                      checked={paymentStatus.schoolFee} 
                      onChange={() => handlePaymentChange('schoolFee')}
                      className="mr-2" 
                    />
                    <span className="text-xs">{paymentStatus.schoolFee ? "Payment Received" : "Payment Pending"}</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/3">
                    <div className={`border-l-4 ${paymentStatus.commerceAPC ? 'border-green-500' : 'border-red-500'} pl-2`}>
                      <p className="text-sm font-medium">Commerce APC...</p>
                      <p className="text-xs text-gray-500">One Time</p>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <p className="text-sm font-medium">Rs. 250.00</p>
                    <p className="text-xs text-gray-500">Due 18 Nov&apos; 24</p>
                  </div>
                  <div className="w-1/3 flex items-center">
                    <input 
                      type="checkbox" 
                      checked={paymentStatus.commerceAPC} 
                      onChange={() => handlePaymentChange('commerceAPC')}
                      className="mr-2" 
                    />
                    <span className="text-xs">{paymentStatus.commerceAPC ? "Payment Received" : "Payment Pending"}</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/3">
                    <div className={`border-l-4 ${paymentStatus.bookFee ? 'border-green-500' : 'border-red-500'} pl-2`}>
                      <p className="text-sm font-medium">Book Fee</p>
                      <p className="text-xs text-gray-500">One Time</p>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <p className="text-sm font-medium">Rs. 250.00</p>
                    <p className="text-xs text-gray-500">Due 18 Nov&apos; 24</p>
                  </div>
                  <div className="w-1/3 flex items-center">
                    <input 
                      type="checkbox" 
                      checked={paymentStatus.bookFee} 
                      onChange={() => handlePaymentChange('bookFee')}
                      className="mr-2" 
                    />
                    <span className="text-xs">{paymentStatus.bookFee ? "Payment Received" : "Payment Pending"}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
        


          {/* Math Notes */}
          <Card className="rounded-xl">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-4 w-4" />
                <h2 className="text-blue-900 font-bold">Math Notes</h2>
              </div>
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="text-sm font-medium">Integration notes for Chapter 8</p>
                  <p className="text-xs text-gray-500">Uploaded on 22 Nov&apos;24</p>
                </div>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-gray-300 overflow-hidden">
                  <Image src="/teacher-placeholder.jpg" alt="Teacher" width={24} height={24} />
                </div>
                <p className="text-xs">Teacher Name</p>
              </div>
            </CardContent>
          </Card>

          {/* Marks */}
          {/*<Card className="rounded-xl">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-blue-900 font-bold">Marks</h2>
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
              </div>
              <div className="h-32 mb-3">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={marksData.map(item => ({ name: item.name, score: item.score }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Line type="monotone" dataKey="score" stroke="#1e3a8a" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-between">
                {marksData.map((test, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-xs font-medium">{test.name}</p>
                    <p className="text-xs">{test.score}/{test.total}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>*/}

          {/* Upcoming Examinations */}
          <Card className="rounded-xl bg-blue-900 text-white">
            <CardContent className="p-4">
              <h2 className="font-bold mb-2">Upcoming Examinations</h2>
              <p className="text-sm font-medium">Mathematics - Cluster Examinations</p>
              <p className="text-xs">27 Nov&apos;24 • 9:00 am - 11:30 am</p>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  };

  // Desktop Dashboard Component
  const DesktopDashboard = () => {
    return (
      <div className="flex h-screen ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className=" text-white relative rounded-lg overflow-hidden ">
   
    
    <div className="relative m-6 mb-0 rounded-lg overflow-hidden h-[250px]">
      <div className="absolute inset-0 z-0">
        <Image  src="/focus-bg.gif" alt="Background" fill style={{ objectFit: "cover" }} priority/>
      </div>
      <div className="relative z-10 p-6 flex justify-end">
        <div className="flex items-center gap-4">
          <Bell className="h-6 w-6" />
          {/* <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden">
            <Image src="/mock-night-city.jpg" alt="Profile" width={40} height={40} className="object-cover" />
          </div> */}
          <User className="h-7 w-6 text-white" />
        </div>
      </div>
     <div className="text-white p-4 absolute bottom-0 left-0 right-0 ">
           <h1 className="text-2xl font-bold pb-0">Aryan Patel, 11A2</h1>
           <p className="text-lg">Maharishi Vidya Mandir Senior Secondary School, Chetpet</p>
         </div>
    </div>
 
</header>


        {/* Content */}
        <div className="p-6 grid grid-cols-1   ">
          <Announcement />
          <ProfileStats />

          {/* Fee Payment Details */}
         
          <div/>

          <div className="p-2  grid grid-cols-2  gap-6">
            <Attendance />

            {/* Marks */}
           {/*<Card>
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
            </Card>*/}
            <Marks />


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
            </div>

          
           
                    <div className="p-2  grid grid-cols-2  gap-6">


            {/* Upcoming Events */}
                        <div className="space-y-6">


           <Card className="col-span-full mb-6 ">
            <CardHeader>
              <CardTitle>Fee Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-6  px-6">
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
                <div className="flex items-start py-2 ">
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

            </div>

            

            {/* Math Notes */}
            <div className="space-y-6">
              <Card>
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

              
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p>No upcoming events</p>
              </CardContent>
            </Card>

              
            </div>

           
          </div>

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
      </div>
    </div>
  );
}
  
    return isMobile ? <MobileDashboard /> : <DesktopDashboard />;
  }