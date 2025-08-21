"use client";

import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

interface LeaderboardEntry {
  rank: number;
  role: string;
  roleIcon: string;
  wallet: string;
  name: string;
  balance: string;
  holdTime: string;
  tags: string[];
}

const mockData: LeaderboardEntry[] = [
  {
    rank: 1,
    role: "Diamond Hands",
    roleIcon: "💎",
    wallet: "0x742d_4d8b",
    name: "James",
    balance: "100.0K VIRTUE",
    holdTime: "180 days",
    tags: ["KOI", "Whale"],
  },
  {
    rank: 2,
    role: "Diamond Hands",
    roleIcon: "💎",
    wallet: "0x8f3a_9c2e",
    name: "Charlie",
    balance: "94.0K VIRTUE",
    holdTime: "175 days",
    tags: ["Whale"],
  },
  {
    rank: 3,
    role: "Gladiators",
    roleIcon: "🪖",
    wallet: "0x1a7b_5f9d",
    name: "Jone K.",
    balance: "89.0K VIRTUE",
    holdTime: "170 days",
    tags: ["KOI"],
  },
  {
    rank: 4,
    role: "Diamond Hands",
    roleIcon: "💎",
    wallet: "0x3c9e_8a1f",
    name: "Clark",
    balance: "85.0K VIRTUE",
    holdTime: "165 days",
    tags: [],
  },
  {
    rank: 5,
    role: "Gladiators",
    roleIcon: "🪖",
    wallet: "0x5d2f_7b4c",
    name: "Jk",
    balance: "82.0K VIRTUE",
    holdTime: "160 days",
    tags: ["Veteran"],
  },
  {
    rank: 6,
    role: "Diamond Hands",
    roleIcon: "💎",
    wallet: "0x7e1a_9d3f",
    name: "Charles",
    balance: "78.0K VIRTUE",
    holdTime: "155 days",
    tags: ["KOI"],
  },
  {
    rank: 7,
    role: "Jeets",
    roleIcon: "📉",
    wallet: "0x9f4b_2e8a",
    name: "Mike",
    balance: "75.0K VIRTUE",
    holdTime: "150 days",
    tags: [],
  },
  {
    rank: 8,
    role: "Gladiators",
    roleIcon: "🪖",
    wallet: "0x2c6a_1f9e",
    name: "David",
    balance: "72.0K VIRTUE",
    holdTime: "145 days",
    tags: ["Whale"],
  },
  {
    rank: 9,
    role: "Diamond Hands",
    roleIcon: "💎",
    wallet: "0x4d8b_3a7f",
    name: "Sarah",
    balance: "69.0K VIRTUE",
    holdTime: "140 days",
    tags: ["KOI"],
  },
  {
    rank: 10,
    role: "Jeets",
    roleIcon: "📉",
    wallet: "0x6e9c_5b2a",
    name: "Emma",
    balance: "66.0K VIRTUE",
    holdTime: "135 days",
    tags: ["Veteran"],
  },
  {
    rank: 11,
    role: "Gladiators",
    roleIcon: "🪖",
    wallet: "0x1f7d_8c4e",
    name: "Alex",
    balance: "63.0K VIRTUE",
    holdTime: "130 days",
    tags: [],
  },
  {
    rank: 12,
    role: "Diamond Hands",
    roleIcon: "💎",
    wallet: "0x3a8e_9f1b",
    name: "Lisa",
    balance: "60.0K VIRTUE",
    holdTime: "125 days",
    tags: ["Whale"],
  },
  {
    rank: 13,
    role: "Jeets",
    roleIcon: "📉",
    wallet: "0x5b9f_2c8d",
    name: "Tom",
    balance: "57.0K VIRTUE",
    holdTime: "120 days",
    tags: ["KOI"],
  },
  {
    rank: 14,
    role: "Gladiators",
    roleIcon: "🪖",
    wallet: "0x7c1a_3e9f",
    name: "Anna",
    balance: "54.0K VIRTUE",
    holdTime: "115 days",
    tags: [],
  },
  {
    rank: 15,
    role: "Diamond Hands",
    roleIcon: "💎",
    wallet: "0x9d2b_4f1a",
    name: "John",
    balance: "51.0K VIRTUE",
    holdTime: "110 days",
    tags: ["Veteran"],
  },
  {
    rank: 16,
    role: "Jeets",
    roleIcon: "📉",
    wallet: "0x2e3c_5a8b",
    name: "Kate",
    balance: "48.0K VIRTUE",
    holdTime: "105 days",
    tags: ["KOI"],
  },
  {
    rank: 17,
    role: "Gladiators",
    roleIcon: "🪖",
    wallet: "0x4f5d_6b9c",
    name: "Paul",
    balance: "45.0K VIRTUE",
    holdTime: "100 days",
    tags: ["Whale"],
  },
  {
    rank: 18,
    role: "Diamond Hands",
    roleIcon: "💎",
    wallet: "0x6a7b_8c9d",
    name: "Mary",
    balance: "42.0K VIRTUE",
    holdTime: "95 days",
    tags: [],
  },
  {
    rank: 19,
    role: "Jeets",
    roleIcon: "📉",
    wallet: "0x8b9c_1d2e",
    name: "Robert",
    balance: "39.0K VIRTUE",
    holdTime: "90 days",
    tags: ["Veteran"],
  },
  {
    rank: 20,
    role: "Gladiators",
    roleIcon: "🪖",
    wallet: "0x1c2d_3e4f",
    name: "Linda",
    balance: "36.0K VIRTUE",
    holdTime: "85 days",
    tags: ["KOI"],
  },
  {
    rank: 21,
    role: "Diamond Hands",
    roleIcon: "💎",
    wallet: "0x3d4e_5f6a",
    name: "William",
    balance: "33.0K VIRTUE",
    holdTime: "80 days",
    tags: ["Whale"],
  },
  {
    rank: 22,
    role: "Jeets",
    roleIcon: "📉",
    wallet: "0x5e6f_7a8b",
    name: "Elizabeth",
    balance: "30.0K VIRTUE",
    holdTime: "75 days",
    tags: [],
  },
  {
    rank: 23,
    role: "Gladiators",
    roleIcon: "🪖",
    wallet: "0x7a8b_9c1d",
    name: "Richard",
    balance: "27.0K VIRTUE",
    holdTime: "70 days",
    tags: ["KOI"],
  },
  {
    rank: 24,
    role: "Diamond Hands",
    roleIcon: "💎",
    wallet: "0x9b1c_2d3e",
    name: "Patricia",
    balance: "24.0K VIRTUE",
    holdTime: "65 days",
    tags: ["Veteran"],
  },
  {
    rank: 25,
    role: "Jeets",
    roleIcon: "📉",
    wallet: "0x2c3d_4e5f",
    name: "Michael",
    balance: "21.0K VIRTUE",
    holdTime: "60 days",
    tags: ["Whale"],
  },
];

