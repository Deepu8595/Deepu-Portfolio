import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Github, Play } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Ludo Program",
      description: "Interactive multiplayer Ludo game with Python",
      tech: ["Python", "Pygame"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "ERP System",
      description: "Enterprise Resource Planning system for business management",
      tech: ["Python", "SQL"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Quiz Program",
      description: "Dynamic quiz application with multiple categories",
      tech: ["Python", "JSON"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Calculator",
      description: "Advanced calculator with scientific functions",
      tech: ["Python", "Tkinter"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Templates & Videos",
      description: "Creative design templates and AI-generated videos",
      tech: ["Canva", "AI Tools"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Dashboard",
      description: "Interactive data visualization dashboard",
      tech: ["Python", "Excel"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section className="py-16 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-3 bg-deep-blue rounded-full text-white mb-4">
            <Code2 size={32} />
          </div>
          <h2 className="text-3xl font-bold text-deep-blue">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden border-4 border-deep-blue shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-ocean-gradient relative group">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id={`project-${index}`}
                />
                <label
                  htmlFor={`project-${index}`}
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer 
                           bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"
                >
                  <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                  <span className="text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Upload Project Image
                  </span>
                </label>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-deep-blue mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-ocean-surface text-deep-blue text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.demoUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-nemo-orange text-white rounded-lg hover:bg-coral transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={16} />
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.codeUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-deep-blue text-white rounded-lg hover:bg-light-blue transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}