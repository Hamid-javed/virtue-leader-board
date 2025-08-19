import React from 'react';

interface StatCard {
  title: string;
  value: string;
  icon: string;
  color: string;
}

const stats: StatCard[] = [
  {
    title: 'Total VIRTUE',
    value: '1.0M',
    icon: '☀️',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    title: 'Diamond Hands',
    value: '22',
    icon: '💎',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Gladiators',
    value: '21',
    icon: '🪖',
    color: 'from-red-500 to-red-600'
  },
  {
    title: 'Jeets',
    value: '31',
    icon: '📉',
    color: 'from-green-500 to-green-600'
  }
];

const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 px-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl">{stat.icon}</span>
            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
              <span className="text-white font-bold text-lg">{stat.value}</span>
            </div>
          </div>
          <h3 className="text-white font-semibold text-lg">{stat.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
