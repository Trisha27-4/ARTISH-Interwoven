import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { PenTool, Brain, Users, Palette, Calendar, Clock } from 'lucide-react';

export default function Blog() {
  const blogCategories = [
    {
      title: 'AI & Philosophy',
      description: 'Exploring the intersection of artificial intelligence and philosophical thought',
      href: '/blog/ai-and-philosophy',
      icon: <Brain className="w-8 h-8" />,
      posts: '12 Posts',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Personal Growth',
      description: 'Reflections on learning, development, and life experiences',
      href: '/blog/personal-growth',
      icon: <PenTool className="w-8 h-8" />,
      posts: '8 Posts',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Socio-Tech',
      description: 'Technology\'s impact on society and human relationships',
      href: '/blog/socio-tech',
      icon: <Users className="w-8 h-8" />,
      posts: '15 Posts',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Creative',
      description: 'Art, design, and creative expression in the digital age',
      href: '/blog/creative',
      icon: <Palette className="w-8 h-8" />,
      posts: '6 Posts',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const recentPosts = [
    {
      title: 'The Consciousness Question in AI',
      category: 'AI & Philosophy',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      excerpt: 'Exploring whether artificial intelligence can truly achieve consciousness and what that means for our understanding of mind and machine.',
      featured: true
    },
    {
      title: 'Building Digital Communities',
      category: 'Socio-Tech',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      excerpt: 'How technology is reshaping the way we form and maintain communities in the digital age.',
      featured: false
    },
    {
      title: 'The Art of Learning',
      category: 'Personal Growth',
      date: 'Dec 5, 2024',
      readTime: '5 min read',
      excerpt: 'Reflections on effective learning strategies and the importance of continuous growth in a rapidly changing world.',
      featured: false
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
                <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                Thoughts, insights, and explorations at the intersection of technology, 
                philosophy, and human experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Topics</h2>
              <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
                Dive into different areas of interest and thought
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {blogCategories.map((category, index) => (
                <motion.a
                  key={category.title}
                  href={category.href}
                  className="card group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-4 text-sm">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-600">{category.posts}</span>
                    <Clock className="w-4 h-4 text-dark-400" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20 bg-dark-50 dark:bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Posts</h2>
              <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
                Latest thoughts and insights from my journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  className="card group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded-full text-xs">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-dark-500 dark:text-dark-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                      Read More →
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

