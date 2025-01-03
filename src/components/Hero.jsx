import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const vantaRef = useRef(null);

  function handleChatToggle() {
    setIsChatOpen(!isChatOpen);
  }


  return (
    <div
      ref={vantaRef}
      className="relative min-h-[80%] flex items-center justify-center overflow-hidden"
    >
      {/* Chatbot Floating Button */}
      <div>
        <div
          onClick={handleChatToggle}
          className="p-4 h-20 w-20 bg-[#10b981] rounded-full fixed z-50 right-6 bottom-6 flex items-center justify-center shadow-lg cursor-pointer"
        >
          <p>Chat</p>
        </div>
        {isChatOpen && (
          <div className="h-[500px] py-5 fixed bottom-20 right-6 w-150 bg-white rounded-lg shadow-xl z-50">
            <div className="flex justify-between items-center bg-[#10b981] p-3 rounded-t-lg">
              <h3 className="text-lg font-bold text-white">Chat with Urbangrow</h3>
              <button
                onClick={handleChatToggle}
                className="text-white font-bold hover:text-gray-300"
              >
                ✕
              </button>
            </div>
            <div className="p-4 h-64 overflow-y-auto">
              <div className="text-gray-600 mb-2">
                <p>
                  <strong>Urbagrow:</strong> Hello! How can I assist you today?
                </p>
              </div>
              <div className="mt-4 flex">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-grow border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
                />
                <button className="bg-[#10b981] text-white px-4 py-2 rounded-r-lg hover:bg-green-400">
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hero Section Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Grow Your Urban Oasis with Expert Guidance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            Transform your urban space into a thriving garden with the help of
            experienced farmers. Get started with UrbanGrow today and cultivate
            your green thumb, no matter where you live.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link to="/Learn">
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-lg px-6 py-3 rounded-md font-bold group">
                Start Growing
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </Link>
            <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-6 py-3 rounded-md font-bold">
              Meet Our Mentors
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="lg:w-1/2 mt-12 lg:mt-0"
        >
          <img
            src="/urbangrow.png"
            alt="Urban Garden with Mentor"
            className="w-full h-auto max-w-md mx-auto lg:max-w-none animate-float"
          />
        </motion.div>
      </div>
    </div>
  );
}
