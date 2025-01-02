import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Mentors() {
  // This would typically come from an API
  const mentors = [
    {
      id: 1,
      name: "John Smith",
      specialty: "Urban Gardening Expert",
      rating: 4.8,
      reviews: 127,
      imageUrl: "https://example.com/mentor1.jpg"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      specialty: "Hydroponics Specialist",
      rating: 4.9,
      reviews: 93,
      imageUrl: "https://example.com/mentor2.jpg"
    },
    {
      id: 3,
      name: "Godabhai Patel",
      specialty: "Hydroponics Specialist",
      rating: 4.9,
      reviews: 93,
      imageUrl: "https://example.com/mentor2.jpg"
    },
    {
      id: 4,
      name: "Bhikhalal ",
      specialty: "Hydroponics Specialist",
      rating: 4.9,
      reviews: 93,
      imageUrl: "https://example.com/mentor2.jpg"
    },
    {
      id: 5,
      name: "Bharatbhai Patel",
      specialty: "Hydroponics Specialist",
      rating: 4.9,
      reviews: 93,
      imageUrl: "https://example.com/mentor2.jpg"
    },
    // Add more mentors...
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Mentors</h1>
          <p className="text-lg text-gray-600">Connect with experienced urban gardening professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.id}
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

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <span>★ {mentor.rating}</span>
                    <span>({mentor.reviews} reviews)</span>
                  </div>
                  <Link
                    to={`/mentors/${mentor.id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mentors;

