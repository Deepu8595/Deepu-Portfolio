import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, GraduationCap, Heart } from 'lucide-react';

export function About() {
  const education = [
    { level: "BBA", year: "Current", details: "First Year" },
    { level: "Class XII (CBSE)", year: "2023", details: "Arts Stream - 75%" },
    { level: "Class X (CBSE)", year: "2021", details: "75%" }
  ];

  return (
    <section className="py-16 bg-ocean-surface" id="about">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div
              className="bg-deep-blue p-3 rounded-full text-white"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <Anchor size={32} />
            </motion.div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-deep-blue text-center">About Me</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                As a first-year BBA student with a passion for programming, I'm on an exciting journey 
                to blend business acumen with technical expertise. Based in Bhangrola, Gurugram, 
                I'm dedicated to mastering various programming languages and technologies while 
                maintaining academic excellence.
              </p>
              <div className="flex items-center justify-center mb-6">
                <Heart className="text-nemo-orange animate-pulse" />
                <span className="ml-2 text-gray-600">When I'm not coding, I enjoy dancing and singing</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="text-deep-blue mr-2" size={28} />
              <h3 className="text-2xl font-bold text-deep-blue">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-nemo-orange pl-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h4 className="text-xl font-semibold text-deep-blue">{edu.level}</h4>
                  <p className="text-gray-600">{edu.year}</p>
                  <p className="text-gray-500">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg border-4 border-deep-blue"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6 text-deep-blue border-b-4 border-nemo-orange pb-2">
                Technical Skills
              </h3>
              <ul className="space-y-4">
                {['Python', 'R', 'Excel', 'Canva'].map((skill, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-3 h-3 bg-nemo-orange rounded-full mr-3 animate-pulse"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg border-4 border-deep-blue"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6 text-deep-blue border-b-4 border-nemo-orange pb-2">
                Soft Skills
              </h3>
              <ul className="space-y-4">
                {['Problem Solving', 'Teamwork', 'Communication', 'Creativity'].map((skill, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-3 h-3 bg-nemo-orange rounded-full mr-3 animate-pulse"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}