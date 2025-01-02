import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
  // Add more products...
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
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2">{product.name}</CardTitle>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-semibold">${product.price}</span>
                  <Button>Add to Cart</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

