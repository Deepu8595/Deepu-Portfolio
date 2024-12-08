import React from 'react';
import { motion } from 'framer-motion';
import { Code2, FileSpreadsheet, Palette, BrainCircuit } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      category: "Programming",
      icon: <Code2 size={24} />,
      items: ["Python", "R"]
    },
    {
      category: "Design",
      icon: <Palette size={24} />,
      items: ["Canva"]
    },
    {
      category: "Data Analysis",
      icon: <FileSpreadsheet size={24} />,
      items: ["Excel"]
    },
    {
      category: "AI & Tools",
      icon: <BrainCircuit size={24} />,
      items: ["Prompt Engineering"]
    }
  ];

  return (
    <section className="py-16 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}