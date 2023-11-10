/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';
import { Vector3 } from 'three';

import { useFrame } from '@react-three/fiber';

import type { ReactElement } from 'react';
import type { Line } from 'three';
import type { PropsCoordinateSystem } from './types';

function CoordinateSystem({ name }: PropsCoordinateSystem): ReactElement {
  console.log(name);

  const xAxis = useRef<Line>();
  const yAxis = useRef<Line>();
  const zAxis = useRef<Line>();

  useFrame(() => {
    if (xAxis.current) {
      xAxis.current.geometry.setFromPoints([new Vector3(0, 0, 0), new Vector3(100, 0, 0)]);
    }
    if (yAxis.current) {
      yAxis.current.geometry.setFromPoints([new Vector3(0, 0, 0), new Vector3(0, 100, 0)]);
    }
    if (zAxis.current) {
      zAxis.current.geometry.setFromPoints([new Vector3(0, 0, 0), new Vector3(-100, -100, -100)]);
    }
  });

  return (
    <>
      {/* X-Axis */}
      <line ref={xAxis as any}>
        <bufferGeometry />
        <lineBasicMaterial color="black" />
      </line>
      {/* Y-Axis */}
      <line ref={yAxis as any}>
        <bufferGeometry />
        <lineBasicMaterial color="black" />
      </line>
      {/* Z-Axis */}
      <line ref={zAxis as any}>
        <bufferGeometry />
        <lineBasicMaterial color="black" />
      </line>
    </>
  );
}

export default CoordinateSystem;
