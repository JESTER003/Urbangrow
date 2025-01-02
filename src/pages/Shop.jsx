import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/footer'

const products = [
  {
    id: 1,
    name: 'Vertical Garden Kit',
    price: 129.99,
    image: '/placeholder.svg?height=400&width=400',
    description: 'Perfect for small spaces, includes everything you need to start your vertical garden.'
  },
  {
    id: 2,
    name: 'Herb Garden Starter',
    price: 49.99,
    image: '/placeholder.svg?height=400&width=400',
    description: 'Essential herbs and supplies to begin your culinary garden journey.'
  },
  {
    id: 3,
    name: 'Smart Plant Monitor',
    price: 34.99,
    image: '/placeholder.svg?height=400&width=400',
    description: 'Track soil moisture, sunlight, and temperature for optimal plant growth.'
  },
  {
    id: 4,
    name: 'Compact Compost Bin',
    price: 79.99,
    image: '/placeholder.svg?height=400&width=400',
    description: 'Turn kitchen scraps into nutrient-rich compost for your urban garden.'
  },
  {
    id: 5,
    name: 'Balcony Planter Set',
    price: 89.99,
    image: '/placeholder.svg?height=400&width=400',
    description: 'Stylish planters designed to fit perfectly on balcony railings.'
  },
  {
    id: 6,
    name: 'Urban Gardener Tool Kit',
    price: 59.99,
    image: '/placeholder.svg?height=400&width=400',
    description: 'Essential tools for maintaining your urban garden, all in a compact carrying case.'
  },
]

export default function Shop() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop Urban Garden Essentials
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create your perfect urban garden, from tools to seeds and smart technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Rs.{product.price.toFixed(2)}</span>
                  <button className="bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

