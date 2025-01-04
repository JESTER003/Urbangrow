import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const courses = [
  {
    title: 'Urban Gardening Basics',
    description: 'Learn the fundamentals of creating and maintaining a thriving urban garden.',
    duration: '4 weeks',
    level: 'Beginner',
    icon: '📚'
  },
  {
    title: 'Vertical Gardening Masterclass',
    description: 'Maximize your space with advanced vertical gardening techniques.',
    duration: '6 weeks',
    level: 'Intermediate',
    icon: '🌿'
  },
  {
    title: 'Sustainable Garden Design',
    description: 'Create eco-friendly garden spaces that thrive in urban environments.',
    duration: '8 weeks',
    level: 'Advanced',
    icon: '🌱'
  },
]

export default function Learn() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learn Urban Gardening
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master the art of urban gardening with our expert-led courses and workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div key={course.title} className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">{course.icon}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>Duration: {course.duration}</span>
                <span>Level: {course.level}</span>
              </div>
              <button className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors">
                Start Learning
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

