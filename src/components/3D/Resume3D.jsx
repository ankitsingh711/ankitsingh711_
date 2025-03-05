import { Canvas } from '@react-three/fiber';
import { Text, OrbitControls, Float, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Section3D = ({ title, content, position, rotation }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <motion.group
        position={position}
        rotation={rotation}
        whileHover={{ scale: 1.1 }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh>
          <planeGeometry args={[4, 2]} />
          <meshStandardMaterial 
            color={hovered ? "#8b5cf6" : "#ffffff"}
            opacity={0.8}
            transparent
          />
        </mesh>
        <Text
          position={[0, 0.5, 0.1]}
          fontSize={0.3}
          color="#1f2937"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
        <Html position={[0, -0.2, 0.1]} center transform>
          <div className="w-64 text-center text-sm text-gray-600">
            {content}
          </div>
        </Html>
      </motion.group>
    </Float>
  );
};

const Resume3D = ({ resumeData }) => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <Section3D
        title="Experience"
        content={resumeData.experience}
        position={[-4, 2, 0]}
        rotation={[0, 0.2, 0]}
      />
      
      <Section3D
        title="Education"
        content={resumeData.education}
        position={[4, 2, 0]}
        rotation={[0, -0.2, 0]}
      />
      
      <Section3D
        title="Skills"
        content={resumeData.skills}
        position={[-4, -2, 0]}
        rotation={[0, 0.2, 0]}
      />
      
      <Section3D
        title="Projects"
        content={resumeData.projects}
        position={[4, -2, 0]}
        rotation={[0, -0.2, 0]}
      />
      
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Resume3D; 