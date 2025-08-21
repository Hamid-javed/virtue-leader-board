import React from "react";

interface StatCard {
  title: string;
  value: string;
  icon: string;
  bgColor: string;
  textColor: string;
  iconColor: string;
}

const stats: StatCard[] = [
  {
    title: "Total VIRTUE",
    value: "1.0M",
    icon: "/images/virtual.png",
    bgColor: "#DFBC2E1A",
    textColor: "text-amber-300",
    iconColor: "text-yellow-400",
  },
  {
    title: "Diamond Hands",
    value: "22",
    icon: "/images/diamond.png",
    bgColor: "#FFFFFF0A",
    textColor: "text-white",
    iconColor: "text-yellow-400",
  },
  {
    title: "Gladiators",
    value: "21",
    icon: "/images/gladiators.png",
    bgColor: "#FFFFFF0A",
    textColor: "text-white",
    iconColor: "text-orange-500",
  },
  {
    title: "Jeets",
    value: "31",
    icon: "/images/jeets.png",
    bgColor: "#FFFFFF0A",
    textColor: "text-white",
    iconColor: "text-orange-400",
  },
];

const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 px-4 pt-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          style={{ backgroundColor: stat.bgColor }}
          className="rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
        >
          <div className="flex flex-col">
            <h3 className={`${stat.textColor} font-medium text-sm mb-2`}>
              {stat.title}
            </h3>
            <div className="flex items-center justify-between">
              <span className={`${stat.textColor} font-bold text-3xl`}>
                {stat.value}
              </span>
              <img src={stat.icon} alt={stat.title} className="w-8 h-8" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
