import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Play, Book, Users, Calendar } from 'lucide-react'

const courses = [
  {
    title: 'Urban Gardening Basics',
    description: 'Learn the fundamentals of creating and maintaining a thriving urban garden.',
    duration: '4 weeks',
    level: 'Beginner',
    icon: Book
  },
  {
    title: 'Vertical Gardening Masterclass',
    description: 'Maximize your space with advanced vertical gardening techniques.',
    duration: '6 weeks',
    level: 'Intermediate',
    icon: Users
  },
  {
    title: 'Sustainable Garden Design',
    description: 'Create eco-friendly garden spaces that thrive in urban environments.',
    duration: '8 weeks',
    level: 'Advanced',
    icon: Calendar
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
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <course.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="mb-2">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>Duration: {course.duration}</span>
                    <span>Level: {course.level}</span>
                  </div>
                  <Button className="w-full">
                    Start Learning
                    <Play className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

