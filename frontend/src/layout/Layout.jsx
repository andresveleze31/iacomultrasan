import Sidebar from "@/components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Toaster } from "@/components/ui/toaster";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="flex gap-5 bg-gray-100">
        <Sidebar />
        <ScrollArea className="p-7 w-full h-screen">
          <Outlet />
        </ScrollArea>
      </div>
      <Toaster />
    </div>
  );
};

export default Layout;
