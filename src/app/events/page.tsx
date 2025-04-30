"use client";

import Sidebar from "../student-dash/components/Sidebar";
import { Calendar, Clock, MapPin, Bell, CheckCircle2, XCircle, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "42nd Annual Day Celebrations",
      date: "15 Nov 2024",
      time: "3:00 PM",
      location: "Kamarajar Arangam, Teynampet, Chennai",
      type: "Cultural",
      description: "Dear Parents, We cordially invite you to join us for our 42nd Annual Day Celebrations.",
      status: "upcoming",
      rsvp: true
    },
    {
      id: 2,
      title: "Mathematics Cluster Examinations",
      date: "27 Nov 2024",
      time: "9:00 AM - 11:30 AM",
      location: "School Campus",
      type: "Academic",
      description: "Cluster examinations for all classes. Bring your own calculators.",
      status: "upcoming",
      rsvp: false
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      date: "14 Jan 2025",
      time: "10:00 AM - 1:00 PM",
      location: "School Auditorium",
      type: "Academic",
      description: "Quarterly parent-teacher meeting to discuss student progress.",
      status: "upcoming",
      rsvp: true
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Summer Camp Registration",
      date: "11 Jan 2025",
      time: "9:00 AM - 12:00 PM",
      location: "School Office",
      type: "Event",
      description: "Registration for summer camp activities.",
      status: "past",
      attended: true
    },
    {
      id: 5,
      title: "Field Trip to Museum",
      date: "20 Jan 2025",
      time: "8:00 AM - 3:00 PM",
      location: "National Museum",
      type: "Educational",
      description: "Educational field trip for history classes.",
      status: "past",
      attended: false
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="pl-6 md:pl-0 text-2xl font-bold text-[#1E3A8A]">School Events</h1>
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search events..."
                  className="pl-10 w-[200px] lg:w-[300px] bg-gray-50 border-gray-200"
                />
              </div>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </Button>
              <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-gray-600" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="space-y-6">
            <Tabs defaultValue="upcoming">
              <div className="flex justify-between items-center mb-4">
                <TabsList className="bg-gray-100 border border-gray-200">
                  <TabsTrigger 
                    value="upcoming" 
                    className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                  >
                    Upcoming Events
                  </TabsTrigger>
                  <TabsTrigger 
                    value="past"
                    className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                  >
                    Past Events
                  </TabsTrigger>
                  <TabsTrigger 
                    value="calendar"
                    className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                  >
                    Calendar View
                  </TabsTrigger>
                </TabsList>
                <div className="md:hidden">
                  <Button variant="outline" size="sm" className="border-gray-300">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
              
              <TabsContent value="upcoming">
                <div className="space-y-4">
                  {upcomingEvents.map(event => (
                    <Card key={event.id} className="border-gray-200 hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                          <div>
                            <CardTitle className="text-gray-800">{event.title}</CardTitle>
                            <CardDescription className="mt-2">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-y-2 gap-x-6 text-sm">
                                <span className="flex items-center text-gray-600">
                                  <Calendar className="mr-2 h-4 w-4 text-blue-500" />
                                  {event.date}
                                </span>
                                <span className="flex items-center text-gray-600">
                                  <Clock className="mr-2 h-4 w-4 text-blue-500" />
                                  {event.time}
                                </span>
                                <span className="flex items-center text-gray-600">
                                  <MapPin className="mr-2 h-4 w-4 text-blue-500" />
                                  {event.location}
                                </span>
                              </div>
                            </CardDescription>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`text-sm ${
                              event.type === "Academic" ? "border-blue-200 bg-blue-50 text-blue-700" :
                              event.type === "Cultural" ? "border-purple-200 bg-purple-50 text-purple-700" :
                              "border-green-200 bg-green-50 text-green-700"
                            }`}
                          >
                            {event.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{event.description}</p>
                      </CardContent>
                      <CardFooter className="flex flex-col sm:flex-row justify-between gap-3 pt-0">
                        {event.rsvp ? (
                          <Badge className="w-fit bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                            RSVP Required
                          </Badge>
                        ) : null}
                        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                          <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                            <Bell className="mr-2 h-4 w-4 text-blue-600" />
                            Remind Me
                          </Button>
                          {event.rsvp && (
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              Register Now
                            </Button>
                          )}
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="past">
                <div className="space-y-4">
                  {pastEvents.map(event => (
                    <Card key={event.id} className="border-gray-200">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                          <div>
                            <CardTitle className="text-gray-800">{event.title}</CardTitle>
                            <CardDescription className="mt-2">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-y-2 gap-x-6 text-sm">
                                <span className="flex items-center text-gray-600">
                                  <Calendar className="mr-2 h-4 w-4 text-blue-500" />
                                  {event.date}
                                </span>
                                <span className="flex items-center text-gray-600">
                                  <Clock className="mr-2 h-4 w-4 text-blue-500" />
                                  {event.time}
                                </span>
                                <span className="flex items-center text-gray-600">
                                  <MapPin className="mr-2 h-4 w-4 text-blue-500" />
                                  {event.location}
                                </span>
                              </div>
                            </CardDescription>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`text-sm ${
                              event.type === "Academic" ? "border-blue-200 bg-blue-50 text-blue-700" :
                              event.type === "Cultural" ? "border-purple-200 bg-purple-50 text-purple-700" :
                              "border-green-200 bg-green-50 text-green-700"
                            }`}
                          >
                            {event.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{event.description}</p>
                      </CardContent>
                      <CardFooter className="pt-0">
                        {event.attended ? (
                          <Badge className="flex items-center gap-1 bg-green-100 text-green-800 hover:bg-green-100">
                            <CheckCircle2 className="h-4 w-4" />
                            Attended
                          </Badge>
                        ) : (
                          <Badge className="flex items-center gap-1 bg-red-100 text-red-800 hover:bg-red-100">
                            <XCircle className="h-4 w-4" />
                            Not Attended
                          </Badge>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="calendar">
                <Card className="border-gray-200">
                  <CardHeader className="border-b border-gray-200 py-3">
                    <CardTitle className="text-gray-800">Event Calendar</CardTitle>
                    <CardDescription>View all school events in calendar format</CardDescription>
                  </CardHeader>
                  <CardContent className="min-h-[400px] flex items-center justify-center p-8">
                    <div className="text-center text-gray-500">
                      <Calendar className="mx-auto h-12 w-12 mb-4 text-blue-500" />
                      <h3 className="text-lg font-medium text-gray-700">Calendar View</h3>
                      <p className="mt-1 text-gray-500">Coming soon...</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}