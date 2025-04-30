"use client";
import { BookOpen, Download, Search, Users, FileText, Bookmark, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Sidebar from "../student-dash/components/Sidebar";
import { useState, useEffect } from "react";

export default function SubjectsSyllabusPage() {
  // State for filters and search
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("XI-A Commerce");
  const [selectedTeacher, setSelectedTeacher] = useState("all");
  const [activeTab, setActiveTab] = useState("mathematics");
  const [notificationCount, setNotificationCount] = useState(3);

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

  return (
    <div className="flex min-h-screen h-screen overflow-hidden bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold lg:pl-0 pl-12 text-[#1E3A8A]">Subjects & Syllabus</h1>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search subjects..."
                className="pl-10 w-[200px] lg:w-[300px] bg-gray-50 border-gray-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={clearNotifications}
            >
              <Bell className="h-5 w-5 text-gray-600" />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 lg:pl-0 pl-12">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select 
              value={selectedClass}
              onValueChange={(value) => setSelectedClass(value)}
            >
              <SelectTrigger className="bg-gray-50 border-gray-200">
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
              <SelectTrigger className="bg-gray-50 border-gray-200">
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

          {/* Subjects Table */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">Your Subjects</CardTitle>
              <CardDescription className="text-gray-600">
                List of all subjects for your class (XI-A Commerce)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="text-gray-600">Subject</TableHead>
                    <TableHead className="text-gray-600">Class</TableHead>
                    <TableHead className="text-gray-600">Teacher</TableHead>
                    <TableHead className="text-gray-600">Syllabus</TableHead>
                    <TableHead className="text-gray-600">Resources</TableHead>
                    <TableHead className="text-gray-600 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubjects.length > 0 ? (
                    filteredSubjects.map(subject => (
                      <TableRow key={subject.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-blue-600" />
                            {subject.name}
                          </div>
                        </TableCell>
                        <TableCell>{subject.class}</TableCell>
                        <TableCell>{subject.teacher}</TableCell>
                        <TableCell className="text-sm text-gray-600">{subject.syllabus}</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                            {subject.resources} materials
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="border-blue-200 text-blue-600 hover:bg-blue-50"
                              onClick={() => handleDownloadSyllabus(subject.name)}
                            >
                              <Download className="mr-1 h-4 w-4" />
                              Syllabus
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="border-gray-200 text-gray-600 hover:bg-gray-50"
                              onClick={() => handleViewDetails(subject.id)}
                            >
                              View Details
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                        No subjects found matching your criteria
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Syllabus Details */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-gray-100">
              <TabsTrigger value="mathematics" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                Mathematics
              </TabsTrigger>
              <TabsTrigger value="accountancy" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                Accountancy
              </TabsTrigger>
              <TabsTrigger value="computer" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                Computer Science
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="mathematics">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Mathematics Syllabus Details</CardTitle>
                  <CardDescription className="text-gray-600">
                    Complete syllabus breakdown for Class XI Commerce
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {syllabusDetails.mathematics.map(unit => (
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
                      Textbook: <span className="font-medium">Mathematics for Commerce - Vol. II</span>
                    </div>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => handleDownloadSyllabus("Mathematics")}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Syllabus
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="accountancy">
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
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => handleDownloadSyllabus("Accountancy")}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Syllabus
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="computer">
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
            </TabsContent>
          </Tabs>

          {/* Reference Materials */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">Reference Materials</CardTitle>
              <CardDescription className="text-gray-600">
                Additional resources for your subjects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="border-gray-200 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Bookmark className="h-5 w-5 text-blue-600" />
                      <CardTitle className="text-base">Math Reference Guide</CardTitle>
                    </div>
                    <CardDescription className="text-sm">Formulas and problem-solving techniques</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-blue-200 text-blue-600 hover:bg-blue-50"
                      onClick={() => alert("Downloading Math Reference Guide")}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-gray-200 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Bookmark className="h-5 w-5 text-blue-600" />
                      <CardTitle className="text-base">Accountancy Workbook</CardTitle>
                    </div>
                    <CardDescription className="text-sm">Practice problems with solutions</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-blue-200 text-blue-600 hover:bg-blue-50"
                      onClick={() => alert("Downloading Accountancy Workbook")}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-gray-200 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Bookmark className="h-5 w-5 text-blue-600" />
                      <CardTitle className="text-base">Python Cheat Sheet</CardTitle>
                    </div>
                    <CardDescription className="text-sm">Quick reference for Python syntax</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-blue-200 text-blue-600 hover:bg-blue-50"
                      onClick={() => alert("Downloading Python Cheat Sheet")}
                    >
                      <Download className="mr-2 h-4 w-4" />
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