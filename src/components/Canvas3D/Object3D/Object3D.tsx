import React, { useRef } from 'react';
import { Euler, Vector3 } from 'three';

import { useFrame } from '@react-three/fiber';

import type { ReactElement } from 'react';
import type * as THREE from 'three';
import type { PropsObject3D } from './types';

export function Object3D({
  posX,
  posY,
  posZ,
  velocityX,
  velocityY,
  velocityZ,
}: PropsObject3D): ReactElement {
  const propsMesh = useRef<Partial<THREE.Mesh>>({
    rotation: new Euler(0, 0, 0),
    position: new Vector3(posX, posY, posZ),
  });
  const prefVelocityX = useRef<PropsObject3D['velocityX'] | null>(null);
  const prefVelocityY = useRef<PropsObject3D['velocityY'] | null>(null);
  const prefVelocityZ = useRef<PropsObject3D['velocityZ'] | null>(null);

  useFrame(() => {
    if (!propsMesh || !propsMesh.current || !propsMesh?.current?.rotation) {
      return;
    }

    if (velocityX !== prefVelocityX.current) {
      propsMesh.current.rotation.x = velocityX;
    }

    if (velocityY !== prefVelocityY.current) {
      propsMesh.current.rotation.y = velocityY;
    }

    if (velocityZ !== prefVelocityZ.current) {
      propsMesh.current.rotation.z = velocityZ;
    }

    prefVelocityY.current = propsMesh.current.rotation.y;
    prefVelocityX.current = propsMesh.current.rotation.x;
    prefVelocityZ.current = propsMesh.current.rotation.z;
  });

  return (
    <mesh {...propsMesh} ref={propsMesh as any}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
}

export default Object3D;
