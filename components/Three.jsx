import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { angleToRadians } from '../utils/angle';
import * as THREE from 'three';
import gsap from 'gsap';
import Router from 'next/router';
import { ConeGeometry } from 'three';
export default function Three() {
  // Code to move the camera around
  const orbitControlsRef = useRef(null);
  const [colorBox, setColorBox] = useState('#FF4369');
  const [colorBall, setColorBall] = useState('#FF4369');
  const [colorCone, setColorCone] = useState('#FF4369');
  const [colorFloor, setColorFloor] = useState('#FFEC43');
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
  const boxRef = useRef(null);
  const coneRef = useRef(null);

  useEffect(() => {
    if (!!ballRef.current) {
      // Timeline
      const timeline = gsap.timeline({ paused: false });
      // x-axis motion
      timeline.to(ballRef.current.position, {
        x: -1,
        duration: 2.5,
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
    if (!!boxRef.current) {
      // Timeline
      const timeline = gsap.timeline({ paused: false });
      // x-axis motion
      timeline.to(boxRef.current.position, {
        x: 2,
        duration: 3,
        ease: 'power2.out',
      });
      // y-axis motion
      timeline.to(
        boxRef.current.position,
        {
          y: 1.5,
          duration: 4,
          ease: 'bounce.out',
        },
        '<'
      );
      // Play
      timeline.play();
    }
    if (!!coneRef.current) {
      // Timeline
      const timeline = gsap.timeline({ paused: false });
      // x-axis motion
      timeline.to(coneRef.current.position, {
        x: -7,
        duration: 3,
        ease: 'power2.out',
      });
      // y-axis motion
      timeline.to(coneRef.current.position, {
        y: 1,
        duration: 1,
        ease: 'bounce.out',
      });
      // Play
      timeline.play();
    }
  }, [ballRef.current, boxRef.current, coneRef.current]);
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
        position={[-7, 1.5, 1]}
        castShadow
        ref={ballRef}
        onClick={() => Router.push('/whatIlike')}
        onPointerEnter={() => setColorBall('#0077B6')}
        onPointerOut={() => setColorBall('#FF4369')}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={colorBall}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
      {/* Box */}
      <mesh
        position={[6, 1.5, 0]}
        castShadow
        ref={boxRef}
        onClick={() => Router.push('/whatIamlookingfor')}
        onPointerEnter={() => setColorBox('#0077B6')}
        onPointerOut={() => setColorBox('#FF4369')}
      >
        <boxGeometry args={[0.5, 1, 1]} />
        <meshStandardMaterial
          color={colorBox}
          metalness={0.1}
          roughness={0.7}
        />
      </mesh>
      {/* Triangle */}
      <mesh
        position={[-1, 1, -2]}
        castShadow
        ref={coneRef}
        onClick={() => Router.push('/faq')}
        onPointerEnter={() => setColorCone('#0077B6')}
        onPointerOut={() => setColorCone('#FF4369')}
      >
        <coneGeometry args={[0.5, 1, 32]} />
        <meshStandardMaterial
          color={colorCone}
          metalness={0.3}
          roughness={0.1}
        />
      </mesh>

      {/* Floor */}
      <mesh
        rotation={[-angleToRadians(90), 0, 0]}
        receiveShadow
        onClick={() => Router.push('/foundation')}
      >
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color={colorFloor} />
      </mesh>
      {/* Ambient light */}
      <ambientLight args={['#FFFFFF', 0.25]} />
      {/* Spotlight light */}
      <spotLight
        args={['#FFFFFF', 1.5, 7, angleToRadians(45), 0.4]}
        position={[-3, 1, 0]}
        castShadow
      />
      <spotLight
        args={['#FFFFFF', 2, 10, angleToRadians(30), 0.4]}
        position={[3, 1, 0]}
        castShadow
      />
      <spotLight
        args={['#FFFFFF', 4, 10, angleToRadians(45), 0.4]}
        position={[-11, 1, 4]}
        castShadow
      />
    </>
  );
}
