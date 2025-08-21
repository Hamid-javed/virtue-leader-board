"use client";

import React, { useState } from "react";
import { IoReload } from "react-icons/io5";

interface FilterOption {
  value: string;
  label: string;
}

const roleOptions: FilterOption[] = [
  { value: "all", label: "All Roles" },
  { value: "diamond", label: "Diamond Hands" },
  { value: "gladiator", label: "Gladiators" },
  { value: "jeet", label: "Jeets" },
];

const tagOptions: FilterOption[] = [
  { value: "all", label: "All tags" },
  { value: "koi", label: "KOI" },
  { value: "whale", label: "Whale" },
  { value: "veteran", label: "Veteran" },
];

const topOptions: FilterOption[] = [
  { value: "25", label: "25" },
  { value: "50", label: "50" },
  { value: "100", label: "100" },
];

const Filters: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");
  const [selectedTop, setSelectedTop] = useState("25");

  return (
    <div className="flex flex-col sm:flex-row gap-6 mb-8 px-4 w-full">
      <div className="flex flex-col flex-1">
        <label className="text-gray-400 text-xl mb-2 font-medium">
          Filter by Role
        </label>
        <div className="relative">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="appearance-none bg-black border border-[#DFBC2E] rounded-[20px] px-4 py-3 text-white focus:outline-none focus:border-yellow-300 w-full cursor-pointer"
          >
            {roleOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-black text-white"
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-gray-400 text-xl mb-2 font-medium">Tags</label>
        <div className="relative">
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="appearance-none bg-black border border-[#DFBC2E] rounded-[20px] px-4 py-3 text-white focus:outline-none focus:border-yellow-300 w-full md:w-72 cursor-pointer"
          >
            {tagOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-black text-white"
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-center gap-2 mb-2">
          <label className="text-gray-400 text-xl font-medium">Show Top</label>
          <IoReload className="text-[#DFBC2E] text-lg" />
        </div>
        <div className="relative">
          <select
            value={selectedTop}
            onChange={(e) => setSelectedTop(e.target.value)}
            className="appearance-none bg-black border border-[#DFBC2E] rounded-[20px] px-4 py-3 text-white focus:outline-none focus:border-yellow-300 w-full md:w-40 cursor-pointer"
          >
            {topOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-black text-white"
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
