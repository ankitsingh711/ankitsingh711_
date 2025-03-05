import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Float } from '@react-three/drei';
import { useMemo } from 'react';

const SkillsGlobe = ({ skills }) => {
  const skillPositions = useMemo(() => {
    return skills.map((_, index) => {
      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      
      return {
        position: [
          4 * Math.cos(theta) * Math.sin(phi),
          4 * Math.sin(theta) * Math.sin(phi),
          4 * Math.cos(phi)
        ],
        rotation: [0, -theta, 0]
      };
    });
  }, [skills]);

  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {skills.map((skill, index) => (
        <Float key={skill} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Text
            position={skillPositions[index].position}
            rotation={skillPositions[index].rotation}
            fontSize={0.5}
            color="#8b5cf6"
            anchorX="center"
            anchorY="middle"
          >
            {skill}
          </Text>
        </Float>
      ))}
      
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  );
};

export default SkillsGlobe; 