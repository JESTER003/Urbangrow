import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import MentorProfileCard from '../components/MentorProfileCard';
import axios from 'axios';

function Mentors() {
  const { user } = useAuth();
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/mentors');
        setMentors(response.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  const handleConnect = async (mentorId, mentorName) => {
    try {
      const response = await axios.post('http://localhost:5000/api/requests', {
        userId: user.id,
        mentorId,
        userName: user.name,
      });
      if (response.status === 201) {
        alert(`Request sent to ${mentorName}`);
      } else {
        alert("Failed to send request");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      alert("Failed to send request");
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Mentors</h1>
          <p className="text-lg text-gray-600">Connect with experienced urban gardening professionals</p>
        </div>

        {/* Mentor Profile Card for Logged-in Mentor */}
        {user?.role === 'mentor' && (
          <MentorProfileCard mentor={user} />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <motion.div
              key={mentor._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-emerald-500 flex items-center justify-center text-2xl text-white font-bold">
                    {mentor.name[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                    <p className="text-gray-600">{mentor.specialty}</p>
                  </div>
                </div>

                <div className=" flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <span>★ {mentor.rating}</span>
                    <span>({mentor.reviews} reviews)</span>
                  </div>
                  <Link
                    to={`/mentors/${mentor._id}`}
                    state={{ mentor }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    View Profile
                  </Link>
                </div>

                {/* Connect Button */}
                <button
                  onClick={() => handleConnect(mentor._id, mentor.name)}
                  className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Connect {mentor.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mentors;
