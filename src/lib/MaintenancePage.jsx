import React from 'react';
import { motion } from 'framer-motion';
import { FiTool, FiClock, FiMail, FiServer, FiCode, FiZap, FiGitBranch, FiCpu, FiLayers } from 'react-icons/fi';

function MaintenancePage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Developer-themed animated header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="inline-flex items-center justify-center p-4 rounded-full bg-blue-100 dark:bg-blue-900/50 mb-6"
          >
            <FiGitBranch className="text-4xl text-blue-600 dark:text-blue-400" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Under Active Development
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're crafting something amazing! Our team is hard at work building new features.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Development Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Developer-themed 3D Effect Card */}
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl opacity-20 blur-lg dark:opacity-30"></div>

            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl h-full p-8 md:p-10 overflow-hidden">
              {/* Developer badge */}
              <div className="absolute top-4 right-4 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs font-bold px-3 py-1 rounded-full">
                DEV MODE
              </div>

              {/* Development Timeline */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <FiCpu className="text-blue-500 dark:text-blue-400 text-xl" />
                    </div>
                    <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Core Architecture</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      Building robust backend services and APIs for scalability.
                    </p>
                    <div className="mt-2 flex gap-2 flex-wrap">
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Node.js</span>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GraphQL</span>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Microservices</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                      <FiLayers className="text-purple-500 dark:text-purple-400 text-xl" />
                    </div>
                    <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">UI Components</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      Creating beautiful, accessible interfaces with modern frameworks.
                    </p>
                    <div className="mt-2 flex gap-2 flex-wrap">
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">React</span>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Tailwind</span>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Framer Motion</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <FiZap className="text-green-500 dark:text-green-400 text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Performance Optimization</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      Implementing caching, lazy loading, and other speed enhancements.
                    </p>
                    <div className="mt-2 flex gap-2 flex-wrap">
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Redis</span>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">CDN</span>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Webpack</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-10">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Development Progress</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">65%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '65%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                >
                  <FiMail className="text-xl" />
                  Get Early Access
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Animated Code Illustrations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            {/* Code Editor Simulation */}
            <div className="relative h-full min-h-[500px] bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
              {/* Editor Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-sm ml-4">
                  development.js
                </div>
              </div>

              {/* Animated Code Content */}
              <div className="p-4 font-mono text-sm">
                <motion.div
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <pre className="text-gray-400 mb-4"><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-yellow-300">'react'</span>;</pre>
                  <pre className="text-gray-400 mb-4"><span className="text-purple-400">import</span> {`{ Feature }`} <span className="text-purple-400">from</span> <span className="text-yellow-300">'./components'</span>;</pre>
                  <pre className="text-gray-400 mb-4"><span className="text-purple-400">import</span> {`{ useInnovation }`} <span className="text-purple-400">from</span> <span className="text-yellow-300">'./hooks'</span>;</pre>
                  <pre className="text-gray-400 mb-6"><span className="text-purple-400">import</span> {`{ magic }`} <span className="text-purple-400">from</span> <span className="text-yellow-300">'@awesome/tech'</span>;</pre>

                  <pre className="text-gray-400 mb-2"><span className="text-blue-400">const</span> <span className="text-green-400">NextGenApp</span> = () => {`{`}</pre>
                  <pre className="text-gray-400 ml-4 mb-2">  <span className="text-blue-400">const</span> {`{ loading, features }`} = <span className="text-green-400">useInnovation</span>();</pre>
                  <pre className="text-gray-400 ml-4 mb-2">  </pre>
                  <pre className="text-gray-400 ml-4 mb-2">  <span className="text-purple-400">return</span> (</pre>
                  <pre className="text-gray-400 ml-8 mb-2">    {`<div className="app">`}</pre>
                  <pre className="text-gray-400 ml-12 mb-2">      {`<Header title="Game Changer" />`}</pre>
                  <pre className="text-gray-400 ml-12 mb-2">      {`<main>`}</pre>
                  <pre className="text-gray-400 ml-16 mb-2">        {`{loading ? (`}</pre>
                  <pre className="text-gray-400 ml-20 mb-2">          {`<Loader />`}</pre>
                  <pre className="text-gray-400 ml-16 mb-2">        ) : (`}</pre>
                  <pre className="text-gray-400 ml-20 mb-2">          {`features.map(feature => (`}</pre>
                  <pre className="text-gray-400 ml-24 mb-2">            {`<Feature key={feature.id} {...feature} />`}</pre>
                  <pre className="text-gray-400 ml-20 mb-2">          {`)`}</pre>
                  <pre className="text-gray-400 ml-16 mb-2">        {`)`}</pre>
                  <pre className="text-gray-400 ml-12 mb-2">      {`</main>`}</pre>
                  <pre className="text-gray-400 ml-8 mb-2">    {`</div>`}</pre>
                  <pre className="text-gray-400 ml-4 mb-2">  );</pre>
                  <pre className="text-gray-400">{`}`}</pre>
                </motion.div>

                {/* Floating terminal */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                  className="absolute bottom-6 left-6 right-6 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="bg-gray-700 px-4 py-2 text-gray-300 text-xs">
                    Terminal
                  </div>
                  <div className="p-3 font-mono text-xs text-green-400">
                    <div>$ npm run deploy</div>
                    <div className="text-gray-400 mt-1"> Building optimized bundles...</div>
                    <div className="text-gray-400"> Compiling 98%</div>
                    <div className="text-gray-400"> Almost there!</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Developer console message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/30 rounded-xl p-6 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <FiCode className="text-blue-500 dark:text-blue-400 text-xl" />
            <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300">Developer's Note</h3>
          </div>
          <p className="text-blue-700 dark:text-blue-300">
            We're pushing commits daily! Follow our progress on GitHub and join our community for updates.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium shadow transition-all"
          >
            View GitHub Repository
          </motion.button>
        </motion.div>

        {/* Floating decorative elements */}
        <div className="hidden lg:block">
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 left-10 w-16 h-16 rounded-full bg-blue-400 opacity-15 blur-lg"
          ></motion.div>

          <motion.div
            animate={{
              y: [0, 40, 0],
              x: [0, -15, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-1/4 right-16 w-20 h-20 rounded-full bg-purple-400 opacity-15 blur-lg"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default MaintenancePage;