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
  rotationX,
  rotationY,
  rotationZ,
}: PropsObject3D): ReactElement {
  const propsMesh = useRef<Partial<THREE.Mesh>>({
    position: new Vector3(posX, posY, posZ),
    rotation: new Euler(0, 0, 0),
  });
  const prevRotation = useRef<Vector3>(new Vector3(0, 0, 0));

  useFrame(() => {
    if (!propsMesh?.current?.rotation) {
      return;
    }

    if (rotationX !== prevRotation.current?.x) {
      propsMesh.current.rotation.x = rotationX;
    }

    if (rotationY !== prevRotation.current?.y) {
      propsMesh.current.rotation.y = rotationY;
    }

    if (rotationZ !== prevRotation.current?.z) {
      propsMesh.current.rotation.z = rotationZ;
    }

    // store current values for next frame
    prevRotation.current.setFromEuler(propsMesh.current.rotation);
  });

  return (
    <mesh {...propsMesh} ref={propsMesh as any}>
      <boxGeometry args={[2, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default Object3D;
