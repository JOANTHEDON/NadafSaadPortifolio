import { Canvas } from '@react-three/fiber';
import { Text3D, Center, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

interface Contact3DProps {
  icon: string;
  label: string;
  value: string;
  color?: string;
}

function ContactText3D({ icon, label, value, color = "#FFC107" }: Contact3DProps) {
  return (
    <Center>
      <group>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.2}
          height={0.05}
          position={[-1, 0.2, 0]}
        >
          {icon}
          <meshStandardMaterial color={color} />
        </Text3D>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.08}
          height={0.02}
          position={[-0.5, 0.1, 0]}
        >
          {label.toUpperCase()}
          <meshStandardMaterial color="#888" />
        </Text3D>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.1}
          height={0.03}
          position={[-0.5, -0.1, 0]}
        >
          {value}
          <meshStandardMaterial color="#fff" />
        </Text3D>
      </group>
    </Center>
  );
}

export function Contact3DCard({ icon, label, value }: Contact3DProps) {
  return (
    <div className="h-20 bg-secondary/50 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <ContactText3D icon={icon} label={label} value={value} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}