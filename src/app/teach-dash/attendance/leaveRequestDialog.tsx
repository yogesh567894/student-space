"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, X } from "lucide-react";

export default function LeaveRequestDialog() {
  const [open, setOpen] = useState(false);
  const [fromDate, setFromDate] = useState<Date | undefined>(undefined);
  const [tillDate, setTillDate] = useState<Date | undefined>(undefined);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Apply New</Button>
      </DialogTrigger>

      <DialogContent className="max-w-md rounded-xl px-6 py-4 shadow-xl">
        <div className="flex items-center justify-between">
          <DialogTitle className="text-lg font-bold text-blue-900">Leave Request</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" className="rounded-full p-1">
              <X className="w-5 h-5" />
            </Button>
          </DialogClose>
        </div>

        <div className="space-y-4 mt-2">
          <Input placeholder="Subject" />
          <Input placeholder="Reason" />

          <div className="flex flex-col gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left text-muted-foreground">
                  {fromDate ? format(fromDate, "dd-MM-yyyy") : "Date from"}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={fromDate} onSelect={setFromDate} />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left text-muted-foreground">
                  {tillDate ? format(tillDate, "dd-MM-yyyy") : "Date till"}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-80" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={tillDate} onSelect={setTillDate} />
              </PopoverContent>
            </Popover>
          </div>

          <Button className="w-fit self-end px-6">Apply New</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
