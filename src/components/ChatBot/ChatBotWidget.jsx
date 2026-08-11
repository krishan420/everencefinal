import React, { useRef } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FiSend, FiX, FiMessageSquare, FiChevronRight, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { useSelector } from "react-redux";

import useChatBotLogic from "./useChatBotLogic";
import ChatMessage from "./ChatMessage";
import CourseCard from "./CourseCard";
import CourseDetails from "./CourseDetails";
import { SafeImage } from "../../lib/SafeImage";

const ChatBotWidget = () => {
    const {
        open,
        setOpen,
        messages,
        userInput,
        setUserInput,
        isTyping,
        expandedCategory,
        selectedCourseDetails,
        messagesEndRef,
        courses,
        handleQuickReply,
        handleSend,
        toggleCategory,
        handleCourseSelect,
        filteredCourses,
        setSelectedCourseDetails
    } = useChatBotLogic();

    const controls = useDragControls();
    const constraintsRef = useRef(null);
    const displayCourses = filteredCourses || courses;
    return (
        <div ref={constraintsRef} className="fixed inset-0 overflow-hidden pointer-events-none z-50">
            <ToastContainer position="top-center" autoClose={3000} />

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(!open)}
                className={`absolute bottom-6 right-6 pointer-events-auto ${open ? "hidden" : "block"}`}
                style={{ zIndex: 100 }}
            >
                <div className="relative w-56 h-56">
                    <SafeImage
                        src="/helpme.gif"
                        alt="Help icon"
                        className="w-full h-full object-contain drop-shadow-lg"
                    />
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-4 py-2 rounded-full shadow-xl whitespace-nowrap"
                    >
                        <div className="relative">
                            <span className="font-bold text-sm">Need help? Ask me!</span>
                            <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-0 h-0 
                border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white">
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.button>

            {/* Chat Widget */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        drag
                        dragConstraints={constraintsRef}
                        dragControls={controls}
                        dragElastic={0.1}
                        dragMomentum={false}
                        initial={{ x: 500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 500, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="absolute right-5 bottom-5 w-[400px] h-[80vh] md:w-[450px] md:h-[85vh] pointer-events-auto bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700"
                        style={{
                            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
                            transformStyle: 'preserve-3d',
                            transform: 'perspective(1000px)'
                        }}
                    >
                        {/* Header with drag handle */}
                        <div
                            className="cursor-move"
                            onPointerDown={(e) => controls.start(e)}
                        >
                            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-white flex justify-between items-center">
                                <div className="flex items-center space-x-3">
                                    <motion.div
                                        className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center"
                                    >
                                        {/* <FiMessageSquare size={20} /> */}
                                        <SafeImage src="/icons/com-message.svg" alt="message icon" className="w-10 h-10" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-bold text-lg">Course Assistant</h3>
                                        <p className="text-xs opacity-80">
                                            {isTyping ? "Typing..." : "Online"}
                                        </p>
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ rotate: 90, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setOpen(false)}
                                    className="p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition"
                                >
                                    <FiX size={24} />
                                </motion.button>
                            </div>
                        </div>
 
                        {/* Messages Container */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, i) => (
                                <ChatMessage
                                    key={i}
                                    msg={msg}
                                    handleQuickReply={handleQuickReply}
                                />
                            ))}

                            {/* Course Listing */}
                            {expandedCategory && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-3 mt-3"
                                >
                                    {displayCourses.map(course => (
                                        <CourseCard
                                            key={course.title}
                                            course={course}
                                            expandedCategory={expandedCategory}
                                            toggleCategory={toggleCategory}
                                            handleCourseSelect={handleCourseSelect}
                                        />
                                    ))}
                                </motion.div>
                            )}

                            {/* Course Details */}
                            {selectedCourseDetails && (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                >
                                    <CourseDetails
                                        details={selectedCourseDetails}
                                        onEnroll={() => {
                                            setUserInput(selectedCourseDetails.title);
                                            setSelectedCourseDetails(null);
                                        }}
                                    />
                                </motion.div>
                            )}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 rounded-tl-none shadow-sm">
                                        <div className="flex space-x-1">
                                            <motion.div
                                                animate={{ y: [-3, 3, -3] }}
                                                transition={{ duration: 0.6, repeat: Infinity }}
                                                className="w-2 h-2 rounded-full bg-gray-400"
                                            ></motion.div>
                                            <motion.div
                                                animate={{ y: [-3, 3, -3] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                                className="w-2 h-2 rounded-full bg-gray-400"
                                            ></motion.div>
                                            <motion.div
                                                animate={{ y: [-3, 3, -3] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                                className="w-2 h-2 rounded-full bg-gray-400"
                                            ></motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <motion.div
                            className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                            layout
                        >
                            <div className="flex items-center space-x-3">
                                <motion.input
                                    whileFocus={{
                                        boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
                                        scale: 1.01
                                    }}
                                    className="flex-1 p-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none bg-white dark:bg-gray-700 shadow-sm"
                                    type="text"
                                    placeholder="Type your message..."
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleSend}
                                    disabled={!userInput.trim()}
                                    className="p-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md"
                                >
                                    <FiSend size={18} />
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ChatBotWidget;