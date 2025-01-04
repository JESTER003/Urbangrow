import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import Checkout from './Checkout'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer';

const products = [
  {
    id: 1,
    name: "Self-Watering Planter",
    description: "A self-watering planter that makes it easy to keep your plants hydrated.",
    price: 29.99,
    image: "https://casadeamor.in/cdn/shop/files/selfwateringplant.jpg?v=1710171668",
  },
  {
    id: 2,
    name: "Herb Garden Kit",
    description: "A complete kit for growing your own herbs at home.",
    price: 19.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUWsSGHTbrialHJVxuzUJb5ktjevfkbMKVw&s",
  },
  {
    id: 3,
    name: "Smart Garden Monitor",
    description: "Monitor your plants' health with this smart garden monitor.",
    price: 49.99,
    image: "https://img.freepik.com/premium-photo/smart-garden-system-with-automated-watering-monitoring_1314467-152330.jpg",
  },
  {
    id: 4,
    name: "Gardening Gloves",
    description: "Protect your hands while gardening with these durable gloves.",
    price: 9.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLboU8IYiYGhtmod7MXsptjkcaVvstil8fKg&s",
  },
  {
    id: 5,
    name: "Organic Seeds",
    description: "A variety of organic seeds for your urban garden.",
    price: 14.99,
    image: "https://cdn.shopify.com/s/files/1/0551/4417/collections/seeds.jpg?v=1550061858",
  },
];

export default function Shop() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id)
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }
  const platformCharge = 20
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleProceedToPayment = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  const handleBackToShop = () => {
    setIsCheckoutOpen(false)
  }

  if (isCheckoutOpen) {
    return <Checkout cart={cart} total={total} onBackToShop={handleBackToShop} />
  }

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      
      {/* Floating cart icon */}
      <button
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="fixed top-10 right-10 bg-emerald-500 text-white p-3 rounded-full shadow-lg hover:bg-emerald-600 transition-colors"
      >
        <ShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </button>

      {/* Cart pop-up */}
      {isCartOpen && (
        <div className="fixed top-20 right-4 bg-white p-4 rounded-lg shadow-lg w-80 max-h-[80vh] overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>Rs.{item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                  <div className="flex items-center">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded-l">-</button>
                    <span className="px-2 py-1 bg-gray-100">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded-r">+</button>
                    <button onClick={() => removeFromCart(item.id)} className="ml-2 text-red-500">Remove</button>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <p className="font-semibold">Total: Rs.{total.toFixed(2)}</p>
                <button 
                  onClick={handleProceedToPayment}
                  className="w-full mt-4 bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors"
                >
                  Proceed to Payment
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

