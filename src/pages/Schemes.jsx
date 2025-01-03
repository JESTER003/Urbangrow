import { Link } from 'lucide-react'
import React from 'react'

const SchemeCard = ({ title, description, benefits, eligibility, url }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="bg-green-50 p-4">
                <h3 className="text-xl font-semibold text-green-800">{title}</h3>
            </div>
            <div className="p-6 space-y-4">
                <p className="text-gray-600">{description}</p>

                <div>
                    <h4 className="font-medium text-green-700 mb-2">Benefits:</h4>
                    <p className="text-gray-600">{benefits}</p>
                </div>

                <div>
                    <h4 className="font-medium text-green-700 mb-2">Eligibility:</h4>
                    <p className="text-gray-600">{eligibility}</p>
                </div>

                <a href={url} target='_blank'>
                    <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300">
                        Learn More
                    </button>
                </a>

            </div>
        </div>
    )
}

const Schemes = () => {
    const schemes = [
        {
            title: "PM-KISAN",
            description: "A central government scheme providing financial assistance to eligible farmer families.",
            benefits: "₹6,000 per year transferred directly to farmers' bank accounts in three equal installments.",
            eligibility: "Land-holding farmer families, subject to certain exclusions.",
            url:"https://pmkisan.gov.in/"
        },
        {
            title: "PMFBY",
            description: "A comprehensive crop insurance scheme covering farmers against various non-preventable natural risks.",
            benefits: "Financial support to farmers in case of crop losses due to unforeseen events.",
            eligibility: "All farmers, demand-driven scheme.",
            url: "https://pmfby.gov.in/"
        },
        {
            title: "AIF",
            description: "A fund providing financial support for the development of agricultural infrastructure.",
            benefits: "Improved post-harvest management, reduced wastage, and enhanced market access.",
            eligibility: "Farmers, agri-entrepreneurs, FPOs, and other eligible entities.",
            url: "https://aifindia.org/"
        },
        {
            title: "FPOs Scheme",
            description: "A scheme to strengthen farmer collectives and improve their bargaining power.",
            benefits: "Empowers farmers, enhances income, and improves market access.",
            eligibility: "Farmers interested in forming or joining FPOs.",
            url: "https://agricoop.gov.in/fpos"
        },
        {
            title: "NBHM",
            description: "A mission promoting beekeeping and honey production in India.",
            benefits: "Financial assistance, training, and technical support to beekeepers.",
            eligibility: "Beekeepers and those interested in starting beekeeping ventures.",
            url: "https://nbhm.gov.in/"
        }
    ]

    return (
        <div className="mt-20 max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Government Schemes for Farmers
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {schemes.map((scheme, index) => (
                    <SchemeCard key={index} {...scheme} />
                ))}
            </div>
        </div>
    )
}

export default Schemes

