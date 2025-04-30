"use client";
import { Calendar, Clock, BookOpen, Download, Bell, Search, Filter, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Sidebar from "../student-dash/components/Sidebar";

export default function ExamSchedulePage() {
  const upcomingExams = [
    {
      id: 1,
      subject: "Mathematics",
      date: "27 Nov 2024",
      time: "9:00 AM - 11:30 AM",
      duration: "2h 30m",
      venue: "Main Hall",
      type: "Cluster Examination",
      syllabus: "Chapters 6-9",
      status: "upcoming",
      teacher: "Mrs. Divya V.",
      importance: "High"
    },
    {
      id: 2,
      subject: "Computer Science",
      date: "16 Jan 2025",
      time: "10:00 AM - 12:00 PM",
      duration: "2h",
      venue: "Computer Lab",
      type: "Term Examination",
      syllabus: "All Experiments",
      status: "upcoming",
      teacher: "Mr. Yogeshwaran V",
      importance: "Medium"
    },
    {
      id: 3,
      subject: "Accountancy",
      date: "18 Jan 2025",
      time: "9:00 AM - 11:00 AM",
      duration: "2h",
      venue: "Room 12",
      type: "Term Examination",
      syllabus: "Chapters 1-5",
      status: "upcoming",
      teacher: "Mrs. Divya V.",
      importance: "High"
    }
  ];

  const pastExams = [
    {
      id: 4,
      subject: "Business Studies",
      date: "15 Oct 2024",
      time: "9:00 AM - 11:00 AM",
      duration: "2h",
      venue: "Room 8",
      type: "Unit Test",
      syllabus: "Chapters 1-3",
      status: "completed",
      score: "28/35",
      teacher: "Mrs. Divya V.",
      performance: "Good"
    },
    {
      id: 5,
      subject: "Economics",
      date: "18 Oct 2024",
      time: "9:00 AM - 11:00 AM",
      duration: "2h",
      venue: "Room 10",
      type: "Unit Test",
      syllabus: "Chapters 1-4",
      status: "completed",
      score: "32/40",
      teacher: "Mrs. Divya V.",
      performance: "Excellent"
    }
  ];

  return (
    <div className="flex min-h-screen h-screen overflow-hidden bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Header with notification and profile */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold lg:pl-0 pl-12 text-[#1E3A8A]">Exam Schedule</h1>
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
        </div>

        {/* Content */}
        <div className="space-y-6 lg:pl-0 pl-12">
          <div className="flex justify-between items-center">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search exams..."
                className="pl-10 w-[200px] lg:w-[300px] bg-gray-50 border-gray-200"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Export Schedule
            </Button>
          </div>

          <Tabs defaultValue="upcoming">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                Upcoming Exams
              </TabsTrigger>
              <TabsTrigger value="past" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                Past Exams
              </TabsTrigger>
              <TabsTrigger value="calendar" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                Calendar View
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Examinations</CardTitle>
                  <CardDescription className="text-gray-600">
                    All scheduled exams for your class (XI-A Commerce)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader className="bg-gray-50">
                      <TableRow>
                        <TableHead className="text-gray-600">Subject</TableHead>
                        <TableHead className="text-gray-600">Date & Time</TableHead>
                        <TableHead className="text-gray-600">Duration</TableHead>
                        <TableHead className="text-gray-600">Venue</TableHead>
                        <TableHead className="text-gray-600">Teacher</TableHead>
                        <TableHead className="text-gray-600">Priority</TableHead>
                        <TableHead className="text-gray-600">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {upcomingExams.map(exam => (
                        <TableRow key={exam.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">
                            <div className="font-semibold">{exam.subject}</div>
                            <div className="text-sm text-gray-500">{exam.type}</div>
                          </TableCell>
                          <TableCell>
                            <div>{exam.date}</div>
                            <div className="text-sm text-gray-500">{exam.time}</div>
                          </TableCell>
                          <TableCell>{exam.duration}</TableCell>
                          <TableCell>{exam.venue}</TableCell>
                          <TableCell className="text-gray-600">{exam.teacher}</TableCell>
                          <TableCell>
                            <Badge 
                              variant={exam.importance === "High" ? "destructive" : "secondary"}
                              className={exam.importance === "High" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}
                            >
                              {exam.importance}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                              View Syllabus
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-gray-200">
                  <div className="text-sm text-gray-500">
                    Showing {upcomingExams.length} upcoming exams
                  </div>
                  <Button variant="ghost" className="text-blue-600 hover:bg-blue-50">
                    <Bell className="mr-2 h-4 w-4" />
                    Set All Reminders
                  </Button>
                </CardFooter>
              </Card>

              {/* Exam Preparation Tips */}
              <Card className="border-gray-200 mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Exam Preparation Tips</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">Mathematics</h3>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      <li>Focus on Chapters 6-9 as per syllabus</li>
                      <li>Practice previous year question papers</li>
                      <li>Revise all formulas and theorems</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">Computer Science</h3>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      <li>Complete all lab experiments</li>
                      <li>Review theory concepts</li>
                      <li>Prepare for viva questions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="past">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Past Examination Records</CardTitle>
                  <CardDescription className="text-gray-600">
                    Your previous exam performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader className="bg-gray-50">
                      <TableRow>
                        <TableHead className="text-gray-600">Subject</TableHead>
                        <TableHead className="text-gray-600">Date</TableHead>
                        <TableHead className="text-gray-600">Type</TableHead>
                        <TableHead className="text-gray-600">Score</TableHead>
                        <TableHead className="text-gray-600">Performance</TableHead>
                        <TableHead className="text-gray-600">Teacher</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pastExams.map(exam => (
                        <TableRow key={exam.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{exam.subject}</TableCell>
                          <TableCell>{exam.date}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                              {exam.type}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant={exam.performance === "Excellent" ? "default" : "secondary"}
                              className={exam.performance === "Excellent" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}
                            >
                              {exam.score}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-gray-600">{exam.performance}</TableCell>
                          <TableCell className="text-gray-600">{exam.teacher}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="border-t border-gray-200">
                  <Button variant="ghost" className="text-blue-600 hover:bg-blue-50">
                    <Download className="mr-2 h-4 w-4" />
                    Download All Results
                  </Button>
                </CardFooter>
              </Card>

              {/* Performance Analysis */}
              <Card className="border-gray-200 mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Performance Analysis</CardTitle>
                  <CardDescription className="text-gray-600">
                    Your progress across subjects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-500">Average Score</div>
                      <div className="text-2xl font-bold text-blue-600">75%</div>
                    </div>
                    <div className="border rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-500">Highest Score</div>
                      <div className="text-2xl font-bold text-green-600">92%</div>
                    </div>
                    <div className="border rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-500">Improvement</div>
                      <div className="text-2xl font-bold text-yellow-600">+8%</div>
                    </div>
                    <div className="border rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-500">Exams Taken</div>
                      <div className="text-2xl font-bold text-gray-600">12</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calendar">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Exam Calendar</CardTitle>
                  <CardDescription className="text-gray-600">
                    Visual representation of your exam schedule
                  </CardDescription>
                </CardHeader>
                <CardContent className="min-h-[400px] flex flex-col items-center justify-center bg-gray-50 rounded-lg">
                  <Calendar className="mx-auto h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900">Interactive Calendar View</h3>
                  <p className="mt-2 text-gray-600">Coming soon - will show all exams in calendar format</p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    Subscribe to Calendar
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}