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

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// interface Crypto {
//   id: string;
//   name: string;
//   symbol: string;
//   icon: string;
// }

// const cryptos: Crypto[] = [
//   { id: "ltc", name: "Litecoin", symbol: "LTC", icon: "/images/LTC.png" },
//   { id: "sol", name: "Solana", symbol: "SOL", icon: "/images/SOL.png" },
//   { id: "btc", name: "Bitcoin", symbol: "BTC", icon: "/images/bit.png" },
//   { id: "eth", name: "Ethereum", symbol: "ETH", icon: "/images/ETH.png" },
//   { id: "xrp", name: "XRP", symbol: "XRP", icon: "/images/XPR.png" },
// ];

// const Header: React.FC = () => {
//   const [selectedCrypto, setSelectedCrypto] = useState("btc");

//   return (
//     <header className="py-14 relative">
//       {/* Title Section */}
//       <div className="text-center py-8 px-4 mb-5 relative z-10">
//         <div className="flex items-center justify-center mb-4 gap-6">
//           <Image
//             src="/images/logo.png"
//             alt="Virtue Token"
//             width={75}
//             height={74}
//           />
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
//             Virtue Token Leaderboard
//           </h1>
//         </div>
//         <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
//           Track the holders, identify the jeets, celebrate the diamond hands.
//         </p>
//       </div>

//       {/* Crypto Carousel */}
//       <div className="flex flex-col items-center mb-8 relative z-10">
//         <Swiper
//           slidesPerView={5}
//           centeredSlides
//           spaceBetween={30}
//           onSlideChange={(swiper) => {
//             const index = swiper.activeIndex;
//             setSelectedCrypto(cryptos[index].id);
//           }}
//           initialSlide={cryptos.findIndex((c) => c.id === selectedCrypto)}
//           className="w-full max-w-5xl"
//         >
//           {cryptos.map((crypto, index) => (
//             <SwiperSlide
//               key={crypto.id}
//               className="flex justify-center items-center"
//             >
//               {({ isActive, isPrev, isNext }) => {
//                 // get distance from center
//                 const activeIndex = cryptos.findIndex(
//                   (c) => c.id === selectedCrypto
//                 );
//                 const distance = Math.abs(index - activeIndex);

//                 // sizes
//                 let circleSize = "w-24 h-24"; // small
//                 let iconSize = "w-12 h-12";
//                 if (distance === 0) {
//                   circleSize = "w-48 h-48"; // large center
//                   iconSize = "w-24 h-24";
//                 } else if (distance === 1) {
//                   circleSize = "w-36 h-36"; // medium
//                   iconSize = "w-20 h-20";
//                 } else if (distance === 2) {
//                   circleSize = "w-32 h-32"; // slightly smaller medium
//                   iconSize = "w-16 h-16";
//                 }

//                 return (
//                   <div
//                     className={`relative transition-all duration-300 flex justify-center items-center ${circleSize}`}
//                   >
//                     {/* Circle background */}
//                     <Image
//                       src="/images/Pcircle.png"
//                       alt="select"
//                       fill
//                       className="rounded-full object-contain"
//                     />

//                     {/* Icon */}
//                     <Image
//                       src={crypto.icon}
//                       alt={crypto.name}
//                       width={80}
//                       height={80}
//                       className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${iconSize} ${
//                         isActive ? "scale-110 border-2 border-white p-2" : ""
//                       }`}
//                     />
//                   </div>
//                 );
//               }}
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Divider + Label */}
//         <div className="w-1 h-8 bg-white my-4"></div>
//         <div className="bg-gray-800 rounded-full px-6 py-3 border border-white">
//           <span className="text-white font-semibold">
//             {cryptos.find((c) => c.id === selectedCrypto)?.name} (
//             {cryptos.find((c) => c.id === selectedCrypto)?.symbol})
//           </span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
