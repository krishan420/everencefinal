import React from 'react';
import { motion } from 'framer-motion';
import { FiInfo } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

const CourseDetails = ({ details, onEnroll }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-30 rounded-lg p-4 border border-blue-200 dark:border-blue-800"
  >
    <h4 className="font-bold text-lg mb-2 flex items-center">
      <FiInfo className="mr-2" />
      About {details.title}
    </h4>
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <ReactMarkdown>{details.description}</ReactMarkdown>
    </div>
    <button
      onClick={onEnroll}
      className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
    >
      Enroll in this course
    </button>
  </motion.div>
);

export default CourseDetails;