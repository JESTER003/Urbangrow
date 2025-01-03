import React from 'react';

function ToggleButton({ isEnabled, onToggle }) {
  return (
    <div className="flex justify-center items-center relative rounded-full p-1 bg-gradient-to-b from-gray-300 to-gray-200 shadow-inner">
      <input
        type="checkbox"
        checked={isEnabled}
        onChange={onToggle}
        className="absolute w-full h-full opacity-0 cursor-pointer"
      />
      <div
        className={`flex items-center relative rounded-full w-12 h-6 bg-gray-200 shadow-inner transition-colors duration-300 ${
          isEnabled ? 'bg-yellow-400' : ''
        }`}
      >
        <div
          className={`flex justify-center items-center absolute left-0.5 rounded-full w-5 h-5 bg-gray-200 shadow-md transition-transform duration-300 ${
            isEnabled ? 'translate-x-6' : ''
          }`}
        >
          <div className="grid grid-cols-3 gap-0.5">
            <div className="rounded-full w-1 h-1 bg-gradient-to-b from-gray-100 to-gray-400"></div>
            <div className="rounded-full w-1 h-1 bg-gradient-to-b from-gray-100 to-gray-400"></div>
            <div className="rounded-full w-1 h-1 bg-gradient-to-b from-gray-100 to-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToggleButton; 