import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { angleToRadians } from '../utils/angle';
import * as THREE from 'three';
import gsap from 'gsap';
import Router from 'next/router';
export default function Three() {
  // Code to move the camera around
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(80));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(80));
      orbitControlsRef.current.update();
    }
  });
  // Animation
  const ballRef = useRef(null);
  useEffect(() => {
    if (!!ballRef.current) {
      // Timeline
      const timeline = gsap.timeline({ paused: false });
      // x-axis motion
      timeline.to(ballRef.current.position, {
        x: 1,
        duration: 2,
        ease: 'power2.out',
      });
      // y-axis motion
      timeline.to(
        ballRef.current.position,
        {
          y: 0.5,
          duration: 1,
          ease: 'bounce.out',
        },
        '<'
      );
      // Play
      timeline.play();
    }
  }, [ballRef.current]);
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls
        autoRotate
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(40)}
        maxPolarAngle={angleToRadians(88)}
      />
      {/* Ball */}
      <mesh
        position={[-2, 1.5, 0]}
        castShadow
        ref={ballRef}
        onClick={() => Router.push('/whatIlike')}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FF4369" metalness={0.6} roughness={0.2} />
      </mesh>
      {/* Floor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#FFEC43" />
      </mesh>
      {/* Ambient light */}
      <ambientLight args={['#FFFFFF', 0.25]} />
      {/* Spotlight light */}
      <spotLight
        args={['#FFFFFF', 1.5, 7, angleToRadians(45), 0.4]}
        position={[-3, 1, 0]}
        castShadow
      />
    </>
  );
}
