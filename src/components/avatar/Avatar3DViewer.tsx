
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Avatar3DModel } from './Avatar3DModel';

interface Avatar3DViewerProps {
  view: string;
  isScanning: boolean;
}

export function Avatar3DViewer({ view, isScanning }: Avatar3DViewerProps) {
  const getCameraPosition = () => {
    switch (view) {
      case 'front': return [0, 0, 5];
      case 'side': return [5, 0, 0];
      default: return [3, 3, 3];
    }
  };

  return (
    <div className="w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={getCameraPosition()} />
          <OrbitControls 
            enabled={view === '3d'} 
            enablePan={false} 
            maxDistance={10} 
            minDistance={2}
          />
          <Environment preset="studio" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Avatar3DModel isScanning={isScanning} />
        </Suspense>
      </Canvas>
    </div>
  );
}
