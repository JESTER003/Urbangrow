import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const featuredMentors = [
  {
    name: 'Maria Rodriguez',
    specialty: 'Urban Vegetable Gardens',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHRCB7tVvMYzQzkPdaNEmzAeACnFHQ180vw&s',
  },
  {
    name: 'John Chen',
    specialty: 'Vertical Gardening',
    image: 'https://media.npr.org/assets/img/2014/05/22/16403024_h219136_slide-78464cd5454221c87d975ca709fe71ee64b50323.jpg?s=1100&c=50&f=jpeg',
  },
  {
    name: 'Aisha Patel',
    specialty: 'Organic Pest Control',
    image: 'https://image.tensorartassets.com/cdn-cgi/image/anim=false,plain=false,w=320,q=85/posts/images/685011670115854685/c3bd1e2d-f0cf-44aa-8b75-331582cecdf9.jpg',
  },
]

export function MentorPreview() {
  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Learn from Experienced Farmers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Connect with our mentors and gain valuable insights for your urban farming journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredMentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{mentor.name}</h3>
                <p className="text-emerald-600 font-semibold">{mentor.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/mentors"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-md text-lg"
          >
            View All Mentors
          </Link>
        </div>
      </div>
    </section>
  )
}

