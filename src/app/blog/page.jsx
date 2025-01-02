import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: '10 Tips for Small Space Gardening',
    excerpt: 'Make the most of your limited space with these proven urban gardening strategies.',
    image: '/placeholder.svg?height=400&width=600',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Tips & Tricks'
  },
  {
    id: 2,
    title: 'Growing Herbs Year-Round Indoors',
    excerpt: 'Learn how to maintain a thriving indoor herb garden throughout all seasons.',
    image: '/placeholder.svg?height=400&width=600',
    date: 'March 12, 2024',
    readTime: '7 min read',
    category: 'Indoor Gardening'
  },
  {
    id: 3,
    title: 'Sustainable Urban Gardening Practices',
    excerpt: 'Discover eco-friendly methods to create and maintain your urban garden.',
    image: '/placeholder.svg?height=400&width=600',
    date: 'March 10, 2024',
    readTime: '6 min read',
    category: 'Sustainability'
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Urban Gardening Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover tips, tricks, and inspiration for your urban gardening journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="rounded-t-lg object-cover w-full h-48"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600">{post.excerpt}</p>
                    <div className="mt-4 text-sm text-gray-500">{post.date}</div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

