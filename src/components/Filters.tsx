"use client";

import React, { useState } from "react";

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
        <label className="text-gray-400 text-sm mb-2 font-medium">
          Filter by Role
        </label>
        <div className="relative">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="appearance-none bg-black border border-yellow-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-300 w-full cursor-pointer"
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
        <label className="text-gray-400 text-sm mb-2 font-medium">Tags</label>
        <div className="relative">
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="appearance-none bg-black border border-yellow-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-300 w-full md:w-72 cursor-pointer"
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
        <div className="flex items-center gap-2 mb-2">
          <label className="text-gray-400 text-sm font-medium">Show Top</label>
          <button className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-300 transition-colors">
            <svg
              className="w-3 h-3 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
        <div className="relative">
          <select
            value={selectedTop}
            onChange={(e) => setSelectedTop(e.target.value)}
            className="appearance-none bg-black border border-yellow-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-300 w-full md:w-40 cursor-pointer"
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
