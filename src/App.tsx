import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <About />
      <Projects />
      <Contact />
    </motion.div>
  );
}

export default App;