import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Apartment Dweller',
    content: 'UrbanGrow transformed my tiny balcony into a lush herb garden. I never thought I could grow my own food in the city!',
    avatar: 'https://media.istockphoto.com/id/508956644/photo/pretty-colombian-woman.jpg?s=612x612&w=0&k=20&c=jEwTCMKSpjYsaSfiFIlifYneUpczureQFl8o543_ZjE=',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Rooftop Gardener',
    content: 'The custom planning and support from UrbanGrow made it easy to create a thriving vegetable garden on my building\'s roof.',
    avatar: 'https://img.freepik.com/free-psd/front-view-man-with-blank-shirt_23-2150182888.jpg',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'First-time Gardener',
    content: 'As a complete beginner, UrbanGrow\'s step-by-step guides and starter kits gave me the confidence to start growing. Now I\'m hooked!',
    avatar: 'https://img.freepik.com/free-photo/close-up-smiley-woman-posing_23-2149178089.jpg',
    rating: 4,
  },
]

export function Testimonials() {
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
            What Our Growers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join thousands of satisfied urban gardeners who have transformed their spaces with UrbanGrow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-2xl ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

