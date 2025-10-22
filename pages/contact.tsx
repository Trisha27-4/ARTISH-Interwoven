import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Calendar, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
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
                <span className="gradient-text">Contact</span>
              </h1>
              <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                Let's connect and explore opportunities to collaborate, 
                share ideas, or simply have a conversation about technology and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card"
              >
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white"
                      placeholder="Tell me about your project, idea, or just say hello!"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <Mail className="ml-2 w-5 h-5" />
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Direct Contact */}
                <div className="card">
                  <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary-600" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-dark-600 dark:text-dark-300">contact@example.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-sm text-dark-600 dark:text-dark-300">San Francisco, CA</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <div>
                        <div className="font-medium">Availability</div>
                        <div className="text-sm text-dark-600 dark:text-dark-300">Open to new opportunities</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="card">
                  <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                  <div className="space-y-4">
                    <a href="https://github.com" className="flex items-center space-x-3 hover:text-primary-600 transition-colors duration-200">
                      <Github className="w-5 h-5" />
                      <div>
                        <div className="font-medium">GitHub</div>
                        <div className="text-sm text-dark-600 dark:text-dark-300">Follow my projects</div>
                      </div>
                    </a>
                    <a href="https://linkedin.com" className="flex items-center space-x-3 hover:text-primary-600 transition-colors duration-200">
                      <Linkedin className="w-5 h-5" />
                      <div>
                        <div className="font-medium">LinkedIn</div>
                        <div className="text-sm text-dark-600 dark:text-dark-300">Professional network</div>
                      </div>
                    </a>
                    <a href="https://twitter.com" className="flex items-center space-x-3 hover:text-primary-600 transition-colors duration-200">
                      <Twitter className="w-5 h-5" />
                      <div>
                        <div className="font-medium">Twitter</div>
                        <div className="text-sm text-dark-600 dark:text-dark-300">Thoughts and updates</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="card">
                  <h3 className="text-xl font-semibold mb-6">Response Time</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-dark-600 dark:text-dark-300">Email Response</span>
                      <span className="font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-dark-600 dark:text-dark-300">Project Inquiries</span>
                      <span className="font-medium">Within 48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-dark-600 dark:text-dark-300">Collaboration</span>
                      <span className="font-medium">Let's schedule a call</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

