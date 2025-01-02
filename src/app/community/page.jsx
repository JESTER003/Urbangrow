import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Users, MessageSquare, Calendar, Map } from 'lucide-react'
import Image from 'next/image'

const events = [
  {
    id: 1,
    title: 'Urban Gardening Workshop',
    date: 'April 15, 2024',
    location: 'Community Center',
    attendees: 45,
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    id: 2,
    title: 'Seed Swap Meet',
    date: 'April 20, 2024',
    location: 'City Park',
    attendees: 30,
    image: '/placeholder.svg?height=400&width=600'
  },
]

const communities = [
  {
    name: 'Balcony Gardeners',
    members: 1200,
    topics: 156,
    image: '/placeholder.svg?height=100&width=100'
  },
  {
    name: 'Herb Enthusiasts',
    members: 850,
    topics: 98,
    image: '/placeholder.svg?height=100&width=100'
  },
  {
    name: 'Urban Farmers',
    members: 2300,
    topics: 234,
    image: '/placeholder.svg?height=100&width=100'
  },
]

export default function Community() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with fellow urban gardeners, share experiences, and participate in local events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
            <div className="space-y-6">
              {events.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={200}
                          height={150}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                          <div className="space-y-2 text-gray-600">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Map className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              <span>{event.attendees} attending</span>
                            </div>
                          </div>
                          <Button className="mt-4">Join Event</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Active Communities</h2>
            <div className="space-y-6">
              {communities.map((community, i) => (
                <motion.div
                  key={community.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <Image
                          src={community.image}
                          alt={community.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{community.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{community.members} members</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              <span>{community.topics} topics</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline">Join</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

