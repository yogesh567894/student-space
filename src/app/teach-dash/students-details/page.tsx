"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, User, ChevronDown, ChevronUp, Bookmark, Search, FileText, CreditCard, Calendar, BookOpen } from "lucide-react";
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
  },
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

export default function StudentDetails() {
  const [selectedStudent, setSelectedStudent] = useState<string | null>("RA22I1O03O11601");
  const [selectedClass, setSelectedClass] = useState<string | null>("11 A2");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("academic");

  const filteredStudents = studentData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (selectedClass && student.class === selectedClass)
  );

  const currentStudent = selectedStudent 
    ? studentData.find(student => student.id === selectedStudent)
    : studentData[0];

  const currentClass = selectedClass
    ? classPerformanceData.find(cls => cls.name === selectedClass)
    : classPerformanceData[0];

  const feeData = [
    { name: 'Paid', value: currentStudent?.paidFees || 0 },
    { name: 'Pending', value: (currentStudent?.totalFees || 0) - (currentStudent?.paidFees || 0) },
  ];

  const classFeeData = [
    { name: 'Paid', value: currentClass?.feeStatus.paid || 0 },
    { name: 'Pending', value: currentClass?.feeStatus.pending || 0 },
    { name: 'Late', value: currentClass?.feeStatus.late || 0 },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-64 bg-gray-100 border-r hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-[#1E3A8A]">Students Details</h1>
            <div className="flex items-center gap-2 sm:gap-4">
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
          </div>

          {/* Search and Filter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search students..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select 
              value={selectedClass || ""}
              onValueChange={(value) => setSelectedClass(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by class" />
              </SelectTrigger>
              <SelectContent>
                {classPerformanceData.map((cls) => (
                  <SelectItem key={cls.name} value={cls.name}>
                    {cls.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="bg-[#1E3A8A] text-white">
              <Bookmark className="w-4 h-4 mr-2" />
              Bookmarked Students
            </Button>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Student List */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-[#1E3A8A]">Students</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-2 max-h-[600px] overflow-y-auto">
                  {filteredStudents.map((student) => (
                    <div
                      key={student.id}
                      className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                        selectedStudent === student.id ? "bg-blue-50" : ""
                      }`}
                      onClick={() => setSelectedStudent(student.id)}
                    >
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={student.avatar} />
                          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.id} | {student.class}</p>
                        </div>
                        <div className="ml-auto">
                          <Progress value={student.attendance} className="h-2 w-24" />
                          <p className="text-xs text-right mt-1">{student.attendance}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Student Details */}
            {currentStudent && (
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-[#1E3A8A]">
                        {currentStudent.name} - {currentStudent.class}
                      </CardTitle>
                      <p className="text-sm text-gray-600">{currentStudent.contact}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="text-[#1E3A8A]">
                        <FileText className="w-4 h-4 mr-1" /> Profile
                      </Button>
                      <Button className="bg-[#1E3A8A] text-white" size="sm">
                        <CreditCard className="w-4 h-4 mr-1" /> Pay Fees
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Tabs */}
                  <div className="flex border-b mb-6">
                    <button
                      className={`px-4 py-2 font-medium ${activeTab === "academic" ? "text-[#1E3A8A] border-b-2 border-[#1E3A8A]" : "text-gray-500"}`}
                      onClick={() => setActiveTab("academic")}
                    >
                      <BookOpen className="inline w-4 h-4 mr-2" /> Academic
                    </button>
                    <button
                      className={`px-4 py-2 font-medium ${activeTab === "fees" ? "text-[#1E3A8A] border-b-2 border-[#1E3A8A]" : "text-gray-500"}`}
                      onClick={() => setActiveTab("fees")}
                    >
                      <CreditCard className="inline w-4 h-4 mr-2" /> Fee Details
                    </button>
                    <button
                      className={`px-4 py-2 font-medium ${activeTab === "attendance" ? "text-[#1E3A8A] border-b-2 border-[#1E3A8A]" : "text-gray-500"}`}
                      onClick={() => setActiveTab("attendance")}
                    >
                      <Calendar className="inline w-4 h-4 mr-2" /> Attendance
                    </button>
                  </div>

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
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-[#1E3A8A]">Attendance Overview</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">Current Month: Jan 2025</span>
                          <Button variant="outline" size="sm">
                            <Calendar className="w-4 h-4 mr-1" /> View Calendar
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
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

                      <div>
                        <h4 className="font-medium text-[#1E3A8A] mb-2">Recent Absences</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <span>15 Jan 2025</span>
                            <Badge variant="destructive">Absent</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <span>22 Jan 2025</span>
                            <Badge variant="destructive">Absent</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <div className="text-sm text-gray-600">
                    Joined on {currentStudent.joinDate} | {currentStudent.address}
                  </div>
                  <Button className="bg-[#1E3A8A] text-white">
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
                <CardTitle className="text-[#1E3A8A]">
                  Class Performance - {currentClass.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Class Averages */}
                  <div className="md:col-span-2">
                    <h3 className="font-semibold text-[#1E3A8A] mb-4">Subject Averages</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={currentClass.subjects}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis domain={[0, 100]} />
                          <Tooltip />
                          <Bar dataKey="average" fill="#1E3A8A" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Class Fee Status */}
                  <div>
                    <h3 className="font-semibold text-[#1E3A8A] mb-4">Class Fee Status</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={classFeeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={60}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {classFeeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="text-center mt-2 space-y-1">
                        <p className="text-sm">Total Students: 30</p>
                        <p className="text-sm">Fees Paid: {currentClass.feeStatus.paid}%</p>
                        <p className="text-sm">Fees Pending: {currentClass.feeStatus.pending}%</p>
                      </div>
                    </div>
                  </div>

                  {/* Top Students */}
                  <div className="md:col-span-3">
                    <h3 className="font-semibold text-[#1E3A8A] mb-4">Top 5 Students</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Rank</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Total Marks</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentClass.students.map((student) => (
                          <TableRow key={student.name}>
                            <TableCell>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                student.rank === 1 
                                  ? 'bg-yellow-100 text-yellow-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                #{student.rank}
                              </span>
                            </TableCell>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.total}/500</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Class Fee Status */}
                  {/* <div>
                    <h3 className="font-semibold text-[#1E3A8A] mb-4">Class Fee Status</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={classFeeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {classFeeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="text-center mt-2">
                        <p className="text-sm">Total Students: 30</p>
                        <p className="text-sm">Fees Paid: {currentClass.feeStatus.paid}%</p>
                        <p className="text-sm">Fees Pending: {currentClass.feeStatus.pending}%</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}