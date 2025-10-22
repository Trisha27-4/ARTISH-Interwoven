import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Lightbulb, Clock } from 'lucide-react';

export default function Research() {
  const researchAreas = [
    {
      title: 'Papers',
      description: 'Published research papers and academic publications',
      href: '/research/papers',
      icon: <FileText className="w-8 h-8" />,
      count: '8 Papers',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Concept Lab',
      description: 'Experimental ideas and theoretical frameworks',
      href: '/research/concept-lab',
      icon: <Lightbulb className="w-8 h-8" />,
      count: '12 Concepts',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Reading List',
      description: 'Curated collection of influential research and books',
      href: '/research/reading-list',
      icon: <BookOpen className="w-8 h-8" />,
      count: '50+ Books',
      color: 'from-green-500 to-emerald-500'
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
                <span className="gradient-text">Research</span>
              </h1>
              <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                Exploring the frontiers of knowledge through rigorous research, 
                innovative concepts, and continuous learning.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => (
                <motion.a
                  key={area.title}
                  href={area.href}
                  className="card group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-4">{area.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-600">{area.count}</span>
                    <Clock className="w-4 h-4 text-dark-400" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Work */}
        <section className="py-20 bg-dark-50 dark:bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Research</h2>
              <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
                Latest publications and ongoing research projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Ethical AI in Creative Applications',
                  type: 'Research Paper',
                  year: '2024',
                  description: 'Exploring the ethical implications of AI in creative industries and proposing frameworks for responsible implementation.',
                  status: 'Published'
                },
                {
                  title: 'Human-AI Collaboration Patterns',
                  type: 'Concept Lab',
                  year: '2024',
                  description: 'Investigating optimal collaboration patterns between humans and AI systems in creative workflows.',
                  status: 'In Progress'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                      {item.type}
                    </span>
                    <span className="text-sm text-dark-500 dark:text-dark-400">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Published' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                    }`}>
                      {item.status}
                    </span>
                    <a href="#" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      Read More →
                    </a>
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

