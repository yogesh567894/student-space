"use client";
import { BookOpen, Download, Search, Users, FileText, Bookmark, Bell, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Sidebar from "../student-dash/components/Sidebar";
import Side1 from "../student-dash/components/Side1";
import { useState, useEffect } from "react";

export default function SubjectsSyllabusPage() {
  // State for filters and search
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("XI-A Commerce");
  const [selectedTeacher, setSelectedTeacher] = useState("all");
  const [activeTab, setActiveTab] = useState("mathematics");
  const [notificationCount, setNotificationCount] = useState(3);
  const [isSubjectsDropdownOpen, setIsSubjectsDropdownOpen] = useState<boolean>(false);
  // Add screen width state near the top of the component
  const [screenWidth, setScreenWidth] = useState<number>(0);

  // Sample data - in a real app, this would come from an API
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: "Mathematics",
      class: "XI-A Commerce",
      teacher: "Mrs. Divya V.",
      syllabus: "Chapters 1-12",
      textbook: "Mathematics for Commerce - Vol. II",
      resources: 5
    },
    {
      id: 2,
      name: "Accountancy",
      class: "XI-A Commerce",
      teacher: "Mrs. Geetha R.",
      syllabus: "Chapters 1-8, Practicals",
      textbook: "Accountancy Principles - CBSE",
      resources: 3
    },
    {
      id: 3,
      name: "Computer Science",
      class: "XI-A Commerce",
      teacher: "Mr. Yogeshwaran V",
      syllabus: "Python Programming, Database Concepts",
      textbook: "Computer Science with Python",
      resources: 7
    },
    {
      id: 4,
      name: "Business Studies",
      class: "XI-A Commerce",
      teacher: "Mrs. Divya V.",
      syllabus: "Business Environment, Marketing",
      textbook: "Business Studies - NCERT",
      resources: 4
    },
    {
      id: 5,
      name: "Economics",
      class: "XI-A Commerce",
      teacher: "Mr. Rajesh K.",
      syllabus: "Micro & Macro Economics",
      textbook: "Introductory Economics",
      resources: 2
    }
  ]);

  const syllabusDetails = {
    mathematics: [
      { unit: "I", topic: "Relations and Functions", chapters: ["1. Relations", "2. Functions"] },
      { unit: "II", topic: "Algebra", chapters: ["3. Matrices", "4. Determinants"] },
      { unit: "III", topic: "Calculus", chapters: ["5. Continuity", "6. Differentiation", "7. Applications of Derivatives"] },
      { unit: "IV", topic: "Probability", chapters: ["8. Probability"] }
    ],
    accountancy: [
      { unit: "I", topic: "Financial Statements", chapters: ["1. Introduction", "2. Preparation"] },
      { unit: "II", topic: "Accounting Ratios", chapters: ["3. Liquidity Ratios", "4. Profitability Ratios"] },
      { unit: "III", topic: "Computerized Accounting", chapters: ["5. Basics", "6. Practical"] }
    ],
    computer: [
      { unit: "I", topic: "Python Programming", chapters: ["1. Basics", "2. Functions", "3. OOP"] },
      { unit: "II", topic: "Database Concepts", chapters: ["4. SQL", "5. Normalization"] },
      { unit: "III", topic: "Computer Networks", chapters: ["6. Basics", "7. Protocols"] }
    ]
  };

  const classes = ["XI-A Commerce", "XI-B Commerce", "XII-A Commerce", "XII-B Commerce"];
  const teachers = ["Mrs. Divya V.", "Mr. Yogeshwaran V", "Mrs. Geetha R.", "Mr. Rajesh K."];
  const subjectsList = ["Mathematics", "Accountancy", "Computer Science"];

  // Filter subjects based on search and filters
  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         subject.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass ? subject.class === selectedClass : true;
    const matchesTeacher = selectedTeacher === "all" ? true : subject.teacher === selectedTeacher;
    
    return matchesSearch && matchesClass && matchesTeacher;
  });

  // Function to handle syllabus download
  const handleDownloadSyllabus = (subjectName: string) => {
    console.log(`Downloading syllabus for ${subjectName}`);
    // In a real app, this would trigger a file download
    alert(`Downloading syllabus for ${subjectName}`);
  };

  // Function to handle view details
  const handleViewDetails = (subjectId: number) => {
    console.log(`Viewing details for subject ID ${subjectId}`);
    const subject = subjects.find(s => s.id === subjectId);
    if (subject) {
      setActiveTab(subject.name.toLowerCase().replace(/\s+/g, '-'));
    }
  };

  // Function to clear notifications
  const clearNotifications = () => {
    setNotificationCount(0);
  };

  // Add useEffect for screen width tracking
  useEffect(() => {
    // Set initial width
    setScreenWidth(window.innerWidth);

    // Add resize listener
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative')) {
        setIsSubjectsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex min-h-screen h-screen overflow-hidden bg-white">
      {screenWidth > 768 && <Sidebar />}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-6"> {/* Reduced padding for mobile */}
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 relative">
          <div className="flex items-center">
            {screenWidth <= 768 && (
              <div className="mr-2">
                <Side1 />
              </div>
            )}
          </div>

          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-[#1E3A8A]">
              Subjects & Syllabus
            </h1>
          </div>

          {/* Notification area */}
          <div className="flex items-center">
            {screenWidth <= 768 ? (
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4 text-gray-600" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </Button>
            ) : (
              <div className="flex items-center gap-4 pt-4 pb-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5 text-gray-600" />
                  {notificationCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {notificationCount}
                    </span>
                  )}
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5 text-gray-600" />
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Content wrapper */}
        <div className="space-y-4 sm:space-y-6">
          {/* Filters */}
        {/*  <div className="grid grid-cols-1 gap-3 mb-4">
            <Select 
              value={selectedClass}
              onValueChange={(value) => setSelectedClass(value)}
            >
              <SelectTrigger className="bg-gray-50 border-gray-200 text-sm">
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map(cls => (
                  <SelectItem key={cls} value={cls}>
                    {cls}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={selectedTeacher}
              onValueChange={(value) => setSelectedTeacher(value)}
            >
              <SelectTrigger className="bg-gray-50 border-gray-200 text-sm">
                <SelectValue placeholder="Select Teacher" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Teachers</SelectItem>
                {teachers.map(teacher => (
                  <SelectItem key={teacher} value={teacher}>
                    {teacher}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Subjects Table - Add responsive classes */}
          {/*
          <div className="overflow-x-auto -mx-6 px-6">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="text-gray-600 text-xs">Subject</TableHead>
                  <TableHead className="text-gray-600 text-xs hidden sm:table-cell">Class</TableHead>
                  <TableHead className="text-gray-600 text-xs hidden sm:table-cell">Teacher</TableHead>
                  <TableHead className="text-gray-600 text-xs hidden sm:table-cell">Syllabus</TableHead>
                  <TableHead className="text-gray-600 text-xs">Resources</TableHead>
                  <TableHead className="text-gray-600 text-xs text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubjects.length > 0 ? (
                  filteredSubjects.map(subject => (
                    <TableRow key={subject.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium text-xs">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-blue-600" />
                          {subject.name}
                        </div>
                      </TableCell>
                      <TableCell className="text-xs hidden sm:table-cell">{subject.class}</TableCell>
                      <TableCell className="text-xs hidden sm:table-cell">{subject.teacher}</TableCell>
                      <TableCell className="text-xs text-gray-600 hidden sm:table-cell">{subject.syllabus}</TableCell>
                      <TableCell className="text-xs">
                        <Badge variant="secondary" className="bg-gray-100 text-gray-800 text-xs">
                          {subject.resources} materials
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex flex-col sm:flex-row gap-2 justify-end">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-blue-200 text-blue-600 hover:bg-blue-50 text-xs px-2 py-1"
                            onClick={() => handleDownloadSyllabus(subject.name)}
                          >
                            <Download className="mr-1 h-3 w-3" />
                            Syllabus
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-gray-200 text-gray-600 hover:bg-gray-50 text-xs px-2 py-1"
                            onClick={() => handleViewDetails(subject.id)}
                          >
                            View
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-gray-500 text-sm">
                      No subjects found matching your criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>*/}

          {/* Subject Selection Dropdown */}
          <div className="mb-6">
            {/* Desktop and Tablet View (>520px) */}
            {screenWidth > 520 && (
              <div className={`flex ${screenWidth <= 768 ? 'overflow-x-auto pb-4' : 'flex-wrap'} gap-2`}>
                {subjectsList.map((subject) => (
                  <Button
                    key={subject}
                    variant={activeTab === subject.toLowerCase() ? "default" : "outline"}
                    className={`${
                      activeTab === subject.toLowerCase() ? "bg-[#1E3A8A] text-white" : ""
                    } ${screenWidth <= 768 ? "whitespace-nowrap" : ""}`}
                    onClick={() => setActiveTab(subject.toLowerCase())}
                  >
                    {subject}
                  </Button>
                ))}
              </div>
            )}

            {/* Mobile View (≤520px) */}
            {screenWidth <= 520 && (
              <div className="relative">
                <Button
                  variant="outline"
                  className="w-full flex justify-between items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSubjectsDropdownOpen(!isSubjectsDropdownOpen);
                  }}
                >
                  <span>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isSubjectsDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
                
                <div 
                  className={`
                    absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg
                    transition-all duration-200 origin-top
                    ${isSubjectsDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
                  `}
                >
                  {subjectsList.map((subject) => (
                    <button
                      key={subject}
                      className={`w-full px-4 py-2 text-left transition-colors ${
                        activeTab === subject.toLowerCase()
                          ? 'bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]' 
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab(subject.toLowerCase());
                        setIsSubjectsDropdownOpen(false);
                      }}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Subject Content */}
          <div className="space-y-4">
            {/* Mathematics Content */}
            {activeTab === "mathematics" && (
              <Card className="border-gray-200">
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Mathematics Syllabus Details</CardTitle>
                  <CardDescription className="text-xs text-gray-600">
                    Complete syllabus breakdown
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 sm:p-4">
                  <div className="space-y-4 sm:space-y-6">
                    {syllabusDetails.mathematics.map(unit => (
                      <div key={unit.unit} className="border-b border-gray-100 pb-3 sm:pb-4 last:border-0 last:pb-0">
                        <h3 className="font-medium text-gray-900 text-xs sm:text-sm mb-2">
                          Unit {unit.unit}: {unit.topic}
                        </h3>
                        <ul className="space-y-1 pl-4">
                          {unit.chapters.map((chapter, idx) => (
                            <li key={idx} className="text-gray-600 text-xs flex items-start">
                              <span className="mr-2">•</span>
                              <span className="break-words">{chapter}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row w-full gap-4">
                    <div className="text-xs sm:text-sm text-gray-600 w-full">
                      Textbook: <span className="font-medium break-words">Mathematics for Commerce - Vol. II</span>
                    </div>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto text-xs whitespace-nowrap"
                      onClick={() => handleDownloadSyllabus("Mathematics")}
                    >
                      <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Download Syllabus
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            )}

            {/* Accountancy Content */}
            {activeTab === "accountancy" && (
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Accountancy Syllabus Details</CardTitle>
                  <CardDescription className="text-gray-600">
                    Complete syllabus breakdown for Class XI Commerce
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {syllabusDetails.accountancy.map(unit => (
                      <div key={unit.unit} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <h3 className="font-medium text-gray-900 mb-2">Unit {unit.unit}: {unit.topic}</h3>
                        <ul className="space-y-1 pl-5">
                          {unit.chapters.map((chapter, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start">
                              <span className="mr-2">•</span>
                              <span>{chapter}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-200">
                  <div className="flex justify-between w-full items-center">
                    <div className="text-sm text-gray-600">
                      Textbook: <span className="font-medium">Accountancy Principles - CBSE</span>
                    </div>
                    
                  </div>
                  <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => handleDownloadSyllabus("Accountancy")}
                    >
                      <Download className="mr-2 h-4 w-4">
                      Download Full Syllabus
                      </Download>
                    </Button>
                </CardFooter>
              </Card>
            )}

            {/* Computer Science Content */}
            {activeTab === "computer science" && (
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Computer Science Syllabus Details</CardTitle>
                  <CardDescription className="text-gray-600">
                    Complete syllabus breakdown for Class XI Commerce
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {syllabusDetails.computer.map(unit => (
                      <div key={unit.unit} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <h3 className="font-medium text-gray-900 mb-2">Unit {unit.unit}: {unit.topic}</h3>
                        <ul className="space-y-1 pl-5">
                          {unit.chapters.map((chapter, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start">
                              <span className="mr-2">•</span>
                              <span>{chapter}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-200">
                  <div className="flex justify-between w-full items-center">
                    <div className="text-sm text-gray-600">
                      Textbook: <span className="font-medium">Computer Science with Python</span>
                    </div>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => handleDownloadSyllabus("Computer Science")}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Syllabus
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            )}
          </div>

          {/* Reference Materials */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">Reference Materials</CardTitle>
              <CardDescription className="text-gray-600">
                Additional resources for your subjects
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-4">
              <div className="grid grid-cols-1 gap-3">
                <Card className="border-gray-200 hover:border-blue-200 transition-colors">
                  <CardHeader className="p-3 sm:p-4">
                    <div className="flex items-center gap-2">
                      <Bookmark className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                      <CardTitle className="text-xs sm:text-sm">Math Reference Guide</CardTitle>
                    </div>
                    <CardDescription className="text-xs mt-1">
                      Formulas and problem-solving techniques
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 text-xs"
                      onClick={() => alert("Downloading Math Reference Guide")}
                    >
                      <Download className="mr-2 h-3 w-3" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-gray-200 hover:border-blue-200 transition-colors">
                  <CardHeader className="p-3 sm:p-4">
                    <div className="flex items-center gap-2">
                      <Bookmark className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                      <CardTitle className="text-xs sm:text-sm">Accountancy Workbook</CardTitle>
                    </div>
                    <CardDescription className="text-xs mt-1">
                      Practice problems with solutions
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 text-xs"
                      onClick={() => alert("Downloading Accountancy Workbook")}
                    >
                      <Download className="mr-2 h-3 w-3" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-gray-200 hover:border-blue-200 transition-colors">
                  <CardHeader className="p-3 sm:p-4">
                    <div className="flex items-center gap-2">
                      <Bookmark className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                      <CardTitle className="text-xs sm:text-sm">Python Cheat Sheet</CardTitle>
                    </div>
                    <CardDescription className="text-xs mt-1">
                      Quick reference for Python syntax
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 text-xs"
                      onClick={() => alert("Downloading Python Cheat Sheet")}
                    >
                      <Download className="mr-2 h-3 w-3" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}