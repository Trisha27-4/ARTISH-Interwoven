import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Music, Video, Headphones, Play, Pause, Volume2 } from 'lucide-react';

export default function MusicMedia() {
  const projects = [
    {
      title: 'Ambient Soundscapes',
      description: 'Experimental ambient music exploring the relationship between sound and emotion',
      type: 'Music',
      year: '2024',
      duration: '45 min',
      status: 'Released'
    },
    {
      title: 'Digital Art Series',
      description: 'Generative art pieces created using AI and traditional techniques',
      type: 'Visual',
      year: '2024',
      duration: '12 pieces',
      status: 'Exhibition'
    },
    {
      title: 'Podcast: Tech & Society',
      description: 'Conversations about technology\'s impact on modern society',
      type: 'Podcast',
      year: '2024',
      duration: '8 episodes',
      status: 'Ongoing'
    }
  ];

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
                <span className="gradient-text">Music & Media</span>
              </h1>
              <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                Creative expressions through sound, visual art, and multimedia experiences.
                Exploring the intersection of technology and artistic expression.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Music className="w-6 h-6 text-primary-600" />
                    <span className="text-sm font-medium text-primary-600">Featured Release</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Ambient Soundscapes</h2>
                  <p className="text-lg text-dark-600 dark:text-dark-300 mb-6">
                    An experimental ambient music project exploring the relationship between sound, 
                    emotion, and digital landscapes. Created using AI-assisted composition and 
                    traditional synthesis techniques.
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <button className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
                      <Play className="w-5 h-5" />
                      <span>Play Album</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-dark-100 dark:bg-dark-800 hover:bg-dark-200 dark:hover:bg-dark-700 px-6 py-3 rounded-lg transition-colors duration-200">
                      <Volume2 className="w-5 h-5" />
                      <span>Listen</span>
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 rounded-lg p-8 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Music className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="card group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-2 mb-4">
                    {project.type === 'Music' && <Music className="w-5 h-5 text-primary-600" />}
                    {project.type === 'Visual' && <Video className="w-5 h-5 text-purple-600" />}
                    {project.type === 'Podcast' && <Headphones className="w-5 h-5 text-green-600" />}
                    <span className="text-sm font-medium text-dark-600 dark:text-dark-300">{project.type}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-4">{project.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-dark-500 dark:text-dark-400">
                    <span>{project.year}</span>
                    <span>{project.duration}</span>
                  </div>
                  
                  <div className="mt-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Released' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                        : project.status === 'Exhibition'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

