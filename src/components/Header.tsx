import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Fish } from 'lucide-react';

export function Header() {
  return (
    <header className="ocean-gradient text-white py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")'
        }}
      />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-white relative"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-full bg-light-blue flex items-center justify-center relative">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="profile-upload"
              />
              <label
                htmlFor="profile-upload"
                className="cursor-pointer text-white text-sm text-center absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300"
              >
                <Fish className="w-8 h-8 mb-2 animate-float" />
                <span>Upload Photo</span>
              </label>
            </div>
          </motion.div>
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold mb-2">DEEPANSHU</h1>
            <p className="text-2xl mb-4 text-ocean-surface">BBA Student & Aspiring Programmer</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <motion.a 
                href="mailto:deepanshuydv15@gmail.com" 
                className="hover:text-nemo-orange transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Mail size={24} />
              </motion.a>
              <motion.a 
                href="tel:8595304072" 
                className="hover:text-nemo-orange transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Phone size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-nemo-orange transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-nemo-orange transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}