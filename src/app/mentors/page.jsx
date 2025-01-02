'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'

const mentors = [
  {
    name: 'Maria Rodriguez',
    specialty: 'Urban Vegetable Gardens',
    experience: '15 years',
    bio: 'Specializes in maximizing vegetable yields in small urban spaces.',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    name: 'John Chen',
    specialty: 'Vertical Gardening',
    experience: '10 years',
    bio: 'Expert in creating lush vertical gardens for balconies and small patios.',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    name: 'Aisha Patel',
    specialty: 'Organic Pest Control',
    experience: '12 years',
    bio: 'Focuses on natural and organic methods to keep urban gardens pest-free.',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    name: 'Michael OBrien',
    specialty: 'Hydroponic Systems',
    experience: '8 years',
    bio: 'Designs and implements efficient hydroponic setups for urban environments.',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    name: 'Sarah Nguyen',
    specialty: 'Edible Landscaping',
    experience: '14 years',
    bio: 'Creates beautiful and functional landscapes that incorporate edible plants.',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    name: 'Carlos Mendoza',
    specialty: 'Rooftop Gardens',
    experience: '11 years',
    bio: 'Transforms urban rooftops into thriving garden ecosystems.',
    image: '/placeholder.svg?height=400&width=400',
  },
]

export default function Mentors() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Meet Our Urban Farming Mentors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Connect with experienced farmers and gardeners who can guide you on your urban growing journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    width={400}
                    height={400}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 font-display">{mentor.name}</h2>
                  <p className="text-emerald-600 font-semibold mb-2">{mentor.specialty}</p>
                  <p className="text-gray-600 mb-4">{mentor.experience} of experience</p>
                  <p className="text-gray-700 mb-6">{mentor.bio}</p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Connect with {mentor.name.split(' ')[0]}
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

