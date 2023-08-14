import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/MobileSidebar";
import Assesment from "../components/Assesment";
import { UilBars, UilDesktop, UilPlus } from "@iconscout/react-unicons";
const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="md:flex block gap-4 h-screen relative">
        <div className="flex-1 flex md:hidden items-center gap-4 overflow-hidden bg-white p-2">
          <button
            className="z-10 p-2 bg-blue-50 rounded-full text-sky-800"
            onClick={toggleSidebar}
          >
            <UilBars />
          </button>
          <p className="text-sky-800 font-semibold">Assessment</p>
          <div className="hover:bg-blue-50 hover:text-blue-500 p-2 text-sky-800 flex-1 cursor-pointer rounded-full block md:hidden">
            <UilDesktop size="30" className="float-right" />
          </div>
          {/* Your main content goes here */}
        </div>
        {/* Sidebar Overlay */}
        {isSidebarOpen && (
          <div className="fixed z-20 inset-0 bg-black opacity-50 block md:hidden"></div>
        )}
        {/* Sidebar */}
        <div className="block md:hidden">
          <MobileSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex-1 bg-gray-100">
          <Assesment />
        </div>
      </div>
    </>
  );
};

export default Main;
