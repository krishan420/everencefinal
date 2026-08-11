import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronRight, FiInfo } from "react-icons/fi";
import { SafeImage } from '../../lib/SafeImage';

const CourseCard = ({ 
  course, 
  expandedCategory, 
  toggleCategory, 
  handleCourseSelect 
}) => {
  const hasSubCourses = course.subMenu && course.subMenu.length > 0;
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="border rounded-lg overflow-hidden bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow mb-2"
    >
      <div 
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={() => hasSubCourses ? toggleCategory(course.title) : handleCourseSelect(course.title)}
      >
        <div className="flex items-center space-x-3">
          {course.icon ? (
            <SafeImage src={course.icon} alt={course.title} className="w-8 h-8" />
          ) : (
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <FiMessageSquare className="text-blue-600 dark:text-blue-300" />
            </div>
          )}
          <div>
            <h4 className="font-medium">{course.title}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {course.description}
            </p>
          </div>
        </div>
        {hasSubCourses ? (
          <div className="text-gray-400">
            {expandedCategory === course.title ? <FiChevronDown /> : <FiChevronRight />}
          </div>
        ) : (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleCourseSelect(course.title, false);
            }}
            className="text-blue-500 hover:text-blue-700 p-1"
            title="Learn more about this course"
          >
            <FiInfo size={16} />
          </button>
        )}
      </div>

      {hasSubCourses && expandedCategory === course.title && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-gray-50 dark:bg-gray-600 px-4"
        >
          <div className="py-2 border-t border-gray-200 dark:border-gray-500">
            {course.subMenu.map((subCourse) => (
              <div
                key={subCourse.title}
                className="py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-500 rounded cursor-pointer flex items-center justify-between"
                onClick={() => handleCourseSelect(subCourse.title, true)}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900 flex items-center justify-center mr-2">
                    <FiChevronRight className="text-blue-500 dark:text-blue-300 text-xs" />
                  </div>
                  <span className="text-sm">{subCourse.title}</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCourseSelect(subCourse.title, true);
                  }}
                  className="text-blue-500 hover:text-blue-700 p-1"
                  title="Learn more about this course"
                >
                  <FiInfo size={16} />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CourseCard;