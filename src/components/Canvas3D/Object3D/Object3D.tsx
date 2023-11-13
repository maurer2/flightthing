/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactElement } from 'react';
import type * as THREE from 'three';

import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Euler, Vector3 } from 'three';

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
    position: new Vector3(posX, posY, posZ),
    rotation: new Euler(0, 0, 0),
  });
  const prevVelocity = useRef<Vector3>(new Vector3(0, 0, 0));

  console.log(posX);

  useFrame(() => {
    if (!propsMesh?.current?.rotation) {
      return;
    }

    if (velocityX !== prevVelocity.current?.x) {
      propsMesh.current.rotation.x = velocityX;
    }

    if (velocityY !== prevVelocity.current?.y) {
      propsMesh.current.rotation.y = velocityY;
    }

    if (velocityZ !== prevVelocity.current?.z) {
      propsMesh.current.rotation.z = velocityZ;
    }

    // store current values for next frame
    prevVelocity.current?.set(
      propsMesh.current.rotation.x,
      propsMesh.current.rotation.y,
      propsMesh.current.rotation.z,
    );
  });

  return (
    <mesh {...propsMesh} ref={propsMesh as any}>
      <boxGeometry args={[2, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default Object3D;
