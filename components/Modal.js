import React, { useState } from "react";
import { UilTimes } from "@iconscout/react-unicons";
const Modal = ({ isOpen, closeModal }) => {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState(["React", "Node", "Express"]);
  const [previousData, setPreviousData] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();

    setInputText(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      setChips([...chips, inputText.trim()]);
      setPreviousData([...previousData, inputText.trim()]);
      setInputText("");
    }
  };

  const handleChipDelete = (chip) => {
    const updatedChips = chips.filter((c) => c !== chip);
    setChips(updatedChips);
  };
  const backgroundBlack = {
    backgroundColor: "rgba(0,0,0,0.6)",
  };
  return (
    <div
      style={backgroundBlack}
      className={`${
        isOpen
          ? "block opacity-100 translate-y-0"
          : "hidden opacity-0 -translate-y-8"
      } fixed z-50 inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none  focus:outline-none transition-opacity transition-transform`}
    >
      <div className="relative md:w-[60vw] w-[95vw] max-w-3xl mx-auto my-6">
        {/* Modal content */}
        <div className="relative flex flex-col bg-white w-full rounded-lg shadow-lg">
          <div className="flex justify-between items-center px-2 border-b-2 border-slate-300">
            <h1 className="text-sky-800 font-bold capitalise">
              Create New Assessment
            </h1>
            <button
              className="p-2 m-2 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              <UilTimes size="20" />
            </button>
          </div>
          <div className="md:p-6 p-3">
            {/* Your modal content goes here */}
            {/* write a code dropdown label with label */}
            <div className="flex flex-col my-2">
              <label className="text-sky-800 font-semibold mb-2">
                Name of Assessment
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 outline-none bg-white"
                placeholder="Type Here"
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="text-sky-800 font-semibold mb-2">
                Purpose of the test is
              </label>

              <select className="border border-gray-300 rounded-md p-2 outline-none bg-white">
                <option value="volvo">Select</option>
                <option value="saab">1</option>
                <option value="mercedes">2</option>
              </select>
            </div>
            <div className="flex flex-col my-2">
              <label className="text-sky-800 font-semibold mb-2">
                Description
              </label>

              <select className="border border-gray-300 rounded-md p-2 outline-none bg-white">
                <option value="volvo">Select</option>
                <option value="saab">1</option>
                <option value="mercedes">2</option>
              </select>
            </div>
            <div className="flex flex-col my-2">
              <label className="text-sky-800 font-semibold mb-2">Skills</label>
              {/* make div for store chips */}
              <div className="flex flex-wrap gap-2 p-2 rounded-md border">
                {chips.map((chip, index) => (
                  <div
                    key={index}
                    className="bg-sky-100 rounded-full px-3 py-1 m-1 flex items-center text-sky-800"
                  >
                    <span className="mr-2">{chip}</span>
                    <button
                      className="text-sky-800"
                      onClick={() => handleChipDelete(chip)}
                    >
                      <UilTimes size="15" />
                    </button>
                  </div>
                ))}
              </div>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 outline-none bg-white"
                placeholder="Type Here"
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="text-sky-800 font-semibold mb-2">
                Duration of Assessment
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 outline-none bg-white"
                placeholder="HH:MM:SS"
              />
            </div>
            <button className="bg-blue-500 w-full text-white rounded-md p-2 mt-4">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
