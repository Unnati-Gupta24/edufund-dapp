import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Torus, Sphere } from "@react-three/drei";

export function EducationModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = t * 0.5;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Book base */}
      <Box args={[3, 0.3, 4]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#00ffff" metalness={0.5} roughness={0.2} />
      </Box>

      {/* Book pages */}
      <Box args={[2.8, 0.8, 3.8]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.3} />
      </Box>

      {/* Decorative ring */}
      <Torus
        args={[1.5, 0.1, 16, 32]}
        position={[0, 0.8, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="#00ffff"
          metalness={0.8}
          roughness={0.2}
          emissive="#00ffff"
          emissiveIntensity={0.5}
        />
      </Torus>

      {/* Floating spheres */}
      <Sphere args={[0.3]} position={[1.5, 1.2, 0]}>
        <meshStandardMaterial
          color="#00ffff"
          metalness={0.8}
          roughness={0.2}
          emissive="#00ffff"
          emissiveIntensity={0.5}
        />
      </Sphere>

      <Sphere args={[0.2]} position={[-1.2, 1.5, 0.8]}>
        <meshStandardMaterial
          color="#00ffff"
          metalness={0.8}
          roughness={0.2}
          emissive="#00ffff"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </group>
  );
}
