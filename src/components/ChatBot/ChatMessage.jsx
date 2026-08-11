import React from 'react';
import { motion } from 'framer-motion';

const ChatMessage = ({ msg, handleQuickReply }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}
  >
    <div
      className={`max-w-xs lg:max-w-md rounded-lg p-3 ${
        msg.from === "bot"
          ? "bg-gray-100 dark:bg-gray-700 rounded-tl-none"
          : "bg-blue-500 text-white rounded-tr-none"
      }`}
    >
      {msg.text}
      {msg.options && msg.options.length > 0 && (
        <div className="mt-2 space-y-2">
          {msg.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleQuickReply(option)}
              className="block w-full text-left px-3 py-2 text-sm rounded bg-white bg-opacity-20 hover:bg-opacity-30 transition"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

export default ChatMessage;