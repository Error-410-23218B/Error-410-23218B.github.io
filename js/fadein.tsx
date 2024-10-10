"use client"

import React from 'react';
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'


export default function Component() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-gray-800"
      >
        Welcome to my website!
      </motion.h1>
    </div>
  )
}