"use client";

import { useState } from "react";
import { Menu, Bell, User } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Sidebar from "@/app/teach-dash/components/Sidebar";
import ClassAttendance from "./classAttendance";
import PersonalAttendance from "./personalAttendance";

export default function AttendancePage() {
  const [tab, setTab] = useState<"class" | "personal">("class");

  return (
    <div className="flex min-h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:block w-64 flex-shrink-0 border-r border-gray-200">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-x-auto">
        {/* Header */}
        <header className="flex items-center justify-between py-3 border-b border-gray-300 px-4 md:px-8">
          <div className="flex items-center gap-2">
            <Menu className="h-6 w-6 md:hidden" />
            <h1 className="text-xl sm:text-2xl font-bold text-[#1E3A8A] hidden md:block">
              Attendance
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="h-5 w-5" />
            <User className="h-5 w-5 text-gray-600" />
          </div>
        </header>

        {/* Tabs and Content */}
        <main className="w-full flex justify-center md:justify-start">
          <div className="w-full max-w-[90rem] px-6 md:px-12 py-6 mx-auto">
            <h1 className="md:hidden font-semibold text-lg text-[#1E3A8A] mb-4">Attendance</h1>

            <Tabs value={tab} onValueChange={(val) => setTab(val as "class" | "personal")} className="mb-4">
              <TabsList className="p-0 flex gap-0 w-fit bg-transparent border-b border-gray-200">
                <TabsTrigger
                  value="class"
                  className={`px-6 py-3 text-md font-semibold border-b-5 transition-colors duration-200 ${
                    tab === "class"
                      ? "border-[#1E3A8A] text-[#1E3A8A]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Class Attendance
                </TabsTrigger>
                <TabsTrigger
                  value="personal"
                  className={`px-6 py-3 text-md font-semibold border-b-5 transition-colors duration-200 ${
                    tab === "personal"
                      ? "border-[#1E3A8A] text-[#1E3A8A]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Personal Attendance
                </TabsTrigger>
              </TabsList>

              <TabsContent value="class">
                <ClassAttendance />
              </TabsContent>

              <TabsContent value="personal">
                <PersonalAttendance />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
