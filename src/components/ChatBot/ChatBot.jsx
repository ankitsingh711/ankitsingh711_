import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaComments } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hi! I\'m Ankit\'s assistant. How can I help you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const predefinedResponses = {
    greetings: ['hello', 'hi', 'hey', 'howdy'],
    about: ['about', 'who', 'what do you do'],
    contact: ['contact', 'email', 'phone', 'reach'],
    projects: ['projects', 'work', 'portfolio'],
    skills: ['skills', 'technologies', 'tech stack', 'programming']
  };

  const botResponses = {
    greetings: "Hello! I'm here to help you learn more about Ankit. What would you like to know?",
    about: "Ankit is a Full Stack Developer with expertise in React, Node.js, and modern web technologies. He's passionate about creating efficient and user-friendly applications.",
    contact: "You can reach Ankit at developerankit2127@gmail.com or connect with him on LinkedIn at linkedin.com/in/ankit-singh2127",
    projects: "Ankit has worked on various projects including web applications, APIs, and mobile apps. Would you like to see his portfolio?",
    skills: "Ankit's tech stack includes: React.js, Node.js, Express.js, MongoDB, PostgreSQL, AWS, and more. He's also experienced in UI/UX design and system architecture.",
    default: "I'm not sure about that. Would you like to know about Ankit's projects, skills, or how to contact him?"
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const newMessages = [...messages, { type: 'user', content: inputMessage }];
    setMessages(newMessages);

    // Generate bot response
    const response = generateResponse(inputMessage.toLowerCase());
    setTimeout(() => {
      setMessages([...newMessages, { type: 'bot', content: response }]);
    }, 500);

    setInputMessage('');
  };

  const generateResponse = (input) => {
    // Check each category of predefined responses
    for (const [category, keywords] of Object.entries(predefinedResponses)) {
      if (keywords.some(keyword => input.includes(keyword))) {
        return botResponses[category];
      }
    }
    return botResponses.default;
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-4 right-4 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaComments className="w-6 h-6" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-4 w-96 max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-white rounded-lg shadow-xl overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex justify-between items-center">
              <div className="flex items-center text-white">
                <FaRobot className="w-6 h-6 mr-2" />
                <span className="font-medium">Chat Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 h-[calc(100%-8rem)] overflow-y-auto">
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
                        ? 'bg-primary text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
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