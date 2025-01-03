import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Sign Up',
    description: 'Create your account and tell us about your space and gardening goals.',
    image: 'https://t4.ftcdn.net/jpg/03/82/44/77/360_F_382447750_5MaezlFzTC5UVVckT4OdOblrrlJNFHaB.jpg',
  },
  {
    title: 'Meet Experts',
    description: 'Receive a customized urban gardening kit tailored to your needs.',
    image: 'https://st3.depositphotos.com/1005979/16712/i/450/depositphotos_167121946-stock-photo-meet-the-experts-card.jpg',
  },
  {
    title: 'Start Growing',
    description: 'Follow our guides to plant and nurture your urban garden.',
    image: 'https://thumbs.dreamstime.com/b/young-plant-growing-fresh-ground-new-start-ecology-concept-top-view-image-94221180.jpg',
  },
  {
    title: 'Enjoy the Harvest',
    description: 'Reap the benefits of your own fresh, homegrown produce.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwD-O1Cs53KvbM5JrbyEdPVFwT8dezDKbtw&s',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            How UrbanGrow Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Four simple steps to transform your urban space into a thriving garden.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-4">
                <img
                  src={step.image}
                  alt={step.title}
                  className="mx-auto rounded-full w-48 h-48 object-cover"
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

