import React, { useState, useEffect } from 'react'
import { PhoneCall, Calendar, Plus, X, CreditCard } from 'lucide-react'

const initialEquipmentData = [
  {
    id: 1,
    name: "Modern Tractor",
    description: "High-performance tractor suitable for various farming operations. Well-maintained and regularly serviced.",
    price: 2500,
    availability: "Available",
    image: "https://4.imimg.com/data4/KJ/BY/MY-14831048/john-deere-5050d-tractor-500x500.jpg",
    farmerName: "John Doe",
    farmerMobile: "1234567890"
  },
  {
    id: 2,
    name: "Harvester Machine",
    description: "Efficient harvesting equipment with advanced features. Perfect for grain and crop harvesting.",
    price: 3500,
    availability: "Limited Availability",
    image: "https://ksagrotech.org/wp-content/uploads/2021/12/tagetto_wheel_2.jpg",
    farmerName: "Jane Smith",
    farmerMobile: "9876543210"
  },
  {
    id: 3,
    name: "Modern Seeder",
    description: "Precision seeding equipment for optimal seed placement and spacing. Suitable for various crop types.",
    price: 1800,
    availability: "Available",
    image: "https://punnitohana.com/wp-content/uploads/2023/02/disc-super-seeder.png.webp",
    farmerName: "Bob Johnson",
    farmerMobile: "5555555555"
  }
]

function EquipmentCard({ equipment, onContactFarmer, onRent }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DzqFJ-uX4N9Hm1AO-o88YUgG40sl6WPJTg&s" alt="" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">{equipment.name}</h2>
        <p className="text-gray-600 mb-4">{equipment.description}</p>
        <div className="flex items-center justify-between text-lg font-semibold mb-4">
          <span>Rs. {equipment.price}/week</span>
          <span className={equipment.availability === "Available" ? "text-green-600" : "text-yellow-600"}>
            {equipment.availability}
          </span>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => onContactFarmer(equipment)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center"
          >
            <PhoneCall className="w-4 h-4 mr-2" />
            Contact Farmer
          </button>
          <button 
            onClick={() => onRent(equipment)}
            className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-md flex items-center justify-center"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Rent
          </button>
        </div>
      </div>
    </div>
  )
}

function AddEquipmentForm({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    availability: "Available",
    image: null,
    farmerName: "",
    farmerMobile: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prevData => ({
          ...prevData,
          image: reader.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({
      ...formData,
      id: Date.now(),
      price: parseFloat(formData.price)
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Add New Equipment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Equipment Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            ></textarea>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price per day</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability</label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option value="Available">Available</option>
              <option value="Limited Availability">Limited Availability</option>
              <option value="Not Available">Not Available</option>
            </select>
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </div>
          <div>
            <label htmlFor="farmerName" className="block text-sm font-medium text-gray-700">Farmer Name</label>
            <input
              type="text"
              id="farmerName"
              name="farmerName"
              value={formData.farmerName}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="farmerMobile" className="block text-sm font-medium text-gray-700">Farmer Mobile Number</label>
            <input
              type="tel"
              id="farmerMobile"
              name="farmerMobile"
              value={formData.farmerMobile}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Equipment
          </button>
        </form>
      </div>
    </div>
  )
}

function FarmerContactModal({ farmer, onClose }) {
  if (!farmer) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Farmer Contact Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-4">
          <p><strong>Name:</strong> {farmer.farmerName}</p>
          <p><strong>Mobile:</strong> {farmer.farmerMobile}</p>
        </div>
      </div>
    </div>
  )
}

function RentModal({ equipment, onClose }) {
  const [days, setDays] = useState(1)
  const basePrice = equipment.price * days
  const serviceFee = basePrice * 0.2
  const totalPrice = basePrice + serviceFee

  const handleDaysChange = (e) => {
    setDays(parseInt(e.target.value) || 1)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Rent Equipment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">{equipment.name}</h3>
          <div>
            <label htmlFor="days" className="block text-sm font-medium text-gray-700">Number of Days</label>
            <input
              type="number"
              id="days"
              value={days}
              onChange={handleDaysChange}
              min="1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="space-y-2">
            <p><strong>Base Price:</strong> Rs. {basePrice}</p>
            <p><strong>Service Fee (20%):</strong> Rs. {serviceFee}</p>
            <p className="text-xl font-semibold"><strong>Total Price:</strong> Rs. {totalPrice}</p>
          </div>
          <button
            onClick={() => alert('Proceeding to payment...')}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center"
          >
            <CreditCard className="w-5 h-5 mr-2" />
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  )
}

function EquipmentShare() {
  const [equipmentData, setEquipmentData] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [selectedFarmer, setSelectedFarmer] = useState(null)
  const [selectedEquipment, setSelectedEquipment] = useState(null)

  useEffect(() => {
    const storedEquipment = localStorage.getItem('equipmentData')
    if (storedEquipment) {
      setEquipmentData(JSON.parse(storedEquipment))
    } else {
      setEquipmentData(initialEquipmentData)
      localStorage.setItem('equipmentData', JSON.stringify(initialEquipmentData))
    }
  }, [])

  const handleAddEquipment = (newEquipment) => {
    const updatedEquipment = [...equipmentData, newEquipment]
    setEquipmentData(updatedEquipment)
    localStorage.setItem('equipmentData', JSON.stringify(updatedEquipment))
  }

  const handleContactFarmer = (equipment) => {
    setSelectedFarmer(equipment)
  }

  const handleRent = (equipment) => {
    setSelectedEquipment(equipment)
  }

  return (
    <div className="mt-24 min-h-screen bg-green-50 px-4 py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Farm Equipment Sharing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access the agricultural equipment you need for your farm. Connect with local farmers to rent essential farming tools and machinery.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center mx-auto"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Equipment
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentData.map(equipment => (
            <EquipmentCard 
              key={equipment.id} 
              equipment={equipment} 
              onContactFarmer={handleContactFarmer}
              onRent={handleRent}
            />
          ))}
        </div>

        {showForm && (
          <AddEquipmentForm
            onClose={() => setShowForm(false)}
            onAdd={handleAddEquipment}
          />
        )}

        {selectedFarmer && (
          <FarmerContactModal
            farmer={selectedFarmer}
            onClose={() => setSelectedFarmer(null)}
          />
        )}

        {selectedEquipment && (
          <RentModal
            equipment={selectedEquipment}
            onClose={() => setSelectedEquipment(null)}
          />
        )}
      </div>
    </div>
  )
}

export default EquipmentShare

