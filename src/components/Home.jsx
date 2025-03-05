import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import AnimatedAvatar from './AnimatedAvatar';
import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation/ScrollAnimation';

const Home = () => {
  const navigate = useNavigate();
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 py-12 sm:py-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ScrollAnimation direction="left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left order-2 md:order-1"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm <span className="text-primary">Ankit Singh</span>
              </h1>
              <div className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 min-h-[4rem] sm:min-h-[5rem]">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    1000,
                    'UI/UX Designer',
                    1000,
                    'Problem Solver',
                    1000,
                    'Software Engineer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                animate={{ scale: isAvatarHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Me
                </button>
                <button
                  onClick={() => navigate('/projects')}
                  className="w-full sm:w-auto px-8 py-3 bg-white text-primary border border-primary rounded-lg hover:bg-gray-50 transition-colors"
                >
                  View Projects
                </button>
              </motion.div>
            </motion.div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2 relative"
              onMouseEnter={() => setIsAvatarHovered(true)}
              onMouseLeave={() => setIsAvatarHovered(false)}
            >
              <AnimatedAvatar 
                className="w-full max-w-[300px] sm:max-w-md mx-auto" 
                variant="home"
              />
              {isAvatarHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg text-sm text-gray-600 whitespace-nowrap"
                >
                  Click to pause/play animation!
                </motion.div>
              )}
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Home; 