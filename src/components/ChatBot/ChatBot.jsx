import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaComments } from 'react-icons/fa';
import aiService from '../../utils/aiService';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hi! I\'m Ankit\'s AI assistant. How can I help you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const newMessages = [...messages, { type: 'user', content: inputMessage }];
    setMessages(newMessages);
    setInputMessage('');
    setIsTyping(true);

    try {
      // Get AI response
      const response = await aiService.generateResponse(inputMessage);
      
      // Simulate typing delay for more natural interaction
      setTimeout(() => {
        setMessages([...newMessages, { type: 'bot', content: response }]);
        setIsTyping(false);
      }, 500);
    } catch (error) {
      setMessages([...newMessages, { 
        type: 'bot', 
        content: "I apologize, but I'm having trouble processing that right now. Please try again." 
      }]);
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-4 bg-gradient-primary text-white rounded-full shadow-lg hover:shadow-glow z-40"
      >
        <FaComments className="w-6 h-6" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-full max-w-md bg-white rounded-xl shadow-xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-primary p-4 flex justify-between items-center">
              <div className="flex items-center text-white">
                <FaRobot className="w-6 h-6 mr-2" />
                <span className="font-medium">AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 h-[400px] overflow-y-auto">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-gradient-primary text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 text-gray-800 rounded-lg p-3 max-w-[80%]">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="flex gap-1"
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-glow transition-all duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot; 