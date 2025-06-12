"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts';

import { CheckCircle, XCircle, Clock, Bell, User } from "lucide-react";
import Sidebar from "@/app/student-dash/components/Sidebar";
import Side1 from "../student-dash/components/Side1";


const AttendancePage: React.FC = () => {
  const [overviewTimeframe, setOverviewTimeframe] = useState<'Year' | 'Month'>('Month');
  const [chartTimeframe, setChartTimeframe] = useState<'Year' | 'Month' | 'Week'>('Month');
  const [attendanceData, setAttendanceData] = useState({
    working: 20,
    holidays: 8,
    halfDay: 0
  });

  const [screenWidth, setScreenWidth] = useState<number>(0);

  // Update attendance data when timeframe changes
  useEffect(() => {
    if (overviewTimeframe === 'Year') {
      setAttendanceData({
        working: 220,
        holidays: 52,
        halfDay: 4
      });
    } else {
      setAttendanceData({
        working: 20,
        holidays: 8,
        halfDay: 0
      });
    }
  }, [overviewTimeframe]);

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
  
  
  // Sample data - you would fetch this based on the selected timeframe
  const getChartData = () => {
    if (chartTimeframe === 'Year') {
      return [
        { name: 'Jan', Present: 85, Absent: 15 },
        { name: 'Feb', Present: 82, Absent: 18 },
        { name: 'Mar', Present: 88, Absent: 12 },
        { name: 'Apr', Present: 80, Absent: 20 },
        { name: 'May', Present: 75, Absent: 25 },
        { name: 'Jun', Present: 87, Absent: 13 },
        { name: 'Jul', Present: 73, Absent: 27 },
        { name: 'Aug', Present: 77, Absent: 23 },
        { name: 'Sep', Present: 83, Absent: 17 },
        { name: 'Oct', Present: 90, Absent: 10 },
        { name: 'Nov', Present: 86, Absent: 14 },
        { name: 'Dec', Present: 79, Absent: 21 },
      ];
    } else if (chartTimeframe === 'Week') {
      return [
        { name: 'Mon', Present: 1, Absent: 0 },
        { name: 'Tue', Present: 1, Absent: 0 },
        { name: 'Wed', Present: 1, Absent: 0 },
        { name: 'Thu', Present: 0, Absent: 1 },
        { name: 'Fri', Present: 1, Absent: 0 },
      ];
    } else {
      // Month view (default)
      return [
        { name: 'Apr', Present: 80, Absent: 20 },
        { name: 'May', Present: 75, Absent: 25 },
        { name: 'Jun', Present: 87, Absent: 13 },
        { name: 'Jul', Present: 73, Absent: 27 },
        { name: 'Aug', Present: 77, Absent: 23 },
        { name: 'Sep', Present: 83, Absent: 17 },
        { name: 'Oct', Present: 90, Absent: 10 },
      ];
    }
  };

  const [leaveRequests, setLeaveRequests] = useState([
    { 
      id: 1,
      type: 'Medical Leave', 
      reason: 'Fever', 
      startDate: '3 Nov\'24', 
      endDate: '5 Nov\'24', 
      days: '3 Days', 
      status: 'Accepted' 
    },
    { 
      id: 2,
      type: 'On Duty', 
      reason: 'ABC School Event', 
      startDate: '3 Nov\'24', 
      endDate: '4 Nov\'24', 
      days: '2 Days', 
      status: 'Accepted' 
    },
    { 
      id: 3,
      type: 'On Duty', 
      reason: 'ABC School Event', 
      startDate: '3 Nov\'24', 
      endDate: '4 Nov\'24', 
      days: '2 Days', 
      status: 'Rejected' 
    },
    { 
      id: 4,
      type: 'Others', 
      reason: 'Family Event', 
      startDate: '3 Dec\'24', 
      endDate: '4 Dec\'24', 
      days: '2 Days', 
      status: 'Pending' 
    },
  ]);

  const [showNewLeaveForm, setShowNewLeaveForm] = useState(false);
  const [newLeave, setNewLeave] = useState({
    type: 'Medical Leave',
    reason: '',
    startDate: '',
    endDate: '',
    days: '1 Day'
  });

  const handleNewLeaveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add new leave request with Pending status
    const newLeaveRequest = {
      id: leaveRequests.length + 1,
      ...newLeave,
      status: 'Pending'
    };
    
    setLeaveRequests([newLeaveRequest, ...leaveRequests]);
    setShowNewLeaveForm(false);
    setNewLeave({
      type: 'Medical Leave',
      reason: '',
      startDate: '',
      endDate: '',
      days: '1 Day'
    });
  };

  // const CustomTooltip = ({ active, payload }: any) => {
  //   if (active && payload && payload.length) {
  //     return (
  //       <div className="bg-white p-3 shadow-md rounded-md border border-gray-100">
  //         <p className="font-medium">{payload[0].payload.name}</p>
  //         <p className="text-[#1E3A8A]">Present: {payload[0].value}%</p>
  //         <p className="text-[#8da2fb]">Absent: {payload[1].value}%</p>
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  const CustomTooltip: React.FC<TooltipProps<string, string>> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-md rounded-md border border-gray-100">
          <p className="font-medium">{payload[0].payload.name}</p>
          <p className="text-[#1E3A8A]">Present: {payload[0].value}%</p>
          <p className="text-[#8da2fb]">Absent: {payload[1].value}%</p>
        </div>
      );
    }
    return null;
  };


  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Accepted':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'Rejected':
        return <XCircle className="h-5 w-5 text-red-600" />;
      case 'Pending':
        return <Clock className="h-5 w-5 text-gray-500" />;
      default:
        return null;
    }
  };

  const getBorderColor = (status: string) => {
    switch(status) {
      case 'Accepted':
        return 'border-green-500';
      case 'Rejected':
        return 'border-red-500';
      case 'Pending':
        return 'border-gray-400';
      default:
        return 'border-gray-300';
    }
  };

  return (
    
    <div className="flex min-h-screen h-screen overflow-hidden bg-white">
      {/* Responsive Sidebar */}
      {screenWidth > 768 && <Sidebar />}
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Header with notification and profile */}
        <div className={`flex items-center justify-between mb-6 relative`}>
          {/* Left side with hamburger for mobile/tablet */}
          <div className="flex items-center">
            {screenWidth <= 768 && (
              <div>
                <Side1 />
              </div>
            )}
          </div>

          {/* Title - no longer fixed */}
          <div>
            {screenWidth <= 768 && (
              <h1 className="text-2xl font-bold text-[#1E3A8A]">Attendance</h1>)}
            { screenWidth > 768 && (
              <h1 className="text-2xl p-4 font-bold text-[#1E3A8A]">Attendance</h1>)}
          </div>
          

          
            <div >
            
            
            {screenWidth > 768 && (
            <div className="flex items-center gap-4 pt-4 pb-4 " >
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
          

          {screenWidth <= 768 && (
            
            
          <div className="flex items-center gap-4 " >
           
          
          </div>
          )}
          </div>

          {/* Right side notifications */}
          
        </div>
        
        {/* Attendance Overview */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <div className="inline-flex rounded-md overflow-hidden border">
              <button 
                className={`px-4 py-1.5 text-sm ${overviewTimeframe === 'Year' ? 'bg-[#1E3A8A] text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setOverviewTimeframe('Year')}
              >
                Year
              </button>
              <button 
                className={`px-4 py-1.5 text-sm ${overviewTimeframe === 'Month' ? 'bg-[#1E3A8A] text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setOverviewTimeframe('Month')}
              >
                Month
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">No. of days working</p>
                <p className="text-4xl font-bold text-[#1E3A8A] text-center mt-2">{attendanceData.working}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">No. of days holidays</p>
                <p className="text-4xl font-bold text-[#1E3A8A] text-center mt-2">{attendanceData.holidays}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">No. of days half-day</p>
                <p className="text-4xl font-bold text-[#1E3A8A] text-center mt-2">{attendanceData.halfDay}</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Attendance Chart */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <div className="inline-flex rounded-md overflow-hidden border">
              <button 
                className={`px-3 py-1.5 text-sm ${chartTimeframe === 'Year' ? 'bg-[#1E3A8A] text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setChartTimeframe('Year')}
              >
                Year
              </button>
              <button 
                className={`px-3 py-1.5 text-sm ${chartTimeframe === 'Month' ? 'bg-[#1E3A8A] text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setChartTimeframe('Month')}
              >
                Month
              </button>
              <button 
                className={`px-3 py-1.5 text-sm ${chartTimeframe === 'Week' ? 'bg-[#1E3A8A] text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setChartTimeframe('Week')}
              >
                Week
              </button>
            </div>
          </div>
          
          <div className="h-[300px] w-full bg-[#f0f4ff] rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart data={getChartData()} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: "#6b7280", fontSize: 12 }} 
                  />
                  <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: "#6b7280", fontSize: 12 }} 
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                      iconType="circle" 
                      wrapperStyle={{ paddingTop: 10 }} 
                  />
                  <Bar dataKey="Present" fill="#1E3A8A" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Absent" fill="#8da2fb" radius={[4, 4, 0, 0]} />
              </BarChart>

            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Recent Leave Request */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Leave Request</h2>
            <Button 
              className="bg-[#1E3A8A] text-white hover:bg-blue-700"
              onClick={() => setShowNewLeaveForm(!showNewLeaveForm)}
            >
              Apply New
            </Button>
          </div>
          
          {showNewLeaveForm && (
            <Card className="mb-4">
              <CardContent className="p-4">
                <form onSubmit={handleNewLeaveSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Leave Type</label>
                      <select 
                        className="w-full p-2 border rounded-md"
                        value={newLeave.type}
                        onChange={(e) => setNewLeave({...newLeave, type: e.target.value})}
                        required
                      >
                        <option>Medical Leave</option>
                        <option>On Duty</option>
                        <option>Others</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Reason</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded-md"
                        value={newLeave.reason}
                        onChange={(e) => setNewLeave({...newLeave, reason: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Start Date</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded-md"
                          placeholder="DD MMM'YY"
                          value={newLeave.startDate}
                          onChange={(e) => setNewLeave({...newLeave, startDate: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">End Date</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded-md"
                          placeholder="DD MMM'YY"
                          value={newLeave.endDate}
                          onChange={(e) => setNewLeave({...newLeave, endDate: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-2">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setShowNewLeaveForm(false)}
                      >
                        Cancel
                      </Button>
                      <Button 
                        type="submit" 
                        className="bg-[#1E3A8A] text-white hover:bg-blue-700"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
          
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                {leaveRequests.map((request) => (
                  <div key={request.id} className={`flex items-start border-l-4 pl-4 py-2 ${getBorderColor(request.status)}`}>
                    <div className="flex-grow">
                      <p className="font-semibold">{request.type}</p>
                      <p className="text-sm text-gray-600">{request.reason}</p>
                      <p className="text-sm">{request.startDate} - {request.endDate}</p>
                      <p className="text-sm text-gray-600">{request.days}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {getStatusIcon(request.status)}
                      <span className={`text-sm ${
                        request.status === 'Accepted' ? 'text-green-600' : 
                        request.status === 'Rejected' ? 'text-red-600' : 
                        'text-gray-500'
                      }`}>
                        {request.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default AttendancePage;
