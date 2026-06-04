import React, { useContext, useState } from 'react'
import Header from './Components/Header.js'
import Hero from './Components/Hero.js'
import Footer from './Components/Footer.js'
import { motion } from 'framer-motion'
import { themeContext } from './Context/Context.js'
import ScrollToTop from './Scroll/ScrollToTop.js'

function App() {

  const context = useContext(themeContext)

  if (!context) {
    throw new Error("useTheme must be used within ThemeChanger");
  }

  const { mode } = context;

  return (
    <motion.div
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={`transition-all duration-200
        ${mode
          ? "bg-white text-black"
          : "bg-black text-white"
        }
              `}
    >
      <Header />
      <Hero />
      <Footer />
      <ScrollToTop />
    </motion.div>
  )
}

export default App