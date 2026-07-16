import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Center, useGLTF } from '@react-three/drei';
import { useState, useRef, Suspense, useEffect } from 'react';

// Import the GLB assets directly
import bottleUrl from '@/assets/Bottel.glb';
import buildingUrl from '@/assets/Day1Building.glb';
import diffrentUrl from '@/assets/Diffrent3dModel.glb';
import shadingUrl from '@/assets/Shading file setup-Day 4.glb';

interface ModelProps {
  url: string;
  wireframe: boolean;
  autoRotate: boolean;
  rotateSpeed: number;
}

function LoadedModel({ url, wireframe, autoRotate, rotateSpeed }: ModelProps) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * rotateSpeed;
    }
  });

  // Apply wireframe configuration
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => {
            mat.wireframe = wireframe;
          });
        } else if (mesh.material) {
          mesh.material.wireframe = wireframe;
        }
      }
    });
  }, [scene, wireframe]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshBasicMaterial color="#a855f7" wireframe />
    </mesh>
  );
}

export default function ModelShowroom3D() {
  const models = [
    { id: 'building', name: '🏢 Day 1 Building', url: buildingUrl, file: 'Day1Building.glb' },
    { id: 'diffrent', name: '⚙️ Different Model', url: diffrentUrl, file: 'Diffrent3dModel.glb' },
    { id: 'shading', name: '🎨 Shading Setup', url: shadingUrl, file: 'Shading file setup-Day 4.glb' },
    { id: 'bottle', name: '🍼 Bottle Model', url: bottleUrl, file: 'Bottel.glb' },
  ];

  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [rotateSpeed, setRotateSpeed] = useState<number>(0.5);
  const [lightIntensity, setLightIntensity] = useState<number>(1.2);

  const resetControls = () => {
    setWireframe(false);
    setAutoRotate(true);
    setRotateSpeed(0.5);
    setLightIntensity(1.2);
    setShowGrid(true);
  };

  return (
    <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl p-6 lg:p-8 flex flex-col lg:flex-row gap-6">
      {/* 3D Viewer Panel */}
      <div className="flex-1 min-h-[350px] lg:min-h-[500px] bg-black/40 rounded-2xl relative border border-gray-700/30">
        <Canvas camera={{ position: [0, 2, 4], fov: 50 }}>
          <ambientLight intensity={lightIntensity * 0.4} />
          <directionalLight position={[10, 15, 10]} intensity={lightIntensity * 0.8} castShadow />
          <pointLight position={[-10, 10, -10]} intensity={lightIntensity * 0.4} />

          <Suspense fallback={<Loader />}>
            <Center>
              <LoadedModel 
                url={selectedModel.url} 
                wireframe={wireframe} 
                autoRotate={autoRotate}
                rotateSpeed={rotateSpeed}
              />
            </Center>
          </Suspense>

          {showGrid && <gridHelper args={[20, 20, '#555555', '#222222']} position={[0, -1.5, 0]} />}
          
          <OrbitControls 
            enableDamping 
            dampingFactor={0.05}
            minDistance={1.0}
            maxDistance={15}
            maxPolarAngle={Math.PI / 2 + 0.2} 
          />
        </Canvas>

        {/* Floating controls in top-right of canvas */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button 
            onClick={() => setWireframe(!wireframe)}
            className={`p-2.5 rounded-xl border text-sm transition-all duration-300 font-medium ${
              wireframe 
                ? 'bg-purple-600 border-purple-500 text-white' 
                : 'bg-gray-900/80 border-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
            title="Toggle Wireframe"
          >
            🕸️ Wireframe
          </button>
          <button 
            onClick={() => setShowGrid(!showGrid)}
            className={`p-2.5 rounded-xl border text-sm transition-all duration-300 font-medium ${
              showGrid 
                ? 'bg-purple-600 border-purple-500 text-white' 
                : 'bg-gray-900/80 border-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
            title="Toggle Grid Helper"
          >
            🌐 Grid Helper
          </button>
        </div>

        {/* Loading overlay indicator details */}
        <div className="absolute top-4 left-4 bg-gray-900/60 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs text-purple-400 font-mono pointer-events-none">
          Active: {selectedModel.file}
        </div>

        {/* Navigation instructions */}
        <div className="absolute bottom-4 left-4 bg-gray-900/60 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs text-gray-400 pointer-events-none select-none">
          🖱️ Left-Click & Drag to Rotate | Scroll to Zoom | Right-Click & Drag to Pan
        </div>
      </div>

      {/* Control panel sidebar */}
      <div className="w-full lg:w-[320px] flex flex-col gap-6 bg-gray-900/20 p-5 rounded-2xl border border-gray-700/20">
        
        {/* Model Selection */}
        <div>
          <label className="text-sm font-semibold text-gray-300 block mb-3 uppercase tracking-wider">Select Model</label>
          <div className="flex flex-col gap-2">
            {models.map(model => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model)}
                className={`py-3 px-4 rounded-xl border text-xs text-left transition-all duration-300 ${
                  selectedModel.id === model.id
                    ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-600/20'
                    : 'bg-gray-800/40 border-gray-700/40 text-gray-300 hover:bg-gray-800/80'
                }`}
              >
                <div className="font-semibold text-sm">{model.name}</div>
                <div className="text-[10px] text-gray-400 mt-1 font-mono">{model.file}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Rotation Controls */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Auto-Rotation</label>
            <input 
              type="checkbox" 
              checked={autoRotate}
              onChange={(e) => setAutoRotate(e.target.checked)}
              className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-700 rounded cursor-pointer accent-purple-500"
            />
          </div>
          {autoRotate && (
            <div className="mt-2">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Speed</span>
                <span>{rotateSpeed.toFixed(1)}x</span>
              </div>
              <input 
                type="range" 
                min="0.1" 
                max="2.0" 
                step="0.1" 
                value={rotateSpeed}
                onChange={(e) => setRotateSpeed(parseFloat(e.target.value))}
                className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
            </div>
          )}
        </div>

        {/* Lighting Intensity Slider */}
        <div>
          <div className="flex justify-between text-xs text-gray-300 font-semibold mb-1 uppercase tracking-wider">
            <span>Lighting Intensity</span>
            <span>{lightIntensity.toFixed(1)}x</span>
          </div>
          <input 
            type="range" 
            min="0.2" 
            max="3.0" 
            step="0.1" 
            value={lightIntensity}
            onChange={(e) => setLightIntensity(parseFloat(e.target.value))}
            className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
        </div>

        {/* Reset Panel */}
        <button 
          onClick={resetControls}
          className="mt-2 py-3 w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 uppercase"
        >
          🔄 Reset Config
        </button>

      </div>
    </div>
  );
}
