import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Float, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Project3D = ({ position, project, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Float
      speed={5} 
      rotationIntensity={0.2} 
      floatIntensity={0.5}
      position={position}
    >
      <motion.mesh
        whileHover={{ scale: 1.1 }}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2, 2, 0.2]} />
        <meshStandardMaterial 
          color={hovered ? "#8b5cf6" : "#ffffff"}
          metalness={0.5}
          roughness={0.2}
        />
        <Text
          position={[0, 0, 0.11]}
          fontSize={0.2}
          color="#1f2937"
          anchorX="center"
          anchorY="middle"
        >
          {project.title}
        </Text>
      </motion.mesh>
    </Float>
  );
};

const ProjectShowcase3D = ({ projects, onProjectClick }) => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="city" />
      
      {projects.map((project, index) => (
        <Project3D
          key={project.id}
          project={project}
          position={[
            (index % 3 - 1) * 3,
            Math.floor(index / 3) * -3,
            0
          ]}
          onClick={() => onProjectClick(project)}
        />
      ))}
      
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default ProjectShowcase3D; 