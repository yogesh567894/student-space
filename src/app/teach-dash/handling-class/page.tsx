"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, User, ChevronDown, ChevronUp, Bookmark, Search, FileText, CreditCard, Calendar, BookOpen, Trophy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Sidebar from "@/app/teach-dash/components/Sidebar";
import { useMediaQuery } from "@/hooks/use-media-query";
import Side1 from "@/app/teach-dash/components/Side1";

const studentData = [
  {
    id: "RA22I1O03O11601",
    name: "Rahul Sharma",
    class: "11 A2",
    avatar: "/avatars/rahul.jpg",
    attendance: 92,
    contact: "rahul.sharma@example.com | +91 9876543210",
    address: "123 Main St, Mumbai, Maharashtra",
    joinDate: "15 Jun 2022",
    feePayments: [
      { month: "Jan 2025", amount: 15000, status: "Paid", date: "05 Jan 2025" },
      { month: "Feb 2025", amount: 15000, status: "Pending", date: "" },
      { month: "Mar 2025", amount: 15000, status: "Pending", date: "" },
    ],
    totalFees: 45000,
    paidFees: 15000,
    subjects: [
      { name: "Mathematics", marks: 85, grade: "A" },
      { name: "Physics", marks: 78, grade: "B+" },
      { name: "Chemistry", marks: 82, grade: "A" },
      { name: "English", marks: 91, grade: "A+" },
      { name: "Computer Science", marks: 95, grade: "A+" },
    ],
    performance: [
      { name: "Mid-Term", score: 82 },
      { name: "Quarterly", score: 78 },
      { name: "Half-Yearly", score: 85 },
      { name: "Final", score: 88 },
    ],
    activities: [
      {
        type: 'achievement',
        date: '2024-12-15',
        description: 'Won first place in inter-school cricket tournament',
        category: 'Sports'
      },
      {
        type: 'achievement',
        date: '2024-11-20',
        description: 'Represented school in state-level science exhibition',
        category: 'Academic'
      },
      {
        type: 'misconduct',
        date: '2024-10-05',
        description: 'Late submission of three consecutive assignments',
        severity: 'low'
      }
    ],
  },
  {
    id: "RA22I1O03O11602",
    name: "Priya Patel",
    class: "11 A2",
    avatar: "/avatars/priya.jpg",
    attendance: 88,
    contact: "priya.patel@example.com | +91 9876543211",
    address: "456 Oak Ave, Delhi",
    joinDate: "15 Jun 2022",
    feePayments: [
      { month: "Jan 2025", amount: 15000, status: "Paid", date: "03 Jan 2025" },
      { month: "Feb 2025", amount: 15000, status: "Paid", date: "02 Feb 2025" },
      { month: "Mar 2025", amount: 15000, status: "Pending", date: "" },
    ],
    totalFees: 45000,
    paidFees: 30000,
    subjects: [
      { name: "Mathematics", marks: 90, grade: "A+" },
      { name: "Physics", marks: 85, grade: "A" },
      { name: "Chemistry", marks: 78, grade: "B+" },
      { name: "English", marks: 88, grade: "A" },
      { name: "Computer Science", marks: 92, grade: "A+" },
    ],
    performance: [
      { name: "Mid-Term", score: 85 },
      { name: "Quarterly", score: 82 },
      { name: "Half-Yearly", score: 88 },
      { name: "Final", score: 90 },
    ],
    activities: [
      {
        type: 'achievement',
        date: '2024-11-30',
        description: 'First place in National Mathematics Olympiad',
        category: 'Academic'
      },
      {
        type: 'achievement',
        date: '2024-10-15',
        description: 'Basketball team captain - Led team to state finals',
        category: 'Sports'
      },
      {
        type: 'misconduct',
        date: '2024-09-20',
        description: 'Unauthorized use of mobile phone during class',
        severity: 'medium'
      }
    ],
  },
  {
    id: "RA22I1O03O11603",
    name: "Amit Singh",
    class: "11 A2",
    avatar: "/avatars/amit.jpg",
    attendance: 95,
    contact: "amit.singh@example.com | +91 9876543212",
    address: "789 Pine Rd, Bangalore, Karnataka",
    joinDate: "15 Jun 2022",
    feePayments: [
      { month: "Jan 2025", amount: 15000, status: "Paid", date: "10 Jan 2025" },
      { month: "Feb 2025", amount: 15000, status: "Paid", date: "08 Feb 2025" },
      { month: "Mar 2025", amount: 15000, status: "Paid", date: "05 Mar 2025" },
    ],
    totalFees: 45000,
    paidFees: 45000,
    subjects: [
      { name: "Mathematics", marks: 78, grade: "B+" },
      { name: "Physics", marks: 82, grade: "A" },
      { name: "Chemistry", marks: 85, grade: "A" },
      { name: "English", marks: 90, grade: "A+" },
      { name: "Computer Science", marks: 88, grade: "A" },
    ],
    performance: [
      { name: "Mid-Term", score: 80 },
      { name: "Quarterly", score: 82 },
      { name: "Half-Yearly", score: 85 },
      { name: "Final", score: 87 },
    ],
    activities: [
      {
        type: 'achievement',
        date: '2024-12-01',
        description: 'Best performer in Annual Cultural Fest',
        category: 'Cultural'
      },
      {
        type: 'misconduct',
        date: '2024-11-10',
        description: 'Involved in classroom disruption',
        severity: 'medium'
      },
      {
        type: 'misconduct',
        date: '2024-10-25',
        description: 'Missed important team project meeting',
        severity: 'low'
      }
    ],
  },
  {
    id: "RA22I1O03O11604",
    name: "Neha Gupta",
    class: "11 A5",
    avatar: "/avatars/neha.jpg",
    attendance: 85,
    contact: "neha.gupta@example.com | +91 9876543213",
    address: "321 Elm St, Kolkata, West Bengal",
    joinDate: "15 Jun 2022",
    feePayments: [
      { month: "Jan 2025", amount: 15000, status: "Paid", date: "12 Jan 2025" },
      { month: "Feb 2025", amount: 15000, status: "Late", date: "20 Feb 2025" },
      { month: "Mar 2025", amount: 15000, status: "Pending", date: "" },
    ],
    totalFees: 45000,
    paidFees: 30000,
    subjects: [
      { name: "Mathematics", marks: 82, grade: "A" },
      { name: "Physics", marks: 75, grade: "B+" },
      { name: "Chemistry", marks: 80, grade: "A" },
      { name: "English", marks: 85, grade: "A" },
      { name: "Computer Science", marks: 90, grade: "A+" },
    ],
    performance: [
      { name: "Mid-Term", score: 78 },
      { name: "Quarterly", score: 80 },
      { name: "Half-Yearly", score: 82 },
      { name: "Final", score: 85 },
    ],
    activities: [
      {
        type: 'achievement',
        date: '2024-12-10',
        description: 'Published research paper in school science journal',
        category: 'Academic'
      },
      {
        type: 'achievement',
        date: '2024-11-25',
        description: 'Won gold medal in state-level swimming championship',
        category: 'Sports'
      }
    ],
  },
  {
    id: "RA22I1O03O11605",
    name: "Vikram Joshi",
    class: "11 A5",
    avatar: "/avatars/vikram.jpg",
    attendance: 90,
    contact: "vikram.joshi@example.com | +91 9876543214",
    address: "654 Maple Ave, Hyderabad, Telangana",
    joinDate: "15 Jun 2022",
    feePayments: [
      { month: "Jan 2025", amount: 15000, status: "Pending", date: "" },
      { month: "Feb 2025", amount: 15000, status: "Pending", date: "" },
      { month: "Mar 2025", amount: 15000, status: "Pending", date: "" },
    ],
    totalFees: 45000,
    paidFees: 0,
    subjects: [
      { name: "Mathematics", marks: 75, grade: "B+" },
      { name: "Physics", marks: 70, grade: "B" },
      { name: "Chemistry", marks: 78, grade: "B+" },
      { name: "English", marks: 82, grade: "A" },
      { name: "Computer Science", marks: 85, grade: "A" },
    ],
    performance: [
      { name: "Mid-Term", score: 75 },
      { name: "Quarterly", score: 72 },
      { name: "Half-Yearly", score: 78 },
      { name: "Final", score: 80 },
    ],
    activities: [
      {
        type: 'achievement',
        date: '2024-11-15',
        description: 'Organized successful charity drive for local orphanage',
        category: 'Social Service'
      },
      {
        type: 'misconduct',
        date: '2024-10-30',
        description: 'Multiple instances of homework incompletion',
        severity: 'medium'
      },
      {
        type: 'misconduct',
        date: '2024-09-15',
        description: 'Inappropriate behavior during assembly',
        severity: 'high'
      }
    ],
  },
  {
    id: "RA22I1O03O11606",
    name: "Ananya Reddy",
    class: "12 A3",
    avatar: "/avatars/ananya.jpg",
    attendance: 94,
    contact: "ananya.reddy@example.com | +91 9876543215",
    address: "987 Cedar Ln, Chennai, Tamil Nadu",
    joinDate: "15 Jun 2021",
    feePayments: [
      { month: "Jan 2025", amount: 18000, status: "Paid", date: "02 Jan 2025" },
      { month: "Feb 2025", amount: 18000, status: "Paid", date: "01 Feb 2025" },
      { month: "Mar 2025", amount: 18000, status: "Paid", date: "01 Mar 2025" },
    ],
    totalFees: 54000,
    paidFees: 54000,
    subjects: [
      { name: "Mathematics", marks: 92, grade: "A+" },
      { name: "Physics", marks: 88, grade: "A" },
      { name: "Chemistry", marks: 90, grade: "A+" },
      { name: "English", marks: 95, grade: "A+" },
      { name: "Computer Science", marks: 98, grade: "A+" },
    ],
    performance: [
      { name: "Mid-Term", score: 90 },
      { name: "Quarterly", score: 88 },
      { name: "Half-Yearly", score: 92 },
      { name: "Final", score: 94 },
    ],
    activities: [
      {
        type: 'achievement',
        date: '2024-12-20',
        description: 'Selected for National Youth Parliament',
        category: 'Leadership'
      },
      {
        type: 'achievement',
        date: '2024-11-05',
        description: 'Won first prize in Inter-school Debate Competition',
        category: 'Academic'
      }
    ],
  }
];

const classPerformanceData = [
  {
    name: "11 A2",
    average: 78,
    topStudent: "Rahul Sharma",
    subjects: [
      { name: "Mathematics", average: 72 },
      { name: "Physics", average: 68 },
      { name: "Chemistry", average: 75 },
      { name: "English", average: 82 },
      { name: "Computer Science", average: 85 },
    ],
    students: [
      { name: "Rahul Sharma", total: 431, rank: 1 },
      { name: "Priya Patel", total: 425, rank: 2 },
      { name: "Amit Singh", total: 418, rank: 3 },
      { name: "Neha Gupta", total: 410, rank: 4 },
      { name: "Vikram Joshi", total: 405, rank: 5 },
    ],
    feeStatus: {
      paid: 65,
      pending: 25,
      late: 10,
    },
  },
  {
    name: "11 A5",
    average: 75,
    topStudent: "Neha Gupta",
    subjects: [
      { name: "Mathematics", average: 70 },
      { name: "Physics", average: 65 },
      { name: "Chemistry", average: 72 },
      { name: "English", average: 80 },
      { name: "Computer Science", average: 82 },
    ],
    students: [
      { name: "Neha Gupta", total: 412, rank: 1 },
      { name: "Vikram Joshi", total: 390, rank: 2 },
      { name: "Rohan Mehta", total: 385, rank: 3 },
      { name: "Sonia Verma", total: 380, rank: 4 },
      { name: "Arjun Kapoor", total: 375, rank: 5 },
    ],
    feeStatus: {
      paid: 55,
      pending: 35,
      late: 10,
    },
  },
  {
    name: "12 A3",
    average: 82,
    topStudent: "Ananya Reddy",
    subjects: [
      { name: "Mathematics", average: 78 },
      { name: "Physics", average: 75 },
      { name: "Chemistry", average: 80 },
      { name: "English", average: 85 },
      { name: "Computer Science", average: 88 },
    ],
    students: [
      { name: "Ananya Reddy", total: 463, rank: 1 },
      { name: "Rohan Desai", total: 445, rank: 2 },
      { name: "Meera Nair", total: 438, rank: 3 },
      { name: "Karan Malhotra", total: 430, rank: 4 },
      { name: "Divya Iyer", total: 425, rank: 5 },
    ],
    feeStatus: {
      paid: 75,
      pending: 15,
      late: 10,
    },
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function HandlingClass( ) {
  const [selectedStudent, setSelectedStudent] = useState<string | null>("RA22I1O03O11601");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("academic");
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [isTabDropdownOpen, setIsTabDropdownOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("11 A2");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isSmallScreen = useMediaQuery("(min-width: 320px) and (max-width: 480px)");

  const sections = [
    { value: "11 A2", label: "11 A2" },
    { value: "11 A5", label: "11 A5" },
    { value: "12 A3", label: "12 A3" },
  ];

  const filteredStudents = studentData.filter(student =>
    student.class === selectedSection &&
    (student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     student.id.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const currentStudent = selectedStudent 
    ? studentData.find(student => student.id === selectedStudent)
    : studentData[0];

  const currentClass = classPerformanceData.find(cls => cls.name === currentStudent?.class);

  const feeData = [
    { name: 'Paid', value: currentStudent?.paidFees || 0 },
    { name: 'Pending', value: (currentStudent?.totalFees || 0) - (currentStudent?.paidFees || 0) },
  ];

  const classFeeData = [
    { name: 'Paid', value: currentClass?.feeStatus.paid || 0 },
    { name: 'Pending', value: currentClass?.feeStatus.pending || 0 },
    { name: 'Late', value: currentClass?.feeStatus.late || 0 },
  ];

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add this effect to handle outside clicks
  useEffect(() => {
    const handleClickOutside = () => {
      if (isTabDropdownOpen) {
        setIsTabDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isTabDropdownOpen]);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar - Fixed width on large screens */}
      <div className="hidden lg:block w-64 flex-shrink-0 fixed h-screen bg-[#1E3A8A] text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b">
          <div className="flex justify-between items-center px-4 sm:px-6 py-4">
            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Side1 />
            </div>

            {/* Title */}
            <h1 className={`text-xl lg:text-2xl font-bold text-[#1E3A8A] ${
              screenWidth <= 768 ? 'text-lg' : ''
            }`}>
              Handling Class
            </h1>

            {/* Right side notifications - hidden on mobile */}
            {screenWidth > 768 && (
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
        <div className={`p-4 sm:p-6 ${isSmallScreen ? 'space-y-4' : 'space-y-6'}`}>
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-6">
            <Select value={selectedSection} onValueChange={setSelectedSection}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Select section" />
              </SelectTrigger>
              <SelectContent>
                {sections.map((section) => (
                  <SelectItem key={section.value} value={section.value}>
                    {section.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search students..."
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Student List */}
            <Card className="lg:col-span-1">
              <CardHeader className={`${isSmallScreen ? 'p-3' : 'p-4'}`}>
                <CardTitle className="text-[#1E3A8A] text-sm sm:text-base">
                  Students List
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className={`overflow-y-auto ${
                  isSmallScreen ? 'max-h-[60vh]' : 'max-h-[calc(100vh-280px)]'
                }`}>
                  {filteredStudents.map((student) => (
                    <div
                      key={student.id}
                      className={`p-3 sm:p-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors ${
                        selectedStudent === student.id 
                          ? "bg-blue-50 border-l-4 border-l-blue-600" 
                          : "border-l-4 border-l-transparent"
                      }`}
                      onClick={() => setSelectedStudent(student.id)}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Avatar className="h-8 w-8 sm:h-10 sm:w-10 shrink-0">
                          <AvatarImage src={student.avatar} />
                          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-xs sm:text-sm text-gray-900 truncate">
                            {student.name}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {student.class}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Student Details Card */}
            {currentStudent && (
              <Card className={`lg:col-span-2 ${
                screenWidth >= 1024 && screenWidth <= 1200 
                  ? 'max-w-[calc(100vw-450px)]' // Adjust based on sidebar width
                  : ''
              }`}>
                <CardHeader className={`${isSmallScreen ? 'p-3' : 'p-4'}`}>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-[#1E3A8A] text-sm sm:text-base">
                        {currentStudent.name} - {currentStudent.class}
                      </CardTitle>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {currentStudent.contact}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className={`${
                  isSmallScreen ? 'p-3' : 'p-4'
                } ${screenWidth >= 1024 && screenWidth <= 1200 ? 'space-y-4' : 'space-y-6'}`}>
                  {/* Tabs - Scrollable on mobile */}
                  {/* Tabs Section */}
                  {screenWidth <= 520 ? (
                    <div className="relative mb-6">
                      <Select
                        value={activeTab}
                        onValueChange={(value) => setActiveTab(value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue>
                            <div className="flex items-center gap-2">
                              {activeTab === "academic" && <BookOpen className="w-4 h-4" />}
                              {activeTab === "attendance" && <Calendar className="w-4 h-4" />}
                              {activeTab === "activities" && <Trophy className="w-4 h-4" />}
                              <span className="capitalize">{activeTab}</span>
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="academic">
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4" /> Academic
                            </div>
                          </SelectItem>
                          <SelectItem value="attendance">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" /> Attendance
                            </div>
                          </SelectItem>
                          <SelectItem value="activities">
                            <div className="flex items-center gap-2">
                              <Trophy className="w-4 h-4" /> Activities
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ) : (
                    // Desktop View with Tabs
                    <div className="flex overflow-x-auto pb-2 mb-4 sm:mb-6 -mx-3 sm:-mx-4 px-3 sm:px-4">
                      <button
                        className={`px-4 py-2 font-medium ${
                          activeTab === "academic" ? "text-[#1E3A8A] border-b-2 border-[#1E3A8A]" : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab("academic")}
                      >
                        <BookOpen className="inline w-4 h-4 mr-2" /> Academic
                      </button>
                      <button
                        className={`px-4 py-2 font-medium ${
                          activeTab === "attendance" ? "text-[#1E3A8A] border-b-2 border-[#1E3A8A]" : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab("attendance")}
                      >
                        <Calendar className="inline w-4 h-4 mr-2" /> Attendance
                      </button>
                      <button
                        className={`px-4 py-2 font-medium ${
                          activeTab === "activities" ? "text-[#1E3A8A] border-b-2 border-[#1E3A8A]" : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab("activities")}
                      >
                        <Trophy className="inline w-4 h-4 mr-2" /> Activities
                      </button>
                    </div>
                  )}

                  {/* Tab Content with responsive adjustments */}
                  {activeTab === "academic" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Academic Performance */}
                      <div>
                        <h3 className="font-semibold text-[#1E3A8A] mb-4">Academic Performance</h3>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={currentStudent.performance}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="score" fill="#1E3A8A" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      {/* Subject-wise Marks */}
                      <div>
                        <h3 className="font-semibold text-[#1E3A8A] mb-4">Subject-wise Marks</h3>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Subject</TableHead>
                              <TableHead>Marks</TableHead>
                              <TableHead>Grade</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {currentStudent.subjects.map((subject) => (
                              <TableRow key={subject.name}>
                                <TableCell>{subject.name}</TableCell>
                                <TableCell>{subject.marks}</TableCell>
                                <TableCell>
                                  <span className={`px-2 py-1 rounded-full text-xs ${
                                    subject.grade.includes('+') 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-blue-100 text-blue-800'
                                  }`}>
                                    {subject.grade}
                                  </span>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  )}

                  {activeTab === "fees" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Fee Payment Status */}
                      <div>
                        <h3 className="font-semibold text-[#1E3A8A] mb-4">Fee Payment Status</h3>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={feeData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                              >
                                {feeData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                          <div className="text-center mt-2">
                            <p className="text-sm">Total Fees: ₹{currentStudent.totalFees}</p>
                            <p className="text-sm">Paid: ₹{currentStudent.paidFees}</p>
                            <p className="text-sm">Pending: ₹{currentStudent.totalFees - currentStudent.paidFees}</p>
                          </div>
                        </div>
                      </div>

                      {/* Payment History */}
                      <div>
                        <h3 className="font-semibold text-[#1E3A8A] mb-4">Payment History</h3>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Month</TableHead>
                              <TableHead>Amount</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Date</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {currentStudent.feePayments.map((payment) => (
                              <TableRow key={payment.month}>
                                <TableCell>{payment.month}</TableCell>
                                <TableCell>₹{payment.amount}</TableCell>
                                <TableCell>
                                  <Badge 
                                    variant={
                                      payment.status === "Paid" ? "default" :
                                      payment.status === "Pending" ? "destructive" :
                                      "secondary"
                                    }
                                  >
                                    {payment.status}
                                  </Badge>
                                </TableCell>
                                <TableCell>{payment.date || "-"}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  )}

                  {activeTab === "attendance" && (
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <h3 className="font-semibold text-[#1E3A8A]">Attendance Overview</h3>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                          <span className="text-sm">Current Month: Jan 2025</span>
                          <Button variant="outline" size="sm" className="w-full sm:w-auto">
                            <Calendar className="w-4 h-4 mr-1" /> View Calendar
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Present</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">{currentStudent.attendance}%</div>
                            <p className="text-xs text-gray-500">18/20 days</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Absent</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">{100 - currentStudent.attendance}%</div>
                            <p className="text-xs text-gray-500">2/20 days</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Late Arrivals</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">3</div>
                            <p className="text-xs text-gray-500">This month</p>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-medium text-[#1E3A8A] mb-3">Recent Absences</h4>
                        <div className="space-y-2">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-gray-50 rounded">
                            <span className="mb-2 sm:mb-0">15 Jan 2025</span>
                            <Badge variant="destructive">Absent</Badge>
                          </div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-gray-50 rounded">
                            <span className="mb-2 sm:mb-0">22 Jan 2025</span>
                            <Badge variant="destructive">Absent</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "activities" && (
                    <div className="space-y-6">
                      {/* Achievements Section */}
                      <div>
                        <h3 className="font-semibold text-[#1E3A8A] mb-4">Achievements</h3>
                        <div className="space-y-4">
                          {currentStudent.activities
                            .filter(activity => activity.type === 'achievement')
                            .map((activity, index) => (
                              <Card key={index}>
                                <CardContent className="p-4">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <p className="font-medium text-green-800">{activity.description}</p>
                                      <p className="text-sm text-green-600">Category: {activity.category}</p>
                                    </div>
                                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                                      {new Date(activity.date).toLocaleDateString()}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                        </div>
                      </div>

                      {/* Misconducts Section */}
                      <div>
                        <h3 className="font-semibold text-[#1E3A8A] mb-4">Behavioral Records</h3>
                        <div className="space-y-4">
                          {currentStudent.activities
                            .filter(activity => activity.type === 'misconduct')
                            .map((activity, index) => (
                              <Card key={index}>
                                <CardContent className={`p-4 ${
                                  activity.severity === 'high' 
                                    ? 'bg-red-50' 
                                    : activity.severity === 'medium'
                                    ? 'bg-yellow-50'
                                    : 'bg-gray-50'
                                }`}>
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <p className="font-medium text-gray-800">{activity.description}</p>
                                      <p className="text-sm text-gray-600">
                                        Severity: {activity.severity}
                                      </p>
                                    </div>
                                    <Badge variant="secondary">
                                      {new Date(activity.date).toLocaleDateString()}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                        </div>
                      </div>

                      {/* No Activities Message */}
                      {(!currentStudent.activities?.length || 
                        (currentStudent.activities?.filter(a => a.type === 'achievement').length === 0 && 
                         currentStudent.activities?.filter(a => a.type === 'misconduct').length === 0)) && (
                        <div className="text-center py-8">
                          <Trophy className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                          <p className="text-gray-500">No activities recorded for this student</p>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
                <CardFooter className={`
                  ${isSmallScreen ? 'flex-col gap-3 p-3' : 'flex justify-between p-4'} 
                  border-t
                `}>
                  <div className={`text-xs sm:text-sm text-gray-600 ${
                    isSmallScreen ? 'text-center w-full' : ''
                  }`}>
                    Joined on {currentStudent.joinDate}
                    {!isSmallScreen && ` | ${currentStudent.address}`}
                  </div>
                  <Button className={`bg-[#1E3A8A] text-white ${
                    isSmallScreen ? 'w-full' : ''
                  }`}>
                    Generate Full Report
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>

          {/* Class Performance Section */}
          {currentClass && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-[#1E3A8A] text-base sm:text-lg">
                  Class Performance - {currentClass.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6">
                  {/* Subject Averages Chart */}
                  <div>
                    <h3 className="font-semibold text-[#1E3A8A] mb-4 text-sm sm:text-base">
                      Subject Averages
                    </h3>
                    <div className="h-48 sm:h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={currentClass.subjects}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="name" 
                            tick={{ fontSize: isSmallScreen ? 10 : 12 }}
                            angle={isSmallScreen ? -45 : 0}
                            textAnchor={isSmallScreen ? "end" : "middle"}
                            height={isSmallScreen ? 60 : 30}
                          />
                          <YAxis 
                            domain={[0, 100]}
                            tick={{ fontSize: isSmallScreen ? 10 : 12 }}
                          />
                          <Tooltip />
                          <Bar dataKey="average" fill="#1E3A8A" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Top Students Table */}
                  <div className="w-full">
                    <h3 className="font-semibold text-[#1E3A8A] mb-4 text-sm sm:text-base">
                      Top 5 Students
                    </h3>
                    <div className="overflow-x-auto -mx-3 sm:mx-0">
                      <div className="min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                          <table className="min-w-full">
                            <thead className="bg-gray-50 border-b">
                              <tr>
                                <th className="px-3 py-2 text-xs font-semibold text-gray-900 text-left">
                                  Rank
                                </th>
                                <th className="px-3 py-2 text-xs font-semibold text-gray-900 text-left">
                                  Name
                                </th>
                                <th className="px-3 py-2 text-xs font-semibold text-gray-900 text-right">
                                  Marks
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {currentClass.students.map((student, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                  <td className="px-3 py-2 whitespace-nowrap">
                                    <span className={`inline-flex items-center justify-center px-2 py-1 text-xs rounded-full ${
                                      index === 0 
                                        ? 'bg-yellow-100 text-yellow-800' 
                                        : 'bg-gray-100 text-gray-800'
                                    }`}>
                                      #{index + 1}
                                    </span>
                                  </td>
                                  <td className="px-3 py-2 text-sm text-gray-900 whitespace-nowrap">
                                    {student.name}
                                  </td>
                                  <td className="px-3 py-2 text-sm text-gray-900 text-right whitespace-nowrap">
                                    {student.total}/500
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

interface StudentActivity {
  type: 'achievement' | 'misconduct';
  date: string;
  description: string;
  category?: string;
  severity?: 'low' | 'medium' | 'high';
}

// Update your student data interface
interface Student {
  id: string;
  name: string;
  class: string;
  avatar?: string;
  attendance?: number;
  academicPerformance?: {
    subjects: Array<{
      name: string;
      marks: number;
      grade: string;
    }>;
  };
  activities?: Array<{
    type: string;
    description: string;
    date: string;
  }>;
}

interface ClassPerformance {
  name: string;
  subjects: Array<{
    name: string;
    average: number;
  }>;
  students: Array<{
    name: string;
    rank: number;
    total: number;
  }>;
}