import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  ContactShadows, 
  Html,
  PresentationControls,
  Stage,
  useGLTF,
  Center
} from '@react-three/drei';
import * as THREE from 'three';

interface CarViewer3DProps {
  modelUrl?: string;
  color?: string;
  autoRotate?: boolean;
  showControls?: boolean;
  environmentPreset?: 'sunset' | 'dawn' | 'night' | 'warehouse' | 'forest' | 'apartment' | 'studio' | 'city' | 'park';
}

// Fallback 3D Car Model Component
const Car3DModel = ({ color = '#D4AF37', modelUrl }: { color: string; modelUrl?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Rotate the car
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  // Create a simple car geometry if no model URL provided
  if (!modelUrl) {
    return (
      <group>
        {/* Car Body */}
        <mesh
          ref={meshRef}
          position={[0, 0.5, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.05 : 1}
        >
          <boxGeometry args={[4, 1, 2]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Car Roof */}
        <mesh position={[0, 1.2, 0]}>
          <boxGeometry args={[2.5, 0.7, 1.8]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Wheels */}
        {[[-1.5, 0, 1], [1.5, 0, 1], [-1.5, 0, -1], [1.5, 0, -1]].map((position, i) => (
          <mesh key={i} position={position as [number, number, number]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
          </mesh>
        ))}
        
        {/* Windows */}
        <mesh position={[0, 1.2, 1.01]}>
          <planeGeometry args={[2.3, 0.5]} />
          <meshStandardMaterial color="#1a1a1a" opacity={0.5} transparent />
        </mesh>
        <mesh position={[0, 1.2, -1.01]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[2.3, 0.5]} />
          <meshStandardMaterial color="#1a1a1a" opacity={0.5} transparent />
        </mesh>
        
        {/* Headlights */}
        <mesh position={[1.2, 0.5, 2.01]}>
          <circleGeometry args={[0.2, 32]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={hovered ? 1 : 0.5} />
        </mesh>
        <mesh position={[-1.2, 0.5, 2.01]}>
          <circleGeometry args={[0.2, 32]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={hovered ? 1 : 0.5} />
        </mesh>
      </group>
    );
  }

  // Load actual GLTF model if URL provided
  const { scene } = useGLTF(modelUrl);
  
  // Apply color to the model
  React.useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          (mesh.material as THREE.MeshStandardMaterial).color = new THREE.Color(color);
        }
      }
    });
  }, [scene, color]);

  return <primitive object={scene} ref={meshRef} />;
};

// Loading Component
const LoadingCar = () => (
  <Html center>
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600">Loading 3D Model...</p>
    </div>
  </Html>
);

// Main 3D Viewer Component
const CarViewer3D: React.FC<CarViewer3DProps> = ({
  modelUrl,
  color = '#D4AF37',
  autoRotate = true,
  showControls = true,
  environmentPreset = 'studio'
}) => {
  return (
    <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <Canvas
        camera={{ position: [5, 3, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        <Suspense fallback={<LoadingCar />}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <spotLight
            position={[-5, 5, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            castShadow
          />
          
          {/* Environment */}
          <Environment preset={environmentPreset} background blur={0.5} />
          
          {/* Car Model */}
          {showControls ? (
            <PresentationControls
              global
              rotation={[0.13, 0.1, 0]}
              polar={[-0.4, 0.2]}
              azimuth={[-1, 0.75]}
              config={{ mass: 2, tension: 400 }}
              snap={{ mass: 4, tension: 400 }}
            >
              <Center>
                <Car3DModel color={color} modelUrl={modelUrl} />
              </Center>
            </PresentationControls>
          ) : (
            <Center>
              <Car3DModel color={color} modelUrl={modelUrl} />
            </Center>
          )}
          
          {/* Shadows */}
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.5}
            scale={10}
            blur={2}
            far={10}
          />
          
          {/* Controls */}
          {showControls && (
            <OrbitControls
              autoRotate={autoRotate}
              autoRotateSpeed={0.5}
              enablePan={false}
              minDistance={3}
              maxDistance={10}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

// Color Picker Component
export const ColorPicker: React.FC<{
  colors: Array<{ name: string; hex: string }>;
  selectedColor: string;
  onColorChange: (color: string) => void;
}> = ({ colors, selectedColor, onColorChange }) => {
  return (
    <div className="flex gap-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">Color:</span>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color.hex}
            onClick={() => onColorChange(color.hex)}
            className={`w-8 h-8 rounded-full border-2 transition-all ${
              selectedColor === color.hex
                ? 'border-blue-500 scale-110 shadow-lg'
                : 'border-gray-300 hover:scale-105'
            }`}
            style={{ backgroundColor: color.hex }}
            title={color.name}
            aria-label={`Select ${color.name} color`}
          />
        ))}
      </div>
    </div>
  );
};

// View Controls Component
export const ViewControls: React.FC<{
  autoRotate: boolean;
  onAutoRotateChange: (value: boolean) => void;
  onResetView: () => void;
}> = ({ autoRotate, onAutoRotateChange, onResetView }) => {
  return (
    <div className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <button
        onClick={() => onAutoRotateChange(!autoRotate)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        {autoRotate ? 'Stop Rotation' : 'Auto Rotate'}
      </button>
      <button
        onClick={onResetView}
        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
      >
        Reset View
      </button>
    </div>
  );
};

export default CarViewer3D;