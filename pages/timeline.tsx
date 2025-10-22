import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen, Code, Music } from 'lucide-react';

export default function Timeline() {
  const timelineEvents = [
    {
      year: '2024',
      title: 'AI Research Publication',
      description: 'Published paper on ethical AI in creative applications',
      type: 'Research',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'blue'
    },
    {
      year: '2024',
      title: 'Music Album Release',
      description: 'Released "Ambient Soundscapes" - experimental ambient music',
      type: 'Creative',
      icon: <Music className="w-5 h-5" />,
      color: 'purple'
    },
    {
      year: '2023',
      title: 'Startup Co-founder',
      description: 'Co-founded AI-powered content creation platform',
      type: 'Business',
      icon: <Award className="w-5 h-5" />,
      color: 'green'
    },
    {
      year: '2023',
      title: 'Open Source Contribution',
      description: 'Major contributor to React ecosystem libraries',
      type: 'Development',
      icon: <Code className="w-5 h-5" />,
      color: 'orange'
    },
    {
      year: '2022',
      title: 'Master\'s Degree',
      description: 'Completed MS in Computer Science with focus on AI',
      type: 'Education',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'blue'
    },
    {
      year: '2021',
      title: 'First Tech Job',
      description: 'Started as Software Engineer at tech startup',
      type: 'Career',
      icon: <Award className="w-5 h-5" />,
      color: 'green'
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
                <span className="gradient-text">Timeline</span>
              </h1>
              <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                A journey through milestones, achievements, and transformative moments 
                in my professional and personal growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-purple-600"></div>
              
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={`${event.year}-${index}`}
                  className="relative flex items-start space-x-8 mb-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${
                    event.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                    event.color === 'purple' ? 'from-purple-500 to-pink-500' :
                    event.color === 'green' ? 'from-green-500 to-emerald-500' :
                    event.color === 'orange' ? 'from-orange-500 to-red-500' :
                    'from-gray-500 to-gray-600'
                  } flex items-center justify-center text-white shadow-lg`}>
                    {event.icon}
                  </div>
                  
                  {/* Event Content */}
                  <div className="flex-1">
                    <div className="card">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-2xl font-bold text-primary-600">{event.year}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.type === 'Research' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300' :
                          event.type === 'Creative' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300' :
                          event.type === 'Business' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300' :
                          event.type === 'Development' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300' :
                          event.type === 'Education' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300' :
                          'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-300'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-dark-600 dark:text-dark-300">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-dark-50 dark:bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Journey Highlights</h2>
              <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
                Key metrics and achievements along the way
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Projects Completed', value: '25+', icon: <Code className="w-8 h-8" /> },
                { label: 'Research Papers', value: '8', icon: <BookOpen className="w-8 h-8" /> },
                { label: 'Years Experience', value: '5+', icon: <Calendar className="w-8 h-8" /> },
                { label: 'Awards Received', value: '12', icon: <Award className="w-8 h-8" /> }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="card text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-dark-600 dark:text-dark-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

