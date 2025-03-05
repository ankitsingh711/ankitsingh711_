import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon, FaUniversalAccess, FaKeyboard, FaGlobe } from 'react-icons/fa';

const AccessibilityToolbar = ({ isMobile = false }) => {
  const { isDarkMode, toggleTheme, language, setLanguage } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'hi', name: 'हिंदी' }
  ];

  const shortcuts = [
    { key: 'Alt + T', description: 'Toggle theme' },
    { key: 'Alt + A', description: 'Toggle accessibility menu' },
    { key: 'Alt + L', description: 'Change language' },
    { key: '/', description: 'Focus search' },
    { key: 'Esc', description: 'Close modals' }
  ];

  return (
    <>
      <motion.div
        className={isMobile ? '' : 'inline-block'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${
            isMobile ? 'w-full flex items-center justify-center gap-2' : ''
          }`}
          aria-label="Toggle accessibility menu"
        >
          <FaUniversalAccess className="w-6 h-6" />
          {isMobile && <span>Accessibility Options</span>}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className={`${
                isMobile 
                  ? 'mt-2' 
                  : 'absolute top-full right-0 mt-2'
              } bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 min-w-[200px]`}
            >
              <div className="space-y-4">
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? <FaSun /> : <FaMoon />}
                  <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>

                {/* Language Selector */}
                <div className="relative">
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full p-2 bg-transparent border rounded"
                    aria-label="Select language"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                  <FaGlobe className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>

                {/* Keyboard Shortcuts */}
                <button
                  onClick={() => setShowShortcuts(true)}
                  className="flex items-center gap-2 w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Show keyboard shortcuts"
                >
                  <FaKeyboard />
                  <span>Keyboard Shortcuts</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Keyboard Shortcuts Modal */}
      <AnimatePresence>
        {showShortcuts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]"
            onClick={() => setShowShortcuts(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">Keyboard Shortcuts</h2>
              <div className="space-y-2">
                {shortcuts.map((shortcut) => (
                  <div key={shortcut.key} className="flex justify-between">
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                      {shortcut.key}
                    </kbd>
                    <span>{shortcut.description}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityToolbar; 