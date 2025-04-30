"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import LeaveRequestDialog from "./leaveRequestDialog";

// Summary data
const summaryData = {
  Year: { working: "180", holidays: "40", halfDay: "5" },
  Month: { working: "20", holidays: "08", halfDay: "00" },
  Week: { working: "05", holidays: "01", halfDay: "00" },
};

// Chart datasets
const yearlyData = [
  { name: "April", Present: 85, Absent: 15 },
  { name: "May", Present: 78, Absent: 22 },
  { name: "June", Present: 88, Absent: 12 },
  { name: "July", Present: 79, Absent: 21 },
  { name: "August", Present: 81, Absent: 19 },
  { name: "September", Present: 84, Absent: 16 },
  { name: "October", Present: 90, Absent: 10 },
];

const monthlyData = [
  { name: "Week 1", Present: 18, Absent: 2 },
  { name: "Week 2", Present: 19, Absent: 1 },
  { name: "Week 3", Present: 17, Absent: 3 },
  { name: "Week 4", Present: 20, Absent: 0 },
];

const weeklyData = [
  { name: "Mon", Present: 1, Absent: 0 },
  { name: "Tue", Present: 1, Absent: 0 },
  { name: "Wed", Present: 1, Absent: 0 },
  { name: "Thu", Present: 1, Absent: 0 },
  { name: "Fri", Present: 1, Absent: 0 },
  { name: "Sat", Present: 0, Absent: 1 },
];

// Leave requests
const leaveRequests = [
  {
    type: "Medical Leave",
    reason: "Fever",
    from: "3 Nov’24",
    to: "5 Nov’24",
    days: 3,
    status: "Accepted",
    color: "border-l-4 border-green-600",
  },
  {
    type: "On Duty",
    reason: "ABC School Event",
    from: "3 Nov’24",
    to: "4 Nov’24",
    days: 2,
    status: "Accepted",
    color: "border-l-4 border-blue-500",
  },
  {
    type: "On Duty",
    reason: "ABC School Event",
    from: "3 Nov’24",
    to: "4 Nov’24",
    days: 2,
    status: "Rejected",
    color: "border-l-4 border-red-500",
  },
  {
    type: "Others",
    reason: "Family Event",
    from: "3 Dec’24",
    to: "4 Dec’24",
    days: 2,
    status: "Pending",
    color: "border-l-4 border-gray-400",
  },
];

export default function PersonalAttendance() {
  const [range, setRange] = useState<"Year" | "Month" | "Week">("Month");

  const getChartData = () => {
    switch (range) {
      case "Month":
        return monthlyData;
      case "Week":
        return weeklyData;
      default:
        return yearlyData;
    }
  };

  const summary = summaryData[range];

  return (
    <div className="space-y-6">
      {/* Range Selector */}
      <div className="flex gap-2 mb-4">
        {["year", "month"].map((p) => (
          <Button
            key={p}
            variant={range.toLowerCase() === p ? "default" : "outline"}
            size="sm"
            className="text-sm"
            onClick={() => setRange(p === "year" ? "Year" : "Month")}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </Button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="flex gap-4 flex-wrap">
        {[
          { label: "No. of days working", value: summary.working },
          { label: "No. of days holidays", value: summary.holidays },
          { label: "No. of days half-day", value: summary.halfDay },
        ].map(({ label, value }) => (
          <Card key={label} className="flex-1 min-w-[160px] p-4 text-center">
            <div className="text-xs text-muted-foreground">{label}</div>
            <div className="text-2xl font-bold">{value}</div>
          </Card>
        ))}
      </div>

      {/* Chart Section */}
      <div>
        <div className="flex gap-2 mb-3">
          {["Year", "Month", "Week"].map((option) => (
            <Button
              key={option}
              variant={range === option ? "default" : "outline"}
              size="sm"
              className="text-sm"
              onClick={() => setRange(option as "Year" | "Month" | "Week")}
            >
              {option}
            </Button>
          ))}
        </div>
        <div className="h-[300px] w-full bg-[#f0f4ff] rounded-lg p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={getChartData()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Present" fill="#1E3A8A" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Absent" fill="#8da2fb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Leave Request Section */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-base font-semibold">Leave Request</h2>
          <LeaveRequestDialog />
        </div>
        <div className="space-y-2">
          {leaveRequests.map((req, i) => (
            <Card key={i} className={`p-3 ${req.color}`}>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium">{req.type}</div>
                  <div className="text-xs text-muted-foreground">{req.reason}</div>
                </div>
                <div className="text-xs text-muted-foreground text-right">
                  <div>
                    {req.from} - {req.to}
                  </div>
                  <div>{req.days} Days</div>
                </div>
              </div>
              <div className="mt-1 text-sm font-medium">{req.status}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
