// app/page.tsx
"use client";

import { useState } from "react";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const router = useRouter();

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    if (selectedRole) {
      // Redirect to the appropriate dashboard based on role
      switch (selectedRole.toLowerCase()) {
        case "student":
          router.push("/student-dash");
          break;
        case "teacher":
          router.push("/teach-dash");
          break;
        case "admin":
          router.push("/admin-dash");
          break;
        default:
          router.push("/login");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Welcome to School CRM</h1>
        <p className="text-gray-600 mb-10">Please select your role to continue</p>
        
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-blue-800">Select user type</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <RoleCard 
            title="Student"
            // imagePath="/student.png" 
            isSelected={selectedRole === "student"}
            onClick={() => handleRoleSelect("student")}
            description="Access assignments, marks, and attendance"
          />
          
          <RoleCard 
            title="Teacher"
            // imagePath="/teacher.png" 
            isSelected={selectedRole === "teacher"}
            onClick={() => handleRoleSelect("teacher")}
            description="Manage classes, assignments, and student evaluation"
          />
          
          <RoleCard 
            title="Admin"
            // imagePath="/admin.png" 
            isSelected={selectedRole === "ADMIN"}
            onClick={() => handleRoleSelect("ADMIN")}
            description="Oversee school operations and user management"
          />
        </div>
        
        <Button 
          className="bg-blue-700 hover:bg-[#1E3A8A] text-white px-8 py-2 rounded-md transition-all"
          disabled={!selectedRole}
          onClick={handleContinue}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

interface RoleCardProps {
  title: string;
  // imagePath: string;
  isSelected: boolean;
  onClick: () => void;
  description: string;
}

function RoleCard({ title, isSelected, onClick, description }: RoleCardProps) {
  return (
    <Card 
      className={`overflow-hidden cursor-pointer transition-all duration-200 transform hover:scale-105 ${
        isSelected ? 'ring-2 ring-blue-600 shadow-lg' : 'hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="p-6 flex flex-col items-center">
          <div className="w-24 h-24 mb-4 relative">
            <div className="w-full h-full relative">
              {/* Replace with your actual images */}
              <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-4xl">
                  {title === "Student" ? "🧑‍🎓" : title === "Teacher" ? "👨‍🏫" : "👨‍💼"}
                </span>
              </div>
            </div>
          </div>
          <h3 className="font-semibold text-blue-800 text-lg">{title}</h3>
          <p className="text-sm text-gray-500 mt-2 text-center">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
