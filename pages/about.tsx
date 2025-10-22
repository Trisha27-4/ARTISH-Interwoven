import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-dark-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-900 dark:to-dark-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">About Me</span>
              </h1>
              
              <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                Passionate about technology, innovation, and the intersection of AI with human creativity. 
                I believe in building solutions that make a meaningful impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Personal Info */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-6">My Story</h2>
                  
                  <div className="space-y-6 text-lg text-dark-600 dark:text-dark-300">
                    <p>
                      I'm a passionate technologist and creative thinker who believes in the power of 
                      innovation to solve real-world problems. My journey spans across multiple domains 
                      including software development, AI research, and creative media.
                    </p>
                    
                    <p>
                      With a deep interest in the philosophical implications of artificial intelligence 
                      and its impact on society, I explore how technology can enhance human creativity 
                      rather than replace it. My work focuses on building meaningful connections between 
                      technology and human experience.
                    </p>
                    
                    <p>
                      When I'm not coding or researching, you'll find me exploring music production, 
                      writing about socio-technical topics, or dreaming up the next big startup idea. 
                      I believe in continuous learning and sharing knowledge with the community.
                    </p>
                  </div>
                </motion.div>

                {/* Skills & Interests */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <h3 className="text-2xl font-bold mb-6">Skills & Interests</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card">
                      <h4 className="font-semibold mb-3">Technical Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {['JavaScript/TypeScript', 'Python', 'React/Next.js', 'Node.js', 'AI/ML', 'Cloud Computing'].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="card">
                      <h4 className="font-semibold mb-3">Areas of Interest</h4>
                      <div className="flex flex-wrap gap-2">
                        {['AI Ethics', 'Human-Computer Interaction', 'Creative Technology', 'Social Innovation', 'Music Production', 'Philosophy'].map((interest) => (
                          <span key={interest} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {/* Contact Info */}
                  <div className="card">
                    <h3 className="font-semibold mb-4">Get In Touch</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary-600" />
                        <span className="text-sm">contact@example.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-primary-600" />
                        <span className="text-sm">San Francisco, CA</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-primary-600" />
                        <span className="text-sm">Available for projects</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="card">
                    <h3 className="font-semibold mb-4">Connect With Me</h3>
                    <div className="space-y-3">
                      <a href="https://github.com" className="flex items-center space-x-3 hover:text-primary-600 transition-colors duration-200">
                        <Github className="w-5 h-5" />
                        <span className="text-sm">GitHub</span>
                      </a>
                      <a href="https://linkedin.com" className="flex items-center space-x-3 hover:text-primary-600 transition-colors duration-200">
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                      <a href="https://twitter.com" className="flex items-center space-x-3 hover:text-primary-600 transition-colors duration-200">
                        <Twitter className="w-5 h-5" />
                        <span className="text-sm">Twitter</span>
                      </a>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="card">
                    <h3 className="font-semibold mb-4">Quick Stats</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-dark-600 dark:text-dark-300">Projects Completed</span>
                        <span className="font-semibold">25+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-dark-600 dark:text-dark-300">Research Papers</span>
                        <span className="font-semibold">8</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-dark-600 dark:text-dark-300">Years Experience</span>
                        <span className="font-semibold">5+</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

