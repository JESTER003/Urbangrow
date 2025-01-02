import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: "🌱",
    title: 'Easy to Start',
    description: 'Begin your gardening journey with our simple, step-by-step guides and starter kits.',
  },
  {
    icon: "☀️",
    title: 'Tailored to Your Space',
    description: 'Custom solutions for any urban environment, from tiny balconies to rooftop gardens.',
  },
  {
    icon: "💧",
    title: 'Water-Efficient',
    description: 'Our smart watering systems help conserve water while keeping your plants healthy.',
  },
  {
    icon: "🌬️",
    title: 'Air Purifying',
    description: 'Improve your indoor air quality with our selection of air-purifying plants.',
  },
]

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Why Choose UrbanGrow?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Experience the joy of gardening with our innovative urban solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