const LeaderboardTable: React.FC = () => {
  const [entries] = useState<LeaderboardEntry[]>(mockData);

  return (
    <div className="px-4 mb-8">
      <h2 className="text-3xl md:text-[80px] font-bold text-[#DFBC2E] text-center mb-6">
        LEADERBOARD
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full rounded-xl border-y border-gray-700">
          <thead>
            <tr className="border-b border-gray-700 bg-[#594B12] text-xl">
              <th className="text-left py-2 px-4 text-white font-semibold">
                Rank
              </th>
              <th className="text-left py-2 px-4 text-white font-semibold">
                Roles
              </th>
              <th className="text-left py-2 px-4 text-white font-semibold">
                Wallet
              </th>
              <th className="text-left py-2 px-4 text-white font-semibold">
                Name
              </th>
              <th className="text-left py-2 px-4 text-white font-semibold">
                Balance
              </th>
              <th className="text-left py-2 px-4 text-white font-semibold">
                Hold Time
              </th>
              <th className="text-left py-2 px-4 text-white font-semibold">
                Tags
              </th>
              <th className="text-left py-2 px-4 text-white font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr
                key={entry.rank}
                className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
              >
                <td className="p-4 text-white font-normal">
                  <div className="flex items-center gap-2">
                    {entry.rank <= 3 && (
                      <img
                        src="/images/top.png"
                        alt="Top Rank"
                        className="w-6 h-6"
                      />
                    )}
                    {entry.rank.toString().padStart(2, "0")}
                  </div>
                </td>
                <td className="p-4 w-48">
                  <div className="flex items-center space-x-2">
                    <div className="bg-[#6e612f2a] border border-[#DFBC2E] rounded-3xl px-3 py-2 flex items-center space-x-2 w-full">
                      <img
                        src={
                          entry.role === "Diamond Hands"
                            ? "/images/diamond.png"
                            : entry.role === "Gladiators"
                            ? "/images/gladiators.png"
                            : "/images/jeets.png"
                        }
                        alt={entry.role}
                        className="w-5 h-5"
                      />
                      <span className="text-gray-200 font-medium text-sm truncate">
                        {entry.role}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-gray-300 font-mono">{entry.wallet}</td>
                <td className="p-4 text-white font-normal">{entry.name}</td>
                <td className="p-4 text-white font-normal">{entry.balance}</td>
                <td className="p-4 text-gray-300">{entry.holdTime}</td>
                <td className="p-4">
                  <div className="text-sm">
                    {entry.tags.length > 0 ? (
                      entry.tags.map((tag, index) => (
                        <span key={index}>
                          <span
                            className={
                              tag === "KOI"
                                ? "text-yellow-400"
                                : tag === "Whale"
                                ? "text-green-400"
                                : tag === "Veteran"
                                ? "text-blue-400"
                                : "text-gray-300"
                            }
                          >
                            {tag}
                          </span>
                          {index < entry.tags.length - 1 && (
                            <span className="text-gray-400">, </span>
                          )}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <button className="text-white flex items-center gap-1">
                    View <IoEyeOutline className="w-4 h-4 text-amber-300" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
