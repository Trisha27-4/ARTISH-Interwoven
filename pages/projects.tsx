import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Clock, Code } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'AI-Powered Content Generator',
      description: 'A sophisticated content generation platform using advanced NLP models to create engaging articles, social media posts, and marketing copy.',
      category: 'AI/ML',
      status: 'Completed',
      tech: ['Python', 'TensorFlow', 'React', 'Node.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'Real-time Collaboration Tool',
      description: 'A web-based collaboration platform enabling teams to work together seamlessly with real-time editing, video calls, and project management.',
      category: 'Web Development',
      status: 'In Progress',
      tech: ['TypeScript', 'Socket.io', 'React', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'Music Visualization Engine',
      description: 'An interactive music visualization tool that creates stunning visual representations of audio in real-time using WebGL and audio analysis.',
      category: 'Creative Tech',
      status: 'Completed',
      tech: ['JavaScript', 'WebGL', 'Web Audio API', 'Three.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      title: 'Blockchain Voting System',
      description: 'A secure, transparent voting system built on blockchain technology ensuring integrity and accessibility in democratic processes.',
      category: 'Blockchain',
      status: 'Completed',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'IoT Home Automation',
      description: 'Smart home automation system connecting various IoT devices for energy efficiency, security, and convenience.',
      category: 'IoT',
      status: 'In Progress',
      tech: ['Python', 'Arduino', 'MQTT', 'React Native'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      title: 'Machine Learning Sandbox',
      description: 'An experimental platform for testing and prototyping machine learning models with interactive visualizations and real-time feedback.',
      category: 'AI/ML',
      status: 'Sandbox',
      tech: ['Python', 'Jupyter', 'Streamlit', 'Scikit-learn'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    }
  ];

  const categories = ['All', 'AI/ML', 'Web Development', 'Creative Tech', 'Blockchain', 'IoT'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-dark-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-900 dark:to-dark-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                A collection of innovative projects spanning AI, web development, creative technology, and more.
                Each project represents a unique challenge and learning opportunity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white dark:bg-dark-900 border-b border-dark-200 dark:border-dark-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group hover:shadow-xl transition-all duration-300"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Code className="w-5 h-5 text-primary-600" />
                      <span className="text-sm font-medium text-primary-600">{project.category}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {project.featured && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                          : project.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                          : 'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-dark-100 dark:bg-dark-800 hover:bg-dark-200 dark:hover:bg-dark-700 rounded-lg transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Interested in Collaborating?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                I'm always excited to work on new projects and explore innovative ideas.
              </p>
              <motion.a
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
                <ExternalLink className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

