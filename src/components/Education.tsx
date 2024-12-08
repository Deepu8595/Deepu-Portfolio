import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export function Education() {
  const educationData = [
    {
      level: "Bachelor of Business Administration (BBA)",
      year: "Current",
      details: "First Year Student"
    },
    {
      level: "Class XII (CBSE)",
      year: "2023",
      details: "Arts Stream - 75%"
    },
    {
      level: "Class X (CBSE)",
      year: "2021",
      details: "75%"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="education">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="flex items-start mb-8 bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-blue-600 p-3 rounded-full mr-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{edu.level}</h3>
                <p className="text-gray-600">{edu.year}</p>
                <p className="text-gray-500 mt-1">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}