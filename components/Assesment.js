import React, { useState } from "react";
import {
  UilDesktop,
  UilDocumentLayoutRight,
  UilUsersAlt,
  UilGlobe,
  UilLinkH,
  UilPlus,
  UilEllipsisV,
  UilBriefcaseAlt,
  UilCalendarAlt,
  UilMobileAndroid,
} from "@iconscout/react-unicons";
import Modal from "./Modal";
const Assesment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="m-0 md:m-2 md:rounded-md rounded-none bg-white rounded-md md:h-[98vh] h-auto shadow-md p-4 text-gray-500 relative">
      <button
        className="fixed block md:hidden bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700"
        onClick={openModal}
      >
        <UilPlus size="30" />
      </button>
      <div className="flex justify-between items-center  h-16 border-b border-slate-200">
        <div className="flex items-center flex-1 h-full md:justify-start justify-between">
          <h1 className="text-sky-800 text-lg font-bold hidden md:block">
            Assessment
          </h1>
          <span className="border-l-2 border-gray-300 h-6 mx-4 hidden md:block"></span>
          <h3
            className="text-blue-500 font-semibold cursor-pointer border-b-2 border-blue-500 underlineEffect inline-flex h-full items-center px-1 text-sm font-semibold capitalize tracking-wider transition-colors
                    duration-300 ease-out hover:ease-in activeUnderline"
          >
            My Assessments
          </h3>
          <h3
            className="text-gray-500 font-semibold cursor-pointer inline-flex h-full items-center px-1 text-sm font-semibold capitalize block md:hidden transition-colors
                    duration-300 ease-out hover:ease-in "
          >
            Unstop Assessments
          </h3>
        </div>
        <div>
          <div className="hover:bg-blue-50 hover:text-blue-500 p-2 cursor-pointer rounded-full hidden md:block">
            <UilMobileAndroid size="30" />
          </div>
        </div>
      </div>
      <div>
        <div className="hidden md:block">
          <h1 className="text-sky-800 text-lg leading-10 my-4">
            Assessments Overview
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2 border border-slate-200 rounded-lg">
            <div className="col-span-2 border-slate-200 font-semibold py-4 px-2 border-0 md:border-r-2 text-sky-800">
              Total Assessments
              <div className="flex items-center gap-2 mt-4 md:gap-4">
                <div className="bg-purple-100 text-purple-500 p-1 rounded-md ">
                  <UilDocumentLayoutRight size="30" />
                </div>
                <h1 className="text-sky-800 text-xl leading-10 font-bold">
                  34
                </h1>
              </div>
            </div>
            <div className="col-span-4 border-slate-200 font-semibold py-4 px-2 border-0 md:border-r-2 text-sky-800">
              Candidates
              <div className="flex items-center gap-2 mt-4 md:gap-4">
                <div className="bg-purple-100 text-purple-500 p-1 rounded-md ">
                  <UilUsersAlt size="30" />
                </div>
                <div className="flex items-center md:gap-4 gap-1">
                  <div>
                    <h1 className="text-sky-800 text-xl leading-10 font-bold">
                      11,145 <span className="text-xs text-green-400">+89</span>
                    </h1>
                    <p className="text-sky-800 text-xs">Total Candidate</p>
                  </div>
                  <span className="border-l-2 border-gray-300 h-6 mx-2" />
                  <div>
                    <h1 className="text-sky-800 text-xl leading-10 font-bold">
                      1,14 <span className="text-xs text-green-400">+89</span>
                    </h1>
                    <p className="text-sky-800 text-xs">Who Attempted</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 border-slate-200 font-semibold py-4 px-2 border-0 md:border-r-2 text-sky-800">
              Candidates Source
              <div className="flex items-center gap-2 mt-4 md:gap-4">
                <div className="bg-red-100 text-red-500 p-1 rounded-md ">
                  <UilGlobe size="30" />
                </div>
                <div className="flex items-center md:gap-4 gap-1">
                  <div>
                    <h1 className="text-sky-800 text-xl leading-10 font-bold">
                      11,000 <span className="text-xs text-green-400">+89</span>
                    </h1>
                    <p className="text-sky-800 text-xs">E-mail</p>
                  </div>
                  <span className="border-l-2 border-gray-300 h-6 mx-2" />
                  <div>
                    <h1 className="text-sky-800 text-xl leading-10 font-bold">
                      145 <span className="text-xs text-green-400">+89</span>
                    </h1>
                    <p className="text-sky-800 text-xs">Social Share</p>
                  </div>
                  <span className="border-l-2 border-gray-300 h-6 mx-2" />
                  <div>
                    <h1 className="text-sky-800 text-xl leading-10 font-bold">
                      145 <span className="text-xs text-green-400">+89</span>
                    </h1>
                    <p className="text-sky-800 text-xs">Unique Link</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 font-semibold py-4 px-2 text-sky-800">
              Total Purpose
              <div className="flex items-center gap-2 mt-4 md:gap-4">
                <div className="bg-blue-100 text-blue-500 p-1 rounded-md ">
                  <UilLinkH size="30" />
                </div>
                <h1 className="text-sky-800 text-xl leading-10 font-bold">
                  11
                </h1>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-sky-800 text-lg leading-10 my-4">My Assessment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div>
            <div
              className="w-auto bg-slate-100 bg-whtie rounded-lg cursor-pointer"
              onClick={openModal}
            >
              <div className="file_upload p-6 relative border-2 border-dotted border-gray-300 rounded-lg">
                <div className="flex justify-center items-center">
                  <div className="bg-white text-blue-500 p-1 rounded-full ">
                    <UilPlus size="50" />
                  </div>
                </div>
                <div className="input_field flex flex-col w-max mx-auto text-center mt-2">
                  <label>
                    <div className=" text-sky-800 rounded font-semibold p-1 px-3">
                      New Assessment
                    </div>
                  </label>

                  <span className="title text-sky-800 inline-block text-xs mt-4">
                    From here you can add question of multiples types like
                  </span>

                  <span className="title text-sky-800 inline-block text-xs mb-1">
                    MCQs, subjective (text or photograph)!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Modal isOpen={isModalOpen} closeModal={closeModal} />
          <div>
            <div className="border border-slate-300 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="bg-purple-100 text-purple-500 p-1 rounded-md ">
                  <UilBriefcaseAlt size="30" />
                </div>
                <div className="cursor-pointer hover:bg-blue-50 hover:rounded-full p-1">
                  <UilEllipsisV size="30" />
                </div>
              </div>
              <h2 className="text-sky-800 text-xl my-2 font-medium">
                Math Assessment
              </h2>
              <div className="flex items-center gap-2">
                <p className="text-sky-800 font-bold">Job</p>
                <span className="border-l-2 border-gray-300 h-6 mx-2" />
                <UilCalendarAlt size="20" />{" "}
                <span className="text-sm">20 Apr 2023</span>
              </div>
              <span className="border-b-2 border-gray-200 w-full border-dashed text-center m-auto py-2 block" />
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2">
                  <div>
                    <p>00</p>
                    <p>Duration</p>
                  </div>
                  <div>
                    <p>00</p>
                    <p>Question</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <h1 className="border border-sky-800 flex cursor-pointer gap-1 items-center px-1 rounded-full">
                      <UilLinkH size="30" /> <span> Share</span>
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-white font-bold bg-purple-600 h-8 flex items-center justify-center w-8 rounded-full">
                      LP
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border border-slate-300 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="bg-purple-100 text-purple-500 p-1 rounded-md ">
                  <UilBriefcaseAlt size="30" />
                </div>
                <div className="cursor-pointer hover:bg-blue-50 hover:rounded-full p-1">
                  <UilEllipsisV size="30" />
                </div>
              </div>
              <h2 className="text-sky-800 text-xl my-2 font-medium">
                Math Assessment
              </h2>
              <div className="flex items-center gap-2">
                <p className="text-sky-800 font-bold">Job</p>
                <span className="border-l-2 border-gray-300 h-6 mx-2" />
                <UilCalendarAlt size="20" />{" "}
                <span className="text-sm">20 Apr 2023</span>
              </div>
              <span className="border-b-2 border-gray-200 w-full border-dashed text-center m-auto py-2 block" />
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2">
                  <div>
                    <p>00</p>
                    <p>Duration</p>
                  </div>
                  <div>
                    <p>00</p>
                    <p>Question</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <h1 className="border border-sky-800 flex cursor-pointer gap-1 items-center px-1 rounded-full">
                      <UilLinkH size="30" /> <span> Share</span>
                    </h1>
                  </div>
                  <div>
                    <div className="flex -space-x-[0.8em]">
                      <h1 className="text-white font-bold bg-purple-600 h-8 flex items-center justify-center w-8 rounded-full">
                        LP
                      </h1>
                      <h1 className="text-white font-bold bg-blue-600 h-8 flex items-center justify-center w-8 rounded-full">
                        LP
                      </h1>
                      <h1 className="text-white font-bold bg-pink-600 h-8 flex items-center justify-center w-8 rounded-full">
                        LP
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <div className="border border-slate-300 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="bg-purple-100 text-purple-500 p-1 rounded-md ">
                  <UilBriefcaseAlt size="30" />
                </div>
                <div className="cursor-pointer hover:bg-blue-50 hover:rounded-full p-1">
                  <UilEllipsisV size="30" />
                </div>
              </div>
              <h2 className="text-sky-800 text-xl my-2 font-medium">
                Math Assessment
              </h2>
              <div className="flex items-center gap-2">
                <p className="text-sky-800 font-bold">Job</p>
                <span className="border-l-2 border-gray-300 h-6 mx-2" />
                <UilCalendarAlt size="20" />{" "}
                <span className="text-sm">20 Apr 2023</span>
              </div>
              <span className="border-b-2 border-gray-200 w-full border-dashed text-center m-auto py-2 block" />
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2">
                  <div>
                    <p>00</p>
                    <p>Duration</p>
                  </div>
                  <div>
                    <p>00</p>
                    <p>Question</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <h1 className="border border-sky-800 flex cursor-pointer gap-1 items-center px-1 rounded-full">
                      <UilLinkH size="30" /> <span> Share</span>
                    </h1>
                  </div>
                  <div>
                    <div className="flex -space-x-[0.8em]">
                      <h1 className="text-white font-bold bg-purple-600 h-8 flex items-center justify-center w-8 rounded-full">
                        LP
                      </h1>
                      <h1 className="text-white font-bold bg-blue-600 h-8 flex items-center justify-center w-8 rounded-full">
                        LP
                      </h1>
                      <h1 className="text-white font-bold bg-pink-600 h-8 flex items-center justify-center w-8 rounded-full">
                        LP
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <div className="border border-slate-300 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="bg-purple-100 text-purple-500 p-1 rounded-md ">
                  <UilBriefcaseAlt size="30" />
                </div>
                <div className="cursor-pointer hover:bg-blue-50 hover:rounded-full p-1">
                  <UilEllipsisV size="30" />
                </div>
              </div>
              <h2 className="text-sky-800 text-xl my-2 font-medium">
                Math Assessment
              </h2>
              <div className="flex items-center gap-2">
                <p className="text-sky-800 font-bold">Job</p>
                <span className="border-l-2 border-gray-300 h-6 mx-2" />
                <UilCalendarAlt size="20" />{" "}
                <span className="text-sm">20 Apr 2023</span>
              </div>
              <span className="border-b-2 border-gray-200 w-full border-dashed text-center m-auto py-2 block" />
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2">
                  <div>
                    <p>00</p>
                    <p>Duration</p>
                  </div>
                  <div>
                    <p>00</p>
                    <p>Question</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <h1 className="border border-sky-800 flex cursor-pointer gap-1 items-center px-1 rounded-full">
                      <UilLinkH size="30" /> <span> Share</span>
                    </h1>
                  </div>
                  <div>
                    <div className="flex -space-x-[0.8em]">
                      <h1 className="text-white font-bold bg-purple-600 h-8 flex items-center justify-center w-8 rounded-full">
                        LP
                      </h1>
                      <h1 className="text-white font-bold bg-blue-600 h-8 flex items-center justify-center w-8 rounded-full">
                        LP
                      </h1>
                      <h1 className="text-white font-bold bg-pink-600 h-8 flex items-center justify-center w-8 rounded-full">
                        LP
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <div className="border border-slate-300 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="bg-purple-100 text-purple-500 p-1 rounded-md ">
                  <UilBriefcaseAlt size="30" />
                </div>
                <div className="cursor-pointer hover:bg-blue-50 hover:rounded-full p-1">
                  <UilEllipsisV size="30" />
                </div>
              </div>
              <h2 className="text-sky-800 text-xl my-2 font-medium">
                Math Assessment
              </h2>
              <div className="flex items-center gap-2">
                <p className="text-sky-800 font-bold">Job</p>
                <span className="border-l-2 border-gray-300 h-6 mx-2" />
                <UilCalendarAlt size="20" />{" "}
                <span className="text-sm">20 Apr 2023</span>
              </div>
              <span className="border-b-2 border-gray-200 w-full border-dashed text-center m-auto py-2 block" />
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2">
                  <div>
                    <p>00</p>
                    <p>Duration</p>
                  </div>
                  <div>
                    <p>00</p>
                    <p>Question</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <h1 className="border border-sky-800 flex cursor-pointer gap-1 items-center px-1 rounded-full">
                      <UilLinkH size="30" /> <span> Share</span>
                    </h1>
                  </div>
                  <div>
                    <div className="flex -space-x-[0.8em]">
                      <h1 className="text-white font-bold bg-purple-600 h-8 flex items-center justify-center w-8 rounded-full">
                        LP
                      </h1>
                      <h1 className="text-white font-bold bg-blue-600 h-8 flex items-center justify-center w-8 rounded-full">
                        LP
                      </h1>
                      <h1 className="text-white font-bold bg-pink-600 h-8 flex items-center justify-center w-8 rounded-full">
                        LP
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assesment;
