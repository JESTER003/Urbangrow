import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function MentorDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const mentorData = location.state?.mentor; // Retrieve mentor data passed via `state`

  if (!mentorData) {
    // Redirect to mentors page if no data is passed
    navigate('/mentors');
    return null;
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow rounded-lg overflow-hidden"
        >
          {/* Header Section */}
          <div className="px-4 py-5 sm:px-6 bg-emerald-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Mentor Initial */}
                <div className="h-16 w-16 rounded-full bg-emerald-300 flex items-center justify-center text-2xl text-white font-bold">
                  {mentorData.name[0]}
                </div>
                {/* Mentor Name and Specialty */}
                <div>
                  <h2 className="text-2xl font-bold text-white">{mentorData.name}</h2>
                  <p className="text-emerald-100">{mentorData.specialty}</p>
                </div>
              </div>
              {/* Rating and Reviews */}
              <div className="flex items-center space-x-2 text-emerald-100">
                <span>★ {mentorData.rating}</span>
                <span>({mentorData.reviews} reviews)</span>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">About</h3>
            <p className="mt-2 text-gray-600">{mentorData.bio || 'Bio not available.'}</p>
          </div>

          {/* Expertise Section */}
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">Expertise</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-600">
              {mentorData.expertise?.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MentorDetail;
