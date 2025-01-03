import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Blog() {
  const blogPosts = [
    {
      slug: 'small-space-gardening',
      title: '10 Tips for Small Space Gardening',
      excerpt: 'Learn how to maximize your small garden space with these expert tips.',
      date: 'March 15, 2024',
      author: 'Sarah Johnson',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/013/021/640/non_2x/tips-and-tricks-poster-icon-design-education-faq-flat-vector.jpg'
    },
    {
      slug: 'indoor-herbs',
      title: 'Growing Herbs Year-Round Indoors',
      excerpt: 'Discover the secrets to maintaining a thriving indoor herb garden.',
      date: 'March 10, 2024',
      author: 'Michael Chen',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJ0r28w_XGlsL8U_uypLyB5dNYNLzak9IXg&s'
    },
    {
      slug: 'sustainable-practices',
      title: 'Sustainable Urban Gardening Practices',
      excerpt: 'Learn eco-friendly techniques for your urban garden.',
      date: 'March 5, 2024',
      author: 'Emma Roberts',
      imageUrl: '/images/sustainable.jpg'
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Urban Gardening Blog</h1>
          <p className="text-lg text-gray-600">Tips, tricks, and insights for urban gardeners</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="h-48 bg-green-100">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>By {post.author}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog

