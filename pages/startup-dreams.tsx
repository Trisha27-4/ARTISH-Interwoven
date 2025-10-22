import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Rocket, Lightbulb, Target, Users, TrendingUp, Zap } from 'lucide-react';

export default function StartupDreams() {
  const ideas = [
    {
      title: 'AI-Powered Learning Platform',
      description: 'Personalized education platform that adapts to individual learning styles using advanced AI',
      stage: 'Concept',
      market: 'EdTech',
      potential: 'High',
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Sustainable Tech Solutions',
      description: 'Green technology platform connecting consumers with eco-friendly products and services',
      stage: 'Research',
      market: 'CleanTech',
      potential: 'Very High',
      icon: <Target className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Creator Economy Platform',
      description: 'All-in-one platform for content creators to manage, monetize, and grow their audience',
      stage: 'MVP',
      market: 'Creator Economy',
      potential: 'High',
      icon: <Users className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Mental Health AI Assistant',
      description: 'AI-powered mental health companion providing personalized support and resources',
      stage: 'Concept',
      market: 'HealthTech',
      potential: 'Very High',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
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
                <span className="gradient-text">Startup Dreams</span>
              </h1>
              <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                Entrepreneurial visions and innovative ideas that could shape the future. 
                Exploring opportunities at the intersection of technology and human needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <Rocket className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Entrepreneurial Vision</h2>
              <p className="text-lg text-dark-600 dark:text-dark-300 mb-6">
                I believe in building technology that serves humanity, not the other way around. 
                My startup dreams focus on creating solutions that address real-world problems 
                while promoting sustainability, accessibility, and human flourishing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Impact-Driven</h3>
                  <p className="text-sm text-dark-600 dark:text-dark-300">Solutions that create meaningful positive change</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Sustainable</h3>
                  <p className="text-sm text-dark-600 dark:text-dark-300">Business models that consider long-term environmental impact</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Human-Centered</h3>
                  <p className="text-sm text-dark-600 dark:text-dark-300">Technology designed to enhance human capabilities</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Startup Ideas */}
        <section className="py-20 bg-dark-50 dark:bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Ideas</h2>
              <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
                Exploring opportunities and building towards the next big thing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ideas.map((idea, index) => (
                <motion.div
                  key={idea.title}
                  className="card group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${idea.color} rounded-lg flex items-center justify-center text-white`}>
                      {idea.icon}
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        idea.stage === 'Concept' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300' :
                        idea.stage === 'Research' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300' :
                        'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                      }`}>
                        {idea.stage}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{idea.title}</h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-4">{idea.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-dark-500 dark:text-dark-400">Market: </span>
                      <span className="text-sm font-medium">{idea.market}</span>
                    </div>
                    <div>
                      <span className="text-sm text-dark-500 dark:text-dark-400">Potential: </span>
                      <span className={`text-sm font-medium ${
                        idea.potential === 'Very High' ? 'text-green-600' :
                        idea.potential === 'High' ? 'text-blue-600' :
                        'text-yellow-600'
                      }`}>
                        {idea.potential}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Interested in Collaborating?
              </h2>
              <p className="text-xl text-dark-600 dark:text-dark-300 mb-8">
                I'm always looking for co-founders, advisors, and partners who share the vision 
                of building technology that serves humanity.
              </p>
              <motion.a
                href="/contact"
                className="btn-primary inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Build Something Amazing
                <Rocket className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

