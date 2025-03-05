import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import Split from '@uiw/react-split';
import { motion } from 'framer-motion';
import { FaPlay, FaCode, FaCopy, FaDownload } from 'react-icons/fa';

const CodePlayground = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [isLoading, setIsLoading] = useState(false);

  const codeExamples = {
    javascript: `// Try modifying this code!
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calculate first 10 Fibonacci numbers
const result = [];
for (let i = 0; i < 10; i++) {
  result.push(fibonacci(i));
}
console.log(result);`,
    react: `// React Component Example
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`,
    python: `# Python Example
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

# Test the function
numbers = [3, 6, 8, 10, 1, 2, 1]
print(quicksort(numbers))`,
  };

  useEffect(() => {
    setCode(codeExamples[selectedLanguage]);
  }, [selectedLanguage]);

  const handleRunCode = async () => {
    setIsLoading(true);
    try {
      // For JavaScript, we can use eval (in a real app, use a safer method or sandbox)
      if (selectedLanguage === 'javascript') {
        const originalConsoleLog = console.log;
        let output = '';
        console.log = (...args) => {
          output += args.join(' ') + '\n';
        };

        eval(code);
        console.log = originalConsoleLog;
        setOutput(output);
      } else {
        setOutput('Running code in other languages requires a backend service.');
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
    setIsLoading(false);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const handleDownloadCode = () => {
    const extension = selectedLanguage === 'javascript' ? 'js' : 
                     selectedLanguage === 'react' ? 'jsx' : 'py';
    const blob = new Blob([code], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `example.${extension}`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-background-card rounded-xl shadow-soft p-4">
      <div className="mb-4 flex justify-between items-center">
        <div className="flex gap-2">
          {Object.keys(codeExamples).map((lang) => (
            <motion.button
              key={lang}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-4 py-2 rounded-md ${
                selectedLanguage === lang
                  ? 'bg-gradient-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-all duration-300`}
            >
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </motion.button>
          ))}
        </div>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyCode}
            className="p-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-all duration-300"
          >
            <FaCopy />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadCode}
            className="p-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-all duration-300"
          >
            <FaDownload />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRunCode}
            disabled={isLoading}
            className="px-4 py-2 bg-gradient-primary text-white rounded-md flex items-center gap-2 hover:shadow-glow transition-all duration-300"
          >
            <FaPlay />
            Run
          </motion.button>
        </div>
      </div>

      <Split mode="vertical" className="h-[600px]">
        <div className="min-h-[300px] overflow-hidden rounded-lg">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            language={selectedLanguage}
            value={code}
            onChange={setCode}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: true,
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
        <div className="min-h-[200px] bg-gray-900 text-white p-4 rounded-lg font-mono overflow-auto">
          <div className="flex items-center gap-2 mb-2 text-gray-400">
            <FaCode />
            Output:
          </div>
          {isLoading ? (
            <div className="flex items-center gap-2 text-gray-400">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                ⟳
              </motion.div>
              Running...
            </div>
          ) : (
            <pre className="whitespace-pre-wrap">{output}</pre>
          )}
        </div>
      </Split>
    </div>
  );
};

export default CodePlayground; 