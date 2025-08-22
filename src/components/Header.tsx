"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

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
  const [dotPositions, setDotPositions] = useState<
    Array<{ left: string; top: string; delay: string; duration: string }>
  >([]);
  const [windowWidth, setWindowWidth] = useState(1024); // Default fallback
  const swiperRef = useRef<{ swiper: SwiperType }>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Generate dot positions only once when component mounts
  React.useEffect(() => {
    const positions = [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 2}s`,
    }));
    setDotPositions(positions);
  }, []);

  // Track window width for responsive sizing
  React.useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    updateWindowWidth();

    // Add event listener
    window.addEventListener("resize", updateWindowWidth);

    // Cleanup
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  // Auto-scroll functionality
  React.useEffect(() => {
    const startAutoScroll = () => {
      autoScrollIntervalRef.current = setInterval(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
          const currentIndex = swiperRef.current.swiper.realIndex;
          const nextIndex = (currentIndex + 1) % cryptos.length;
          swiperRef.current.swiper.slideToLoop(nextIndex);
        }
      }, 3000);
    };

    const stopAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };

    // Start auto-scroll
    startAutoScroll();

    // Cleanup on unmount
    return () => {
      stopAutoScroll();
    };
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    // Get the real index considering loop functionality
    const realIndex = swiper.realIndex;
    const cryptoId = cryptos[realIndex].id;
    setSelectedCrypto(cryptoId);
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

  // Pause auto-scroll on hover, resume on mouse leave
  const handleMouseEnter = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!autoScrollIntervalRef.current) {
      autoScrollIntervalRef.current = setInterval(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
          const currentIndex = swiperRef.current.swiper.realIndex;
          const nextIndex = (currentIndex + 1) % cryptos.length;
          swiperRef.current.swiper.slideToLoop(nextIndex);
        }
      }, 3000);
    }
  };

  return (
    <header className="py-4 sm:py-6 md:py-14 relative mb-8 sm:mb-12 md:mb-20">
      <Image
        src="/images/topShadow.png"
        alt="Virtue Token"
        fill
        className="object-cover absolute top-0 left-0 opacity-70"
      />

      {/* Background white dots for starry effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dotPositions.map((dot, index) => (
          <div
            key={index}
            className="absolute w-0.5 h-0.5 bg-white/50 rounded-full "
            style={{
              left: dot.left,
              top: dot.top,
              animationDelay: dot.delay,
              animationDuration: dot.duration,
            }}
          />
        ))}
      </div>

      <div className="text-center  py-2 sm:py-4 md:py-8 px-3 sm:px-4 mb-8 sm:mb-3 md:mb-5 relative">
        <div className="flex flex-col md:flex-row items-center justify-center mb-3 sm:mb-4 gap-2 sm:gap-3 md:gap-6">
          <Image
            src="/images/logo.png"
            alt="Virtue Token"
            width={75}
            height={74}
            className="animate-pulse w-12 h-12 sm:w-16 sm:h-16 md:w-[75px] md:h-[74px]"
          />
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-1 sm:mb-2 animate-fade-in text-center">
            Virtue Token Leaderboard
          </h1>
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mb-3 sm:mb-4 md:mb-6 max-w-2xl mx-auto animate-fade-in-delay px-3 sm:px-4">
          Track the holders, identify the jeets, celebrate the diamond hands.
        </p>
        <div className="inline-block w-[240px] sm:w-[280px] md:w-[320px] lg:w-[387px] rounded-xl sm:rounded-2xl md:rounded-3xl border-b-0 border-2 border-[#ebc83dcc] relative animate-fade-in-delay-2">
          <div className="bg-[#000000B2] rounded-xl sm:rounded-2xl md:rounded-3xl px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 md:py-4">
            <span className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-[35px]">
              Total Wallets 128
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-4 sm:my-6 md:my-8 relative ">
        <Image
          src="/images/bgcircle.png"
          alt="bgcircle"
          width={100}
          height={100}
          className="absolute md:-bottom-40 w-[85%] sm:w-[80%] md:w-[73%] z-0"
        />
        <Image
          src="/images/smaillcircle.png"
          alt="bgcircle"
          width={100}
          height={100}
          className="absolute md:bottom-0 w-[70%] sm:w-[60%] md:w-[55%] z-0"
        />

        {/* Swiper Carousel */}
        <div
          className="w-full max-w-4xl relative z-10 min-h-[20vh] sm:min-h-[32vh] md:min-h-[34vh]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            ref={swiperRef}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: -30,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className="crypto-swiper"
            onSlideChange={handleSlideChange}
            initialSlide={2} // Start with Bitcoin (BTC) in center
            loop={false}
            speed={600}
            spaceBetween={0}
            // breakpoints={{
            //   640: {
            //     spaceBetween: 80,
            //   },
            //   768: {
            //     spaceBetween: 100,
            //   },
            //   1024: {
            //     spaceBetween: 110,
            //   },
            // }}
          >
            {cryptos.map((crypto) => {
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
                buttonSize =
                  "w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-56 lg:h-56";
                iconSize =
                  "w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-48 lg:h-48";
                pcircleSize =
                  windowWidth < 640 ? 80 : windowWidth < 1024 ? 160 : 240;
              } else if (distance === 1) {
                // Adjacent cryptos - MEDIUM
                buttonSize =
                  "w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40";
                iconSize =
                  "w-12 h-12 sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-32 lg:h-32";
                pcircleSize =
                  windowWidth < 640 ? 64 : windowWidth < 1024 ? 128 : 160;
              } else {
                // Outer cryptos - SMALL
                buttonSize =
                  "w-14 h-14 sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-32 lg:h-32";
                iconSize =
                  "w-10 h-10 sm:w-12 sm:h-12 md:w-24 md:h-24 lg:w-24 lg:h-24";
                pcircleSize =
                  windowWidth < 640 ? 56 : windowWidth < 1024 ? 96 : 128;
              }

              return (
                <SwiperSlide key={crypto.id} className="!w-auto pb-2 sm:pb-3">
                  <div
                    onMouseEnter={() => setHoveredCrypto(crypto.id)}
                    onMouseLeave={() => setHoveredCrypto(null)}
                    className={`relative transition-all duration-500 ease-out transform  ${buttonSize} ${
                      isSelected ? "z-20" : "z-10"
                    } ${isHovered && !isSelected ? "z-15" : ""}`}
                  >
                    {/* Pcircle.png as parent background */}
                    <Image
                      src="/images/Pcircle.png"
                      alt="select"
                      width={pcircleSize}
                      height={pcircleSize}
                      className="rounded-full transition-all duration-500 ease-out"
                    />

                    {/* White border overlay with enhanced styling */}
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-300 ease-out ${
                        isSelected
                          ? "border-2 border-white shadow-lg shadow-white/50"
                          : "border-2 border-white/70 hover:border-white"
                      }`}
                    />

                    {/* Crypto icon with smooth transitions */}
                    <Image
                      src={crypto.icon}
                      alt={crypto.name}
                      width={
                        isSelected
                          ? windowWidth < 640
                            ? 32
                            : windowWidth < 1024
                            ? 60
                            : 80
                          : distance === 1
                          ? windowWidth < 640
                            ? 28
                            : windowWidth < 1024
                            ? 60
                            : 80
                          : windowWidth < 640
                          ? 24
                          : windowWidth < 1024
                          ? 50
                          : 65
                      }
                      height={
                        isSelected
                          ? windowWidth < 640
                            ? 32
                            : windowWidth < 1024
                            ? 60
                            : 80
                          : distance === 1
                          ? windowWidth < 640
                            ? 28
                            : windowWidth < 1024
                            ? 60
                            : 80
                          : windowWidth < 640
                          ? 24
                          : windowWidth < 1024
                          ? 50
                          : 65
                      }
                      className={`absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-1/2 transition-all duration-500 ease-out ${iconSize} ${
                        isSelected
                          ? "border-2 border-white rounded-full shadow-lg"
                          : ""
                      }`}
                    />

                    {/* Selection indicator */}
                    {isSelected && (
                      <div className="absolute z-40 -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-5 h-5 sm:w-7 sm:h-7 border-2 border-white p-0.5 sm:p-1 rounded-full">
                        <div className="rounded-full bg-white w-full h-full"></div>
                      </div>
                    )}

                    {/* Hover tooltip */}
                    {isHovered && !isSelected && (
                      <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300">
                        {crypto.name}
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* <div className="w-[6px] h-14 bg-white mb-2 animate-grow "></div> */}
        {/* <div className="text-center mb-4">
          <p className="text-gray-400 text-sm animate-pulse">
            ← Swipe or use arrows to navigate →
          </p>
        </div> */}
        <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[416px] h-[50px] sm:h-[60px] md:h-[80px] lg:h-[98px] animate-fade-in-delay-2 relative">
          <Image
            src="/images/rightLine.png"
            alt="rightLine"
            width={100}
            height={100}
            className="hidden lg:block absolute w-[120px] md:w-[180px] lg:w-[230px] -top-8 md:-top-12 lg:-top-4 left-[22.5%] transform -translate-x-1/2"
          />
          <Image
            src="/images/leftLine.png"
            alt="leftLine"
            width={100}
            height={100}
            className="hidden lg:block absolute w-[120px] md:w-[180px] lg:w-[230px] -top-8 md:-top-12 lg:-top-4 left-[77.5%] transform -translate-x-1/2"
          />
          <span className="text-white text-base sm:text-lg md:text-2xl lg:text-[40px] font-semibold bg-[#3D340D] rounded-lg sm:rounded-xl md:rounded-[21px] border border-white px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-3 w-[220px] sm:w-[280px] md:w-[320px] lg:w-[390px] h-[40px] sm:h-[50px] md:h-[65px] lg:h-[80px] flex justify-center gap-1.5 sm:gap-2 md:gap-3 items-center transition-all duration-500 hover:border-white hover:bg-gray-700 animate-fade-in-delay-3 absolute lg:top-[140%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {cryptos.find((c) => c.id === selectedCrypto)?.name}
            <span className="font-thin text-xs sm:text-sm md:text-base lg:text-lg">
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

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
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

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        /* Custom Swiper Styles */
        .crypto-swiper {
          padding: 15px 0;
        }

        @media (min-width: 640px) {
          .crypto-swiper {
            padding: 20px 0;
          }
        }

        @media (min-width: 768px) {
          .crypto-swiper {
            padding: 30px 0;
          }
        }

        @media (min-width: 1024px) {
          .crypto-swiper {
            padding: 40px 0;
          }
        }

        .crypto-swiper .swiper-slide {
          transition: all 0.8s ease-out;
          margin: 0 5px;
        }

        @media (min-width: 640px) {
          .crypto-swiper .swiper-slide {
            margin: 0 10px;
          }
        }

        @media (min-width: 768px) {
          .crypto-swiper .swiper-slide {
            margin: 0 15px;
          }
        }

        @media (min-width: 1024px) {
          .crypto-swiper .swiper-slide {
            margin: 0 20px;
          }
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
