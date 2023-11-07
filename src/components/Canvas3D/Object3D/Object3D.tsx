import React, { useRef } from 'react';

import { useFrame } from '@react-three/fiber';

// import type { MeshProps } from '@react-three/fiber';
import type { ReactElement } from 'react';
import type { PropsObject3D } from './types';

export function Object3D({ posX, posY, velocityY, velocityX }: PropsObject3D): ReactElement {
  const propsMesh = useRef({
    rotation: {
      y: 0,
      x: 0,
    },
    position: [posX, posY, 0],
  });
  const prefVelocityY = useRef<PropsObject3D['velocityY'] | null>(null);
  const prefVelocityX = useRef<PropsObject3D['velocityX'] | null>(null);

  useFrame(() => {
    // console.log(clock.getElapsedTime());
    if (!propsMesh || !propsMesh.current || !propsMesh?.current?.rotation) {
      return;
    }

    if (velocityY !== prefVelocityY.current) {
      propsMesh.current.rotation.y = velocityY;
    }

    if (velocityX !== prefVelocityX.current) {
      propsMesh.current.rotation.x = velocityX;
    }

    prefVelocityY.current = propsMesh.current.rotation.y;
    prefVelocityX.current = propsMesh.current.rotation.x;
  });

  return (
    <mesh {...propsMesh} ref={propsMesh as any}>
      <boxGeometry args={[1, 1]} />
      <meshStandardMaterial color="gray" transparent />
    </mesh>
  );
}

export default Object3D;
