import Lottie from 'lottie-react';
import { useEffect, useState, useRef } from 'react';

const AnimatedAvatar = ({ className, variant = 'default' }) => {
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef(null);
  
  const animations = {
    default: 'https://assets9.lottiefiles.com/packages/lf20_3ntisyac.json',
    // Updated home animation to a better software engineer avatar
    home: 'https://assets2.lottiefiles.com/private_files/lf30_obidsi0t.json',  // Modern developer animation
    // Alternative animations you can try:
    // 'https://assets5.lottiefiles.com/packages/lf20_3d4tbfyr.json' // Developer with laptop
    // 'https://assets4.lottiefiles.com/private_files/lf30_WdTEui.json' // Cool developer
    // 'https://assets6.lottiefiles.com/packages/lf20_z4cshyhf.json' // Programming setup
    about: 'https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json'
  };

  useEffect(() => {
    fetch(animations[variant])
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, [variant]);

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.5);
      lottieRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1);
    }
  };

  const handleClick = () => {
    if (lottieRef.current) {
      if (lottieRef.current.isPaused) {
        lottieRef.current.play();
      } else {
        lottieRef.current.pause();
      }
    }
  };

  if (!animationData) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div 
      className={`${className} cursor-pointer transition-transform hover:scale-105`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        style={{ width: '100%', height: '100%' }}
        initialSegment={variant === 'home' ? [0, 150] : undefined}
        onComplete={() => {
          if (variant === 'home') {
            lottieRef.current?.goToAndPlay(0);
          }
        }}
      />
    </div>
  );
};

export default AnimatedAvatar; 