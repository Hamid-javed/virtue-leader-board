"use client";

import React, { useState } from "react";

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

const CryptoSelector: React.FC = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("btc");

  return (
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
  );
};

export default CryptoSelector;
