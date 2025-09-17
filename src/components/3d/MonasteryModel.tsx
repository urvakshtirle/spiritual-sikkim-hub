import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Html, PerspectiveCamera } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RotateCcw, ZoomIn, ZoomOut, Camera, Maximize2, RotateCw } from 'lucide-react';
import * as THREE from 'three';

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);
  const [isRotating, setIsRotating] = useState(true);

  useFrame((state, delta) => {
    if (group.current && isRotating) {
      group.current.rotation.y += delta * 0.3;
    }
  });

  const clonedScene = scene.clone();

  return (
    <group ref={group}>
      <primitive object={clonedScene} scale={1.5} position={[0, -1, 0]} />
    </group>
  );
}

interface MonasteryModelProps {
  title?: string;
  description?: string;
  className?: string;
}

const MonasteryModel = ({ 
  title = "Interactive 3D Monastery", 
  description = "Explore every detail in 3D",
  className = ""
}: MonasteryModelProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);
  const [isRotating, setIsRotating] = useState(true);

  const resetCamera = () => {
    setCameraPosition([0, 0, 5]);
  };

  const zoomIn = () => {
    setCameraPosition(prev => [prev[0], prev[1], Math.max(prev[2] - 1, 1)]);
  };

  const zoomOut = () => {
    setCameraPosition(prev => [prev[0], prev[1], Math.min(prev[2] + 1, 10)]);
  };

  return (
    <div className={`relative rounded-xl overflow-hidden bg-gradient-to-b from-background to-secondary/20 ${className}`}>
      {/* Header */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
        <div>
          <Badge className="mb-2 bg-monastery-gold/90 text-primary-foreground backdrop-blur-sm">
            <Camera className="w-3 h-3 mr-1" />
            3D Interactive
          </Badge>
          <h3 className="text-lg font-semibold text-foreground drop-shadow-md">{title}</h3>
          <p className="text-sm text-muted-foreground drop-shadow-sm">{description}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-sm border-border/50"
          onClick={() => setIsFullscreen(!isFullscreen)}
        >
          <Maximize2 className="w-4 h-4" />
        </Button>
      </div>

      {/* 3D Canvas */}
      <div className="h-96 w-full">
        <Canvas
          camera={{ 
            position: cameraPosition as [number, number, number], 
            fov: 45,
            near: 0.1,
            far: 100 
          }}
          gl={{ 
            antialias: true, 
            alpha: true,
            preserveDrawingBuffer: true
          }}
        >
          <Suspense 
            fallback={
              <Html center>
                <div className="flex items-center space-x-2 text-foreground">
                  <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  <span>Loading 3D Model...</span>
                </div>
              </Html>
            }
          >
            <PerspectiveCamera makeDefault position={cameraPosition as [number, number, number]} />
            
            {/* Lighting setup for monastery ambiance */}
            <ambientLight intensity={0.4} color="#fff5e6" />
            <directionalLight 
              position={[10, 10, 5]} 
              intensity={1} 
              color="#ffd700" 
              castShadow 
            />
            <pointLight position={[-10, 0, -20]} color="#ff6b35" intensity={0.3} />
            <spotLight
              position={[0, 20, 0]}
              angle={0.3}
              penumbra={1}
              intensity={0.5}
              color="#ffd700"
              castShadow
            />

            {/* Environment for realistic reflections */}
            <Environment preset="sunset" />

            {/* 3D Model */}
            <Model url="/assets/monastery-model.glb" />

            {/* Controls */}
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={2}
              maxDistance={10}
              autoRotate={isRotating}
              autoRotateSpeed={2}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Control Panel */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsRotating(!isRotating)}
                className="bg-background/50"
              >
                {isRotating ? (
                  <RotateCw className="w-4 h-4" />
                ) : (
                  <RotateCcw className="w-4 h-4" />
                )}
                {isRotating ? 'Stop' : 'Rotate'}
              </Button>
              <Button variant="outline" size="sm" onClick={resetCamera} className="bg-background/50">
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={zoomOut} className="bg-background/50">
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={zoomIn} className="bg-background/50">
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button 
                variant="monastery" 
                size="sm"
                className="ml-2"
              >
                <Camera className="w-4 h-4 mr-1" />
                Full Tour
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Hotspots Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 pointer-events-auto">
          <button className="w-4 h-4 bg-monastery-gold rounded-full border-2 border-primary-foreground animate-pulse shadow-lg hover:scale-125 transition-transform" />
        </div>
        <div className="absolute top-1/2 right-1/3 pointer-events-auto">
          <button className="w-4 h-4 bg-monastery-red rounded-full border-2 border-primary-foreground animate-pulse shadow-lg hover:scale-125 transition-transform" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 pointer-events-auto">
          <button className="w-4 h-4 bg-monastery-blue rounded-full border-2 border-primary-foreground animate-pulse shadow-lg hover:scale-125 transition-transform" />
        </div>
      </div>
    </div>
  );
};

// Preload the model
useGLTF.preload('/assets/monastery-model.glb');

export default MonasteryModel;