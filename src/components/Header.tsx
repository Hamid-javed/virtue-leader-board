"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  icon: string;
}

const cryptos: Crypto[] = [
  { id: "ltc", name: "Litecoin", symbol: "LTC", icon: "/images/LTC.png" },
  { id: "sol", name: "Solana", symbol: "SOL", icon: "/images/SOL.png" },
  { id: "btc", name: "Bitcoin", symbol: "BTC", icon: "/images/bit.png" },
  { id: "eth", name: "Ethereum", symbol: "ETH", icon: "/images/ETH.png" },
  { id: "xrp", name: "XRP", symbol: "XRP", icon: "/images/XPR.png" },
];

const Header: React.FC = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("btc");
  const [hoveredCrypto, setHoveredCrypto] = useState<string | null>(null);
  const swiperRef = useRef<any>(null);

  const handleCryptoSelect = (cryptoId: string) => {
    if (cryptoId !== selectedCrypto) {
      setSelectedCrypto(cryptoId);
    }
  };

  const handleSlideChange = (swiper: any) => {
    // Get the real index considering loop functionality
    const realIndex = swiper.realIndex;
    const cryptoId = cryptos[realIndex].id;
    setSelectedCrypto(cryptoId);
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  // Handle keyboard navigation for accessibility
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slidePrev();
        }
      } else if (event.key === "ArrowRight") {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Update selected crypto when component mounts to ensure correct initial state
  React.useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const realIndex = swiperRef.current.swiper.realIndex;
      setSelectedCrypto(cryptos[realIndex].id);
    }
  }, []);

  return (
    <header className="py-14 relative mb-20">
      <Image
        src="/images/topShadow.png"
        alt="Virtue Token"
        fill
        className="object-cover absolute top-0 left-0 opacity-70"
      />
      <div className="text-center py-8 px-4 mb-5">
        <div className="flex items-center justify-center mb-4 gap-6">
          <Image
            src="/images/logo.png"
            alt="Virtue Token"
            width={75}
            height={74}
            className="animate-pulse"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 animate-fade-in">
            Virtue Token Leaderboard
          </h1>
        </div>
        <p className="text-lg md:text-xl text-gray-500 mb-6 max-w-2xl mx-auto animate-fade-in-delay">
          Track the holders, identify the jeets, celebrate the diamond hands.
        </p>
        <div className="inline-block p-[1px] w-[387px] rounded-3xl bg-gradient-to-b from-[#ebc83d] to-transparent relative animate-fade-in-delay-2">
          <div className="bg-[#000000B2] rounded-3xl px-12 py-4">
            <span className="text-white font-semibold text-[35px]">
              Total Wallets 128
            </span>
          </div>
          <div className="bg-[#0000002a] rounded-3xl px-8 py-4 absolute top-0 left-0 w-full h-full"></div>
        </div>
      </div>
      <div className="flex flex-col items-center my-8 relative">
        <Image
          src="/images/bgcircle.png"
          alt="bgcircle"
          width={100}
          height={100}
          className="absolute -bottom-28 w-[73%] z-0 animate-float"
        />
        <Image
          src="/images/smaillcircle.png"
          alt="bgcircle"
          width={100}
          height={100}
          className="absolute bottom-24 w-[55%] z-0 animate-float"
        />

        {/* Swiper Carousel */}
        <div className="w-full max-w-4xl relative h-full z-10">
          <Swiper
            ref={swiperRef}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className="crypto-swiper"
            onSlideChange={handleSlideChange}
            initialSlide={2} // Start with Bitcoin (BTC) in center
            loop={false}
            speed={800}
            spaceBetween={120}
          >
            {cryptos.map((crypto, index) => {
              const isSelected = selectedCrypto === crypto.id;
              const isHovered = hoveredCrypto === crypto.id;

              // Find the index of the selected crypto
              const selectedIndex = cryptos.findIndex(
                (c) => c.id === selectedCrypto
              );
              const currentIndex = cryptos.findIndex((c) => c.id === crypto.id);

              // Calculate distance from selected crypto
              let distance = Math.abs(currentIndex - selectedIndex);
              if (distance > 2) distance = 2; // Cap at maximum distance

              // Dynamic sizing based on distance from selected crypto
              let buttonSize, iconSize, pcircleSize;

              if (distance === 0) {
                // Selected crypto (center) - LARGE
                buttonSize = "w-56 h-56";
                iconSize = "w-48 h-48";
                pcircleSize = 240;
              } else if (distance === 1) {
                // Adjacent cryptos - MEDIUM
                buttonSize = "w-40 h-40";
                iconSize = "w-32 h-32";
                pcircleSize = 160;
              } else {
                // Outer cryptos - SMALL
                buttonSize = "w-32 h-32";
                iconSize = "w-24 h-24";
                pcircleSize = 128;
              }

              return (
                <SwiperSlide key={crypto.id} className="!w-auto">
                  <div
                    onMouseEnter={() => setHoveredCrypto(crypto.id)}
                    onMouseLeave={() => setHoveredCrypto(null)}
                    className={`relative transition-all duration-700 ease-out transform ${buttonSize} ${
                      isSelected ? "z-20" : "z-10"
                    } ${isHovered && !isSelected ? "z-15" : ""}`}
                  >
                    {/* Glow effect for selected crypto */}
                    {isSelected && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/30 via-orange-500/30 to-yellow-400/30 blur-xl animate-pulse"></div>
                    )}

                    {/* Pcircle.png as parent background */}
                    <Image
                      src="/images/Pcircle.png"
                      alt="select"
                      width={pcircleSize}
                      height={pcircleSize}
                      className={`rounded-full transition-all duration-700 ease-out ${
                        isSelected ? "animate-bounce-slow" : ""
                      } ${isHovered ? "brightness-110" : ""}`}
                    />

                    {/* White border overlay with enhanced styling */}
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-500 ease-out ${
                        isSelected
                          ? " border-white shadow-lg shadow-white/50" // Enhanced selected border
                          : "border-2 border-white/70 hover:border-white" // Hover effect for others
                      } ${isHovered ? "scale-105" : ""}`}
                    />

                    {/* Crypto icon with enhanced animations */}
                    <Image
                      src={crypto.icon}
                      alt={crypto.name}
                      width={isSelected ? 80 : distance === 1 ? 60 : 40}
                      height={isSelected ? 80 : distance === 1 ? 60 : 40}
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${iconSize} ${
                        isSelected
                          ? "animate-pulse-slow border-2 border-white rounded-full shadow-lg"
                          : ""
                      } ${isHovered ? "scale-110" : ""}`}
                    />

                    {/* Selection indicator */}
                    {isSelected && (
                      <div className="absolute z-40 -bottom-3 left-1/2 transform -translate-x-1/2 w-7 h-7 border-2 border-white p-1 rounded-full">
                        <div className="rounded-full bg-white w-full h-full"></div>
                      </div>
                    )}

                    {/* Hover tooltip */}
                    {isHovered && !isSelected && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 animate-fade-in">
                        {crypto.name}
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="w-[3px] h-14 bg-white mb-2 animate-grow "></div>
        <div className="text-center mb-4">
          <p className="text-gray-400 text-sm animate-pulse">
            ← Swipe or use arrows to navigate →
          </p>
        </div>
        <div className=" w-[416px] h-[98px] animate-fade-in-delay-2 relative">
          <Image
            src="/images/rightLine.png"
            alt="rightLine"
            width={100}
            height={100}
            className="absolute w-[230px] -top-16 left-[22.5%] transform -translate-x-1/2"
          />
          <Image
            src="/images/leftLine.png"
            alt="rightLine"
            width={100}
            height={100}
            className="absolute w-[230px] -top-16 left-[77.5%] transform-40 transform -translate-x-1/2"
          />
          <span className="text-white text-[40px] font-semibold bg-gray-800 rounded-2xl border border-white px-6 py-3  w-[390px] h-[80px] flex justify-center gap-3 items-center  transition-all duration-500 hover:border-white hover:bg-gray-700 animate-fade-in-delay-3 absolute top-[110%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {cryptos.find((c) => c.id === selectedCrypto)?.name}
            <span className="font-thin">
              {"  "}({cryptos.find((c) => c.id === selectedCrypto)?.symbol})
            </span>
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          50% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay-2 {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          70% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay-3 {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          90% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes grow {
          from {
            height: 0;
          }
          to {
            height: 2rem;
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1.5s ease-out;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in-delay-2 2s ease-out;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in-delay-3 2.5s ease-out;
        }

        .animate-grow {
          animation: grow 0.8s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        /* Custom Swiper Styles */
        .crypto-swiper {
          padding: 40px 0;
        }

        .crypto-swiper .swiper-slide {
          transition: all 0.8s ease-out;
          margin: 0 20px;
        }

        /* Remove default Swiper scaling since we're handling it dynamically */
        .crypto-swiper .swiper-slide-active,
        .crypto-swiper .swiper-slide-prev,
        .crypto-swiper .swiper-slide-next {
          transform: none;
        }

        /* Ensure proper spacing between slides */
        .crypto-swiper .swiper-wrapper {
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </header>
  );
};

export default Header;
