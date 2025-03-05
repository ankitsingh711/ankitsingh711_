import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export const useKeyboardShortcuts = () => {
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Theme toggle: Alt + T
      if (e.altKey && e.key === 't') {
        toggleTheme();
      }

      // Search focus: /
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        document.querySelector('[aria-label="Search"]')?.focus();
      }

      // Close modals: Escape
      if (e.key === 'Escape') {
        document.querySelector('[aria-label="Close"]')?.click();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [toggleTheme]);
}; 