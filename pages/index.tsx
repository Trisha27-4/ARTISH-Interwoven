import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-900 dark:to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Digital Portfolio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-8 max-w-3xl mx-auto">
              A dynamic showcase of projects, research, and creative endeavors. 
              Exploring the intersection of technology, philosophy, and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/projects"
                className="btn-primary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="/about"
                className="btn-secondary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore My Work</h2>
            <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
              Discover my projects, research, and creative journey across different domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Featured Projects',
                description: 'Showcase of my best work and innovative solutions',
                href: '/projects/featured',
                icon: <Github className="w-8 h-8" />,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Research Papers',
                description: 'Academic research and thought leadership',
                href: '/research/papers',
                icon: <ExternalLink className="w-8 h-8" />,
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'AI & Philosophy',
                description: 'Exploring the intersection of technology and human thought',
                href: '/blog/ai-and-philosophy',
                icon: <Sparkles className="w-8 h-8" />,
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Music & Media',
                description: 'Creative projects and multimedia experiences',
                href: '/music-media',
                icon: <ExternalLink className="w-8 h-8" />,
                color: 'from-orange-500 to-red-500'
              },
              {
                title: 'Startup Dreams',
                description: 'Entrepreneurial ventures and business ideas',
                href: '/startup-dreams',
                icon: <ExternalLink className="w-8 h-8" />,
                color: 'from-indigo-500 to-purple-500'
              },
              {
                title: 'Timeline',
                description: 'Journey through my professional and personal growth',
                href: '/timeline',
                icon: <ExternalLink className="w-8 h-8" />,
                color: 'from-teal-500 to-blue-500'
              }
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                className="card group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-dark-600 dark:text-dark-300">{item.description}</p>
              </motion.a>
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
              Ready to Collaborate?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss ideas, explore possibilities, and create something amazing together.
            </p>
            <motion.a
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

