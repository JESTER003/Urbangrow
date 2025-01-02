import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function MentorDetail() {
  const { mentorId } = useParams();
  const navigate = useNavigate();

  // This would typically come from an API or database
  const mentorData = 
    {
      id: mentorId,
      name: "John Smith",
      specialty: "Urban Gardening Expert",
      experience: "15+ years",
      rating: 4.8,
      reviews: 127,
      bio: "Expert in sustainable urban gardening with a focus on small space optimization and organic growing techniques. Certified in permaculture design and hydroponics.",
      expertise: [
        "Small Space Gardening",
        "Hydroponics",
        "Organic Gardening",
        "Permaculture",
        "Indoor Plants"
      ],
      availability: "Mon-Fri, 9AM-5PM",
      hourlyRate: "$45/hour",
      imageUrl: "https://example.com/mentor-image.jpg" // Replace with actual image URL
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
          {/* Mentor Header */}
          <div className="px-4 py-5 sm:px-6 bg-emerald-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-emerald-300 flex items-center justify-center text-2xl text-white font-bold">
                  {mentorData.name[0]}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {mentorData.name}
                  </h2>
                  <p className="text-emerald-100">{mentorData.specialty}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-emerald-100">
                <span>★ {mentorData.rating}</span>
                <span>({mentorData.reviews} reviews)</span>
              </div>
            </div>
          </div>

          {/* Mentor Content */}
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Main Info */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">About</h3>
                  <p className="mt-2 text-gray-600">{mentorData.bio}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">Expertise</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {mentorData.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Session Details</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Rate</label>
                      <p className="text-gray-900">{mentorData.hourlyRate}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Availability</label>
                      <p className="text-gray-900">{mentorData.availability}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Experience</label>
                      <p className="text-gray-900">{mentorData.experience}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      // Add connection logic here
                      alert(`Connecting with ${mentorData.name}...`);
                    }}
                    className="mt-6 w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    Connect with {mentorData.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MentorDetail; 