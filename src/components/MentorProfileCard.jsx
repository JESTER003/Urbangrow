import React from 'react';

function MentorProfileCard({ mentor }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center space-x-4">
        <div className="h-16 w-16 rounded-full bg-emerald-500 flex items-center justify-center text-2xl text-white font-bold">
          {mentor.name[0]}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
          <p className="text-gray-600">{mentor.specialty}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">{mentor.bio}</p>
      </div>
    </div>
  );
}

export default MentorProfileCard; 