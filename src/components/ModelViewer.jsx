import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  const meshRef = useRef();

  // Pusatkan model di origin agar kamera dan target mudah disejajarkan
  return <primitive ref={meshRef} object={scene} scale={6} position={[0, 0, 0]} />;
}

const ModelViewer = ({ modelPath }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        cursor: isDragging ? 'grabbing' : 'grab',
        border: '1px solid #374151',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Canvas
        // Tampilan awal isometric-like dan lebih "zoom-in"
        camera={{ position: [0, -6, 6], fov: 36, near: 0.1, far: 100 }}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {/* Pencahayaan yang lembut dan natural */}
        <ambientLight intensity={0.75} />
        <directionalLight position={[10, 12, 8]} intensity={1.1} />
        <directionalLight position={[-8, -10, -6]} intensity={0.45} />
        <Environment preset="forest" />

        <Model url={modelPath} />

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          // Bebaskan rotasi sepenuhnya
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          // Perbesar rentang zoom agar bisa lebih dekat
          minDistance={3}
          maxDistance={12}
          enableDamping={true}
          dampingFactor={0.1}
          rotateSpeed={0.8}
          panSpeed={0.8}
          zoomSpeed={0.9}
          onStart={() => setIsDragging(true)}
          onEnd={() => setIsDragging(false)}
          makeDefault={true}
        />
      </Canvas>

      {/* Interaction hint overlay */}
      {!isDragging && (
        <div
          aria-label="Drag to rotate"
          style={{
            position: 'absolute',
            right: '12px',
            bottom: '12px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 10px',
            background: 'rgba(0,0,0,0.35)',
            border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: '9999px',
            color: 'white',
            fontSize: '12px',
            lineHeight: 1,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        >
          {/* rotate/pan icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2v3m0 14v3m7-10h3M2 12H5M16.95 7.05l2.12-2.12M4.93 19.07l2.12-2.12M16.95 16.95l2.12 2.12M4.93 4.93l2.12 2.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Drag to rotate</span>
        </div>
      )}
    </div>
  );
};

export default ModelViewer;

