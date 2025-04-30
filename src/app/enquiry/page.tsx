// // import withAuth from "../hoc/withAuth";

// import Sidebar from "../student-dash/components/Sidebar";

// const EnquiryPage = () => {
//   return (
//     <div className="flex h-screen bg-white">
//               <Sidebar /> 
//         <div className="flex-1 overflow-y-auto p-6">
//             {/* Header */}
//             <div className="mb-6">
//               {/* Add padding to the page title */}
//               <h1 className="text-2xl font-bold mb-4 lg:pl-0 pl-12">Student Enquiry</h1>
//             </div>
    
//             {/* Content */}
//             <div className="grid gap-4">
//               {/* Add your events content here */}
//               <p>Enquiry content coming soon...</p>
//             </div>
//           </div>
//         </div>
//   );
// };

// export default EnquiryPage;
// // export default withAuth(EnquiryPage, ["STUDENT"]); 

"use client";
import { MessageSquare, Clock, CheckCircle2, Upload, AlertCircle, ChevronDown, Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Sidebar from "../student-dash/components/Sidebar";

export default function EnquiryPage() {
  const activeEnquiries = [
    {
      id: "ENQ-2024-125",
      subject: "Fee Payment Issue",
      category: "Fees",
      date: "15 Nov 2024",
      status: "In Progress",
      priority: "High",
      lastUpdate: "18 Nov 2024"
    },
    {
      id: "ENQ-2024-126",
      subject: "Computer Science Syllabus Query",
      category: "Academic",
      date: "18 Nov 2024",
      status: "Pending",
      priority: "Medium",
      lastUpdate: "18 Nov 2024"
    }
  ];

  const resolvedEnquiries = [
    {
      id: "ENQ-2024-120",
      subject: "Library Book Renewal",
      category: "Admin",
      date: "5 Nov 2024",
      status: "Resolved",
      resolutionDate: "8 Nov 2024",
      satisfaction: "Satisfied"
    },
    {
      id: "ENQ-2024-118",
      subject: "Transport Route Change",
      category: "Transport",
      date: "1 Nov 2024",
      status: "Resolved",
      resolutionDate: "3 Nov 2024",
      satisfaction: "Neutral"
    }
  ];

  const enquiryCategories = [
    "Academic",
    "Administrative",
    "Fees",
    "Transport",
    "Library",
    "Examinations",
    "Other"
  ];

  return (
    <div className="flex min-h-screen h-screen overflow-hidden bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold lg:pl-0 pl-12 text-[#1E3A8A]">Enquiries</h1>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search enquiries..."
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

        {/* Content */}
        <div className="space-y-6 lg:pl-0 pl-12">
          {/* New Enquiry Form */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">Submit New Enquiry</CardTitle>
              <CardDescription className="text-gray-600">
                Fill out the form below to submit your query
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Subject</label>
                    <Input placeholder="Enter enquiry subject" className="bg-gray-50 border-gray-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Category</label>
                    <Select>
                      <SelectTrigger className="bg-gray-50 border-gray-200">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {enquiryCategories.map(category => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Description</label>
                  <Textarea 
                    placeholder="Provide details about your enquiry..." 
                    className="bg-gray-50 border-gray-200 min-h-[120px]" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Attachments (Optional)</label>
                  <div className="flex items-center gap-2">
                    <label className="cursor-pointer">
                      <Button variant="outline" type="button" className="border-gray-200 text-gray-700">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload File
                        <Input type="file" className="hidden" />
                      </Button>
                    </label>
                    <span className="text-sm text-gray-500">Max. 5MB</span>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end border-t border-gray-200">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Submit Enquiry
              </Button>
            </CardFooter>
          </Card>

          {/* Enquiry Status */}
          <Tabs defaultValue="active">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="active" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                Active Enquiries
              </TabsTrigger>
              <TabsTrigger value="resolved" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                Resolved Enquiries
              </TabsTrigger>
              <TabsTrigger value="support" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                Support Contacts
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="active">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Active Enquiries</CardTitle>
                  <CardDescription className="text-gray-600">
                    Your pending and in-progress enquiries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader className="bg-gray-50">
                      <TableRow>
                        <TableHead className="text-gray-600">Enquiry ID</TableHead>
                        <TableHead className="text-gray-600">Subject</TableHead>
                        <TableHead className="text-gray-600">Category</TableHead>
                        <TableHead className="text-gray-600">Date</TableHead>
                        <TableHead className="text-gray-600">Status</TableHead>
                        <TableHead className="text-gray-600">Priority</TableHead>
                        <TableHead className="text-gray-600">Last Update</TableHead>
                        <TableHead className="text-gray-600">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {activeEnquiries.map(enquiry => (
                        <TableRow key={enquiry.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{enquiry.id}</TableCell>
                          <TableCell>{enquiry.subject}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                              {enquiry.category}
                            </Badge>
                          </TableCell>
                          <TableCell>{enquiry.date}</TableCell>
                          <TableCell>
                            <Badge 
                              variant={enquiry.status === "In Progress" ? "default" : "secondary"}
                              className={enquiry.status === "In Progress" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}
                            >
                              {enquiry.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant={enquiry.priority === "High" ? "destructive" : "secondary"}
                              className={enquiry.priority === "High" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}
                            >
                              {enquiry.priority}
                            </Badge>
                          </TableCell>
                          <TableCell>{enquiry.lastUpdate}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resolved">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Resolved Enquiries</CardTitle>
                  <CardDescription className="text-gray-600">
                    Your previously resolved enquiries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader className="bg-gray-50">
                      <TableRow>
                        <TableHead className="text-gray-600">Enquiry ID</TableHead>
                        <TableHead className="text-gray-600">Subject</TableHead>
                        <TableHead className="text-gray-600">Category</TableHead>
                        <TableHead className="text-gray-600">Date</TableHead>
                        <TableHead className="text-gray-600">Resolution Date</TableHead>
                        <TableHead className="text-gray-600">Satisfaction</TableHead>
                        <TableHead className="text-gray-600">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {resolvedEnquiries.map(enquiry => (
                        <TableRow key={enquiry.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{enquiry.id}</TableCell>
                          <TableCell>{enquiry.subject}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                              {enquiry.category}
                            </Badge>
                          </TableCell>
                          <TableCell>{enquiry.date}</TableCell>
                          <TableCell>{enquiry.resolutionDate}</TableCell>
                          <TableCell>
                            <Badge 
                              variant={enquiry.satisfaction === "Satisfied" ? "default" : "secondary"}
                              className={enquiry.satisfaction === "Satisfied" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                            >
                              {enquiry.satisfaction}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="support">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Support Contacts</CardTitle>
                  <CardDescription className="text-gray-600">
                    Contact information for urgent queries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Academic Support</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>Email: academics@school.edu</p>
                          <p>Phone: +91 9876543210</p>
                          <p>Hours: Mon-Fri, 9AM-4PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Administrative Office</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>Email: admin@school.edu</p>
                          <p>Phone: +91 9876543211</p>
                          <p>Hours: Mon-Sat, 8AM-5PM</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Fee Department</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>Email: fees@school.edu</p>
                          <p>Phone: +91 9876543212</p>
                          <p>Hours: Mon-Fri, 10AM-3PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Emergency Contact</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>Phone: +91 9876543219</p>
                          <p>Available 24/7</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}