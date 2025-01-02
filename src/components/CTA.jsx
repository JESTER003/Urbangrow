import React from 'react'
import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section className="py-24 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Start Your Urban Garden?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl text-emerald-100 max-w-2xl mx-auto mb-8"
        >
          Join UrbanGrow today and transform your space into a thriving green oasis. Get personalized advice, curated products, and a supportive community to help you succeed.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button
            className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg group px-6 py-3 rounded-md font-bold"
          >
            Get Started Now
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

