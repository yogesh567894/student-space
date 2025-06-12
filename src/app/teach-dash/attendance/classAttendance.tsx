"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const studentIds = Array(30).fill("RA2211003011606");

const CustomTooltip: React.FC<{
  active?: boolean;
  payload?: any;
}> = ({ active, payload }) => {
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

export default function ClassAttendance() {
  const [period, setPeriod] = useState<"year" | "month" | "week">("month");
  const [attendanceDate, setAttendanceDate] = useState("26-nov-2024");
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const toggleCheckbox = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const clearAll = () => setCheckedIds([]);

  const getChartData = () => {
    if (period === "year") {
      return [
        { name: "Jan", Present: 85, Absent: 15 },
        { name: "Feb", Present: 82, Absent: 18 },
        { name: "Mar", Present: 88, Absent: 12 },
        { name: "Apr", Present: 80, Absent: 20 },
        { name: "May", Present: 75, Absent: 25 },
        { name: "Jun", Present: 87, Absent: 13 },
        { name: "Jul", Present: 73, Absent: 27 },
        { name: "Aug", Present: 77, Absent: 23 },
        { name: "Sep", Present: 83, Absent: 17 },
        { name: "Oct", Present: 90, Absent: 10 },
        { name: "Nov", Present: 86, Absent: 14 },
        { name: "Dec", Present: 79, Absent: 21 },
      ];
    } else if (period === "week") {
      return [
        { name: "Mon", Present: 1, Absent: 0 },
        { name: "Tue", Present: 1, Absent: 0 },
        { name: "Wed", Present: 1, Absent: 0 },
        { name: "Thu", Present: 0, Absent: 1 },
        { name: "Fri", Present: 1, Absent: 0 },
      ];
    } else {
      return [
        { name: "Week 1", Present: 20, Absent: 5 },
        { name: "Week 2", Present: 22, Absent: 3 },
        { name: "Week 3", Present: 18, Absent: 7 },
        { name: "Week 4", Present: 25, Absent: 0 },
      ];
    }
  };

  // Summary Data Calculation (working, holidays, half-days)
  const getSummaryData = () => {
    if (period === "year") {
      return {
        working: "240",
        holidays: "50",
        halfDay: "10",
      };
    } else if (period === "week") {
      return {
        working: "5",
        holidays: "0",
        halfDay: "0",
      };
    } else {
      return {
        working: "20",
        holidays: "8",
        halfDay: "0",
      };
    }
  };

  const summary = getSummaryData();

  return (
    <>
      {/* Year/Month buttons with consistent styling */}
      <div className="flex gap-2 mb-4">
        {["year", "month"].map((p) => (
          <Button
            key={p}
            variant={period === p ? "default" : "outline"}
            size="sm"
            className={`text-xs sm:text-sm px-3 ${
              period === p
                ? "bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90"
                : "text-[#1E3A8A] border-[#1E3A8A] hover:bg-[#1E3A8A]/10"
            }`}
            onClick={() => setPeriod(p as any)}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </Button>
        ))}
      </div>

      {/* Summary Cards with consistent styling */}
      <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
        {[
          { label: "No. of days working", value: summary.working },
          { label: "No. of days holidays", value: summary.holidays },
          { label: "No. of days half-day", value: summary.halfDay },
        ].map(({ label, value }) => (
          <Card
            key={label}
            className="flex-1 min-w-[140px] sm:min-w-[160px] p-3 sm:p-4 text-center bg-[#F8FAFC] border-[#E2E8F0]"
          >
            <div className="text-xs text-gray-600">{label}</div>
            <div className="text-xl sm:text-2xl font-bold text-[#1E3A8A]">
              {value}
            </div>
          </Card>
        ))}
      </div>

      {/* Period selector buttons with consistent styling */}
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        {["year", "month", "week"].map((p) => (
          <Button
            key={p}
            variant={period === p ? "default" : "outline"}
            size="sm"
            className={`text-xs sm:text-sm px-3 ${
              period === p
                ? "bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90"
                : "text-[#1E3A8A] border-[#1E3A8A] hover:bg-[#1E3A8A]/10"
            }`}
            onClick={() => setPeriod(p as any)}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </Button>
        ))}
      </div>

      {/* Chart with consistent styling */}
      <div className="h-[300px] w-full bg-[#F8FAFC] rounded-lg p-4 border border-[#E2E8F0]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={getChartData()}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E2E8F0"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B", fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend iconType="circle" wrapperStyle={{ paddingTop: 10 }} />
            <Bar dataKey="Present" fill="#1E3A8A" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Absent" fill="#8DA2FB" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-6" />

      {/* Update Attendance Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-base text-[#1E3A8A]">
          Update Attendance
        </h2>
        <Select value={attendanceDate} onValueChange={setAttendanceDate}>
          <SelectTrigger className="w-[180px] border-[#E2E8F0] focus:ring-[#1E3A8A]">
            <SelectValue placeholder="Select date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="26-nov-2024">26 Nov'2024</SelectItem>
            <SelectItem value="25-nov-2024">25 Nov'2024</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Student List */}
      <div className="border border-[#E2E8F0] rounded-lg p-3 sm:p-4 max-h-[250px] sm:max-h-[300px] overflow-auto mb-4 sm:mb-6 bg-[#F8FAFC]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
          {studentIds.map((id, idx) => {
            const key = id + idx;
            return (
              <label
                key={key}
                className="flex items-center gap-2 text-[#1E3A8A] text-xs hover:bg-[#F1F5F9] p-2 rounded-md transition-colors"
              >
                <input
                  type="checkbox"
                  checked={checkedIds.includes(key)}
                  onChange={() => toggleCheckbox(key)}
                  className="accent-[#1E3A8A] h-4 w-4"
                />
                {id}
              </label>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={clearAll}
          className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A]/10"
        >
          Clear All
        </Button>
        <Button className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90">
          Update Attendance
        </Button>
      </div>
    </>
  );
}
