"use client";
import React, { useState } from 'react';
import { Bell, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import Sidebar from "@/app/student-dash/components/Sidebar";

type SubjectMarks = {
  [key: string]: number[];
};

const subjects: string[] = ['Math', 'English', 'BST', 'Accounts', 'Economic'];
const testNames: string[] = ['FT1', 'FT2', 'FT3', 'FT4'];

const studentMarks: SubjectMarks = {
  Math: [55, 63, 33, 79],
  English: [70, 75, 80, 85],
  BST: [65, 70, 75, 80],
  Accounts: [60, 65, 70, 75],
  Economic: [75, 80, 85, 90]
};

const StudentMarksPage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState('Math');

  const barChartData = testNames.map((test, index) => ({
    name: test,
    ...subjects.reduce((acc, subject) => ({
      ...acc,
      [subject]: studentMarks[subject][index]
    }), {})
  }));

  const lineChartData = testNames.map((test, index) => ({
    name: test,
    [selectedSubject]: studentMarks[selectedSubject][index]
  }));

  return (
    <div className="flex min-h-screen h-screen overflow-hidden bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Header with notification and profile */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold lg:pl-0 pl-12">Student Marks</h1>
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

        {/* Rest of the content remains the same */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Overall Performance</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  {subjects.map((subject, index) => {
                    const colors = [
                      "#1E3A8A",
                      "#294EBA",
                      "#375FD3",
                      "#5779DA",
                      "#8DA2FB"
                    ];
                    return (
                      <Bar
                        key={subject}
                        dataKey={subject}
                        fill={colors[index % colors.length]}
                      >
                        {barChartData.map((entry, entryIndex) => (
                          <Cell 
                            key={`cell-${entryIndex}`} 
                            fill={colors[index % colors.length]} 
                          />
                        ))}
                      </Bar>
                    );
                  })}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className='flex items-center justify-between mb-4'>
              <h2 className="text-lg font-semibold mb-4">Subject-wise Analysis</h2>
              <Tabs defaultValue="Math" className="mb-4">
                <TabsList>
                  {subjects.map((subject) => (
                    <TabsTrigger
                      key={subject}
                      value={subject}
                      onClick={() => setSelectedSubject(subject)}
                    >
                      {subject}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          
            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey={selectedSubject}
                    stroke="#1E3A8A"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {testNames.map((test, index) => (
                <Card key={test}>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-gray-600">{test}</h3>
                    <p className="text-2xl font-bold text-[#1E3A8A]">
                      {studentMarks[selectedSubject][index]}/100
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentMarksPage;
