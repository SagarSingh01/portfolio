import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import { motion } from 'framer-motion'

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Header />
      <Hero />
      <Footer />
    </motion.div>
  )
}

export default App