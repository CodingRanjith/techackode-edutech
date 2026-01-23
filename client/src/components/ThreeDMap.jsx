import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';

const Earth = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2; // Slow rotation
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[2.5, 32, 32]} />
            <meshStandardMaterial
                color="#135FA2"
                wireframe={true}
                emissive="#0b3e6b"
                emissiveIntensity={0.5}
            />
            {/* Marker for India */}
            <mesh position={[1.8, 1.2, 1.5]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color="#ffc107" emissive="#ffc107" emissiveIntensity={2} />
                <Html distanceFactor={10}>
                    <div className="map-marker-label" style={{ color: 'white', background: '#000000aa', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', whiteSpace: 'nowrap' }}>
                        Techackode HQ
                    </div>
                </Html>
            </mesh>
        </mesh>
    );
};

const ThreeDMap = () => {
    return (
        <div style={{ width: '100%', height: '400px', background: '#0d1b2a', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 10, color: 'white', background: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '4px' }}>
                <p style={{ margin: 0, fontSize: '12px' }}><i className="bi bi-mouse"></i> Drag to rotate</p>
            </div>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Earth />
                <OrbitControls enableZoom={false} autoRotate={false} />
            </Canvas>
        </div>
    );
};

export default ThreeDMap;
