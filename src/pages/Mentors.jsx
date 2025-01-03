import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Mentors() {
  const mentors = [
    {
      id: 1,
      name: "John Smith",
      specialty: "Commercial Farming Expert",
      rating: 4.8,
      reviews: 127,
      bio: "With over 15 years of experience in large-scale agriculture, John specializes in optimizing yields for commercial farms. He has a deep understanding of advanced machinery, modern irrigation systems, and crop rotation techniques. John has helped transform numerous farms into profitable ventures by leveraging technology and sustainable practices.",
      expertise: ["Crop Rotation", "Modern Irrigation Systems", "Agri-Tech Integration"],
      imageUrl: "https://example.com/mentor1.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      specialty: "Plantation Farming Specialist",
      rating: 4.9,
      reviews: 93,
      bio: "Sarah has spent over a decade mastering plantation farming, particularly in cultivating tea, coffee, and spices. Her expertise lies in soil health management, pest control, and maximizing yields in tropical climates. She has worked with farmers across India to improve cash crop production sustainably.",
      expertise: ["Tea Cultivation", "Soil Health Management", "Sustainable Cash Crop Farming"],
      imageUrl: "https://example.com/mentor2.jpg",
    },
    {
      id: 3,
      name: "Godabhai Patel",
      specialty: "Mixed Farming Innovator",
      rating: 4.7,
      reviews: 89,
      bio: "Godabhai is a mixed farming pioneer with expertise in integrating crop production and livestock rearing. He has introduced innovative methods like crop forestry and fish rearing in paddy fields, creating diverse and sustainable farming ecosystems.",
      expertise: ["Crop Forestry", "Horticulture", "Paddy with Fish Rearing"],
      imageUrl: "https://example.com/mentor3.jpg",
    },
    {
      id: 4,
      name: "Bhikhalal Mehta",
      specialty: "Terrace Agriculture Expert",
      rating: 4.6,
      reviews: 72,
      bio: "Bhikhalal is a seasoned terrace agriculture mentor who has helped farmers adapt to challenging mountainous terrains. His methods focus on designing efficient terraces, managing water resources, and cultivating high-altitude crops. Bhikhalal is passionate about empowering farmers in hilly regions.",
      expertise: ["Terrace Design", "High-Altitude Crop Cultivation", "Water Resource Management"],
      imageUrl: "https://example.com/mentor4.jpg",
    },
    {
      id: 5,
      name: "Bharatbhai Patel",
      specialty: "Sustainable Farming Advocate",
      rating: 4.8,
      reviews: 88,
      bio: "Bharatbhai is a strong advocate for sustainable farming practices. He has extensive knowledge in organic farming, composting, and renewable energy usage on farms. His goal is to help farmers achieve productivity without compromising environmental health.",
      expertise: ["Organic Farming", "Composting Techniques", "Renewable Energy in Farming"],
      imageUrl: "https://example.com/mentor5.jpg",
    },
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
                    state={{ mentor }}
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
