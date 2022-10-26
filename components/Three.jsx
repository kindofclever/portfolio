import { useEffect, useRef, useState } from 'react';

import { angleToRadians } from '../utils/angle';

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import Router from 'next/router';

export default function Three() {
  const orbitControlsRef = useRef(null);
  const [colorBox, setColorBox] = useState('#ffec43');
  const [colorBall, setColorBall] = useState('#ffec43');
  const [colorCone, setColorCone] = useState('#ffec43');
  const [colorFloor, setColorFloor] = useState('#00B4D8');
  useFrame((state) => {
    boxRef.current.rotation.y += 0.01;
    coneRef.current.rotation.x += 0.02;
    // if (!!orbitControlsRef.current) {
    //   const { x, y } = state.mouse;
    //   orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(80));
    //   orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(80));
    //   orbitControlsRef.current.update();
    // }
  });

  const ballRef = useRef(null);
  const boxRef = useRef(null);
  const coneRef = useRef(null);

  useEffect(() => {
    if (!!ballRef.current) {
      const timeline = gsap.timeline({ paused: false });
      timeline.to(ballRef.current.position, {
        x: 0,
        duration: 2.5,
        ease: 'power2.out',
      });
      timeline.to(
        ballRef.current.position,
        {
          y: -0.2,
          duration: 1,
          ease: 'bounce.out',
        },
        '<'
      );
      timeline.play();
    }
    if (!!boxRef.current) {
      const timeline = gsap.timeline({ paused: false });
      timeline.to(boxRef.current.position, {
        x: 3,
        duration: 3,
        ease: 'power2.out',
      });
      timeline.to(
        boxRef.current.position,
        {
          y: 1,
          duration: 4,
          ease: 'bounce.out',
        },
        '<'
      );
      timeline.play();
    }
    if (!!coneRef.current) {
      const timeline = gsap.timeline({ paused: false });
      timeline.to(coneRef.current.position, {
        x: -6,
        duration: 3,
        ease: 'power2.out',
      });
      timeline.to(coneRef.current.position, {
        y: 1,
        duration: 1,
        ease: 'bounce.out',
      });
      timeline.play();
    }
  }, [ballRef.current, boxRef.current, coneRef.current]);
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0.5, 1, 4.5]}
        rotation={[Math.PI, 0, 0]}
      />
      <OrbitControls
        enabled={false}
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(40)}
        maxPolarAngle={angleToRadians(88)}
      />
      <mesh
        position={[-7, 1.5, 2]}
        rotation-z={Math.PI * 0.25}
        castShadow
        ref={ballRef}
        onClick={() => Router.push('/what-I-like')}
        onPointerEnter={() => {
          setColorBall('#03055e');
        }}
        onPointerOut={() => {
          setColorBall('#ffec43');
        }}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={colorBall}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
      <mesh
        position={[6, 1.2, 0]}
        rotation-x={Math.PI * 0.25}
        castShadow
        ref={boxRef}
        onClick={() => Router.push('/alva-labs')}
        onPointerEnter={() => setColorBox('#03055e')}
        onPointerOut={() => setColorBox('#ffec43')}
      >
        <boxGeometry args={[0.5, 1, 1]} />
        <meshStandardMaterial
          color={colorBox}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
      <mesh
        position={[-0.5, 1, -2]}
        rotation-x={Math.PI * 0.5}
        castShadow
        ref={coneRef}
        onClick={() =>
          Router.push(
            'https://drive.google.com/file/d/1d2CGCzi0hpBJ7pD-z7CCjXT7Y-uirQP6/view?usp=sharing'
          )
        }
        onPointerEnter={() => setColorCone('#03055e')}
        onPointerOut={() => setColorCone('#ffec43')}
      >
        <coneGeometry args={[0.6, 1.5, 32]} />
        <meshStandardMaterial
          color={colorCone}
          metalness={0.3}
          roughness={0.1}
        />
      </mesh>
      {/* <mesh
        rotation={[-angleToRadians(90), 0, 0]}
        receiveShadow
        onClick={() => Router.push('/foundation')}
      >
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color={colorFloor} />
      </mesh> */}
      <ambientLight args={['#FFFFFF', 0.23]} />
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
      <spotLight
        args={['#FFFFFF', 4, 10, angleToRadians(45), 0.7]}
        position={[9, 2, 4]}
        castShadow
      />
    </>
  );
}
