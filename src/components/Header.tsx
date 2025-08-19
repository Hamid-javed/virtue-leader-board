"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  icon: string;
}

const cryptos: Crypto[] = [
  { id: "ltc", name: "Litecoin", symbol: "LTC", icon: "Ł" },
  { id: "sol", name: "Solana", symbol: "SOL", icon: "S" },
  { id: "btc", name: "Bitcoin", symbol: "BTC", icon: "₿" },
  { id: "eth", name: "Ethereum", symbol: "ETH", icon: "Ξ" },
  { id: "xrp", name: "XRP", symbol: "XRP", icon: "X" },
];

const Header: React.FC = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("btc");
  return (
    <header className="py-14 relative">
      <Image
        src="/images/topShadow.png"
        alt="Virtue Token"
        fill
        className="object-cover absolute top-0 left-0 "
      />
      <div className="text-center py-8 px-4">
        <div className="flex items-center justify-center mb-4 gap-6">
          <Image
            src="/images/logo.png"
            alt="Virtue Token"
            width={75}
            height={74}
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            Virtue Token Leaderboard
          </h1>
        </div>
        <p className="text-lg md:text-xl text-gray-500 mb-6 max-w-2xl mx-auto">
          Track the holders, identify the jeets, celebrate the diamond hands.
        </p>
        <div className="inline-block p-[1px] w-[387px] rounded-3xl bg-gradient-to-b from-[#ebc83d] to-transparent relative">
          <div className="bg-[#000000B2] rounded-3xl px-12 py-4 ">
            <span className="text-white font-semibold text-[35px]">
              Total Wallets 128
            </span>
          </div>
          <div className="bg-[#0000002a] rounded-3xl px-8 py-4 absolute top-0 left-0 w-full h-full"></div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-8">
        <div className="flex space-x-4 mb-4">
          {cryptos.map((crypto) => (
            <button
              key={crypto.id}
              onClick={() => setSelectedCrypto(crypto.id)}
              className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-200 ${
                selectedCrypto === crypto.id
                  ? "bg-yellow-500 text-black scale-110 border-2 border-yellow-400"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {crypto.icon}
            </button>
          ))}
        </div>
        <div className="w-1 h-8 bg-gray-600 mb-2"></div>
        <div className="bg-gray-800 rounded-full px-6 py-3 border border-gray-700">
          <span className="text-white font-semibold">
            {cryptos.find((c) => c.id === selectedCrypto)?.name} (
            {cryptos.find((c) => c.id === selectedCrypto)?.symbol})
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
