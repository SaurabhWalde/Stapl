
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface Avatar3DModelProps {
  isScanning: boolean;
}

export function Avatar3DModel({ isScanning }: Avatar3DModelProps) {
  const bodyRef = useRef<Mesh>(null);
  const headRef = useRef<Mesh>(null);
  const leftArmRef = useRef<Mesh>(null);
  const rightArmRef = useRef<Mesh>(null);
  const leftLegRef = useRef<Mesh>(null);
  const rightLegRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (isScanning && bodyRef.current) {
      bodyRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group>
      {/* Body (Torso) */}
      <mesh ref={bodyRef} position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 2, 0.6]} />
        <meshStandardMaterial color="#4A90E2" />
      </mesh>

      {/* Head */}
      <mesh ref={headRef} position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial color="#FFB84D" />
      </mesh>

      {/* Left Arm */}
      <mesh ref={leftArmRef} position={[-0.8, 0.5, 0]}>
        <boxGeometry args={[0.3, 1.5, 0.3]} />
        <meshStandardMaterial color="#4A90E2" />
      </mesh>

      {/* Right Arm */}
      <mesh ref={rightArmRef} position={[0.8, 0.5, 0]}>
        <boxGeometry args={[0.3, 1.5, 0.3]} />
        <meshStandardMaterial color="#4A90E2" />
      </mesh>

      {/* Left Leg */}
      <mesh ref={leftLegRef} position={[-0.3, -1.5, 0]}>
        <boxGeometry args={[0.4, 1.8, 0.4]} />
        <meshStandardMaterial color="#2E8B57" />
      </mesh>

      {/* Right Leg */}
      <mesh ref={rightLegRef} position={[0.3, -1.5, 0]}>
        <boxGeometry args={[0.4, 1.8, 0.4]} />
        <meshStandardMaterial color="#2E8B57" />
      </mesh>

      {/* Posture indicators */}
      {/* Head forward indicator */}
      <mesh position={[0, 1.8, 0.2]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#FF6B6B" />
      </mesh>

      {/* Shoulder alignment indicators */}
      <mesh position={[-0.8, 1, 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#4ECDC4" />
      </mesh>
      <mesh position={[0.8, 1, 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#4ECDC4" />
      </mesh>
    </group>
  );
}
