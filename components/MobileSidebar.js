import React from "react";
import {
  UilTimes,
  UilCreateDashboard,
  UilPresentationEdit,
  UilCommentAltQuestion,
  UilClipboardAlt,
} from "@iconscout/react-unicons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed z-30 inset-y-0 left-0 w-80 bg-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition duration-300 ease-in-out bg-cyan-50 text-sky-800`}
    >
      <div className="flex items-center justify-between px-4 py-6">
        <h1>Menu</h1>
        <button className="p-4" onClick={toggleSidebar}>
          <UilTimes size="20" />
        </button>
      </div>
      {/* Sidebar Content */}

      <ul className="space-y-4">
        <li className="px-1 py-2 font-semibold text-xs text-sky-700 mx-4 flex items-center justify-start  hover:bg-blue-50 border-transparent hover:border-blue-500 border rounded-md hover:text-blue-500">
          <UilCreateDashboard className="mr-2" /> Dashboard
        </li>
        <li className="px-1 py-2 font-semibold text-xs  mx-4 flex items-center justify-start  bg-blue-50 border-blue-500 border rounded-md text-blue-500">
          <UilPresentationEdit className="mr-2" /> Assesment
        </li>
        <li className="px-1 py-2 font-semibold text-xs text-sky-700 mx-4 flex items-center justify-start  hover:bg-blue-50 border-transparent hover:border-blue-500 border rounded-md hover:text-blue-500">
          <UilCommentAltQuestion className="mr-2" /> My Library
        </li>
        <span className="border-b-2 border-gray-200 w-2/3 border-dashed text-center m-auto block" />

        <li className="px-1 py-2 font-semibold text-xs text-sky-700 mx-4 flex items-center justify-start  hover:bg-blue-50 border-transparent hover:border-blue-500 border rounded-md hover:text-blue-500">
          <UilClipboardAlt className="mr-2" /> Round Status
          <div className="ml-auto">
            <span className="bg-red-50 border border-red-500  py-1 px-2 rounded-full text-xs text-red-500">
              Admin
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
