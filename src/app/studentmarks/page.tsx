"use client";
import React, { useState } from 'react';
// import { Bell, Menu } from 'lucide-react';
// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
 
import Sidebar from "@/app/student-dash/components/Sidebar";


type SubjectMarks = {
  [key: string]: number[];
};

// type ChartDataItem = {
//   name: string;
//   [key: string]: string | number;
// };

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
 
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Student Marks</h1>
        
 
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
      // Create an array of colors that are shades and tints of #1E3A8A
      const colors = [
        "#1E3A8A", // Base color
        "#294EBA", // Lighter shade
        "#375FD3", // Even lighter
        "#5779DA", // Light tint
        "#8DA2FB"  // Lightest tint
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
