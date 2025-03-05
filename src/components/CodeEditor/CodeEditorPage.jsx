import { motion } from 'framer-motion';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';
import CodePlayground from '../CodePlayground/CodePlayground';

const CodeEditorPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-radial from-background-light via-primary-50 to-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold bg-gradient-primary text-transparent bg-clip-text mb-4">
              Interactive Code Editor
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Experience coding in real-time with our interactive playground. Write, run, and experiment with code in multiple languages.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <CodePlayground />
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Multiple Languages',
                description: 'Write code in JavaScript, React, or Python with full syntax highlighting.',
                icon: '🌐',
              },
              {
                title: 'Real-time Execution',
                description: 'See your code results instantly with our built-in compiler.',
                icon: '⚡',
              },
              {
                title: 'Code Sharing',
                description: 'Easily share your code snippets with others or save them for later.',
                icon: '🔄',
              },
              {
                title: 'Dark Mode Editor',
                description: 'Comfortable coding experience with our dark theme editor.',
                icon: '🌙',
              },
              {
                title: 'Error Handling',
                description: 'Get instant feedback with our built-in error detection.',
                icon: '🐛',
              },
              {
                title: 'Responsive Design',
                description: 'Code on any device with our fully responsive editor.',
                icon: '📱',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default CodeEditorPage; 