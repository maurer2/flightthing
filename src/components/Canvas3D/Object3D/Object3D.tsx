import React, { useRef } from 'react';

import { useFrame } from '@react-three/fiber';

import type { MeshProps } from '@react-three/fiber';
import type { ReactElement } from 'react';
import type { PropsObject3D } from './types';

export function Object3D({ posX, posY, velocityX, velocityY }: PropsObject3D): ReactElement {
  const propsMesh = useRef<MeshProps>({
    rotation: {
      y: 0,
      x: 0,
    },
    position: [posX, posY, 0],
  });

  useFrame(({ clock }) => {
    // console.log(clock.getElapsedTime());

    if (!propsMesh || !propsMesh.current || !propsMesh.current.rotation) {
      return;
    }
    propsMesh.current.rotation.x += velocityX;
    propsMesh.current.rotation.y += velocityY;
  });

  return (
    <mesh {...propsMesh} ref={propsMesh as any}>
      <boxGeometry args={[1, 1]} />
      <meshStandardMaterial color="gray" transparent />
    </mesh>
  );
}

export default Object3D;
