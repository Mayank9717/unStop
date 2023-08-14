import React, { useState } from "react";
import {
  UilCreateDashboard,
  UilPresentationEdit,
  UilCommentAltQuestion,
  UilClipboardAlt,
} from "@iconscout/react-unicons";
const Sidebar = () => {
  return (
    <>
      <div className="bg-white py-6 h-full">
        <ul className="space-y-8">
          <li className="cursor-pointer px-3 py-4 font-semibold text-xs text-sky-700 my-4 mx-4 flex items-center justify-center flex-col hover:bg-blue-50 border-transparent hover:border-blue-500 border rounded-md hover:text-blue-500">
            <UilCreateDashboard className="mr-2" /> Dashboard
          </li>
          <li className="cursor-pointer px-3 py-4 font-semibold text-xs  my-4 mx-4 flex items-center justify-center flex-col bg-blue-50 border-blue-500 border rounded-md text-blue-500">
            <UilPresentationEdit className="mr-2" /> Assesment
          </li>
          <li className="cursor-pointer px-3 py-4 font-semibold text-xs text-sky-700 my-4 mx-4 flex items-center justify-center flex-col hover:bg-blue-50 border-transparent hover:border-blue-500 border rounded-md hover:text-blue-500">
            <UilCommentAltQuestion className="mr-2" /> My Library
          </li>
          <span className="border-b-2 border-gray-200 w-2/3 border-dashed text-center m-auto block" />

          <li className="cursor-pointer px-3 py-4 font-semibold text-xs text-sky-700 my-4 mx-4 flex items-center justify-center flex-col hover:bg-blue-50 border-transparent hover:border-blue-500 border rounded-md hover:text-blue-500">
            <span className="bg-red-50 border border-red-500 mb-2 py-1 px-2 rounded-full text-xs text-red-500">
              Admin
            </span>
            <UilClipboardAlt className="mr-2" /> Round Status
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
