import React, { useRef } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';

import type { ReactElement } from 'react';
import type { PropsCanvas3D } from './types';

export function Box(props) {
  // This reference will give us direct access to the mesh
  const ref = useRef({
    rotation: {
      y: 0,
      x: 0,
    },
  });
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (!ref || !ref.current) {
      return;
    }
    ref.current.rotation.x += 0.025;
    ref.current.rotation.y += 0.025;
  });

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function Canvas3D({ name }: PropsCanvas3D): ReactElement {
  console.log(name);

  return (
    <div className="bg-slate-100 h-full flex">
      <h2>{name}</h2>

      <div className="w-96 h-96 m-auto">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Box position={[0, 0, 0]} />
        </Canvas>
      </div>
    </div>
  );
}

export default Canvas3D;
