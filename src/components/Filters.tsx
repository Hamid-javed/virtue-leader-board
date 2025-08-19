'use client';

import React, { useState } from 'react';

interface FilterOption {
  value: string;
  label: string;
}

const roleOptions: FilterOption[] = [
  { value: 'all', label: 'All Roles' },
  { value: 'diamond', label: 'Diamond Hands' },
  { value: 'gladiator', label: 'Gladiators' },
  { value: 'jeet', label: 'Jeets' }
];

const tagOptions: FilterOption[] = [
  { value: 'all', label: 'All tags' },
  { value: 'koi', label: 'KOI' },
  { value: 'whale', label: 'Whale' },
  { value: 'veteran', label: 'Veteran' }
];

const topOptions: FilterOption[] = [
  { value: '25', label: '25' },
  { value: '50', label: '50' },
  { value: '100', label: '100' }
];

const Filters: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  const [selectedTop, setSelectedTop] = useState('25');

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8 px-4 justify-center">
      <div className="flex flex-col">
        <label className="text-gray-400 text-sm mb-2">Filter by Role</label>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500"
        >
          {roleOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-gray-400 text-sm mb-2">Tags</label>
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500"
        >
          {tagOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-gray-400 text-sm mb-2">Show Top</label>
        <select
          value={selectedTop}
          onChange={(e) => setSelectedTop(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500"
        >
          {topOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
