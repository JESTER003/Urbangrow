import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const events = [
  {
    id: 1,
    title: 'Urban Gardening Workshop',
    date: 'April 15, 2024',
    location: 'Community Center',
    attendees: 45,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8kKapKbxczyysFM3qn_wbI65WWBYe3BCHlw&s'
  },
  {
    id: 2,
    title: 'Seed Swap Meet',
    date: 'April 20, 2024',
    location: 'City Park',
    attendees: 30,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAj9lvhZWWtXzlD5R_Vg3vEm9QM4arxB-Mw&s'
  },
]

const communities = [
  {
    name: 'Balcony Gardeners',
    members: 1200,
    topics: 156,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVf0NmEaFiUYXggeXqrfnhf90WZAjjKRoayQ&s'
  },
  {
    name: 'Herb Enthusiasts',
    members: 850,
    topics: 98,
    image: 'https://m.media-amazon.com/images/I/71kf51+IINL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    name: 'Urban Farmers',
    members: 2300,
    topics: 234,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Cu0i0IUq6UdL49eL5F4lxjA_VcD3xf9umw&s'
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
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex gap-6">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-32 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-500">📅</span>
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-500">📍</span>
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-500">👥</span>
                          <span>{event.attendees} attending</span>
                        </div>
                      </div>
                      <button className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors">
                        Join Event
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Active Communities</h2>
            <div className="space-y-6">
              {communities.map((community) => (
                <div key={community.name} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={community.image}
                      alt={community.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{community.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <span className="text-emerald-500">👥</span>
                          <span>{community.members} members</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-emerald-500">💬</span>
                          <span>{community.topics} topics</span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors">
                      Join
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

