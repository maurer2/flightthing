import React from 'react';

// import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

import CoordinateSystem from '../CoordinateSystem';
import Object3D from '../Object3D';

import type { ReactElement } from 'react';
import type { PropsCanvas3D } from './types';

function Canvas3D({ name }: PropsCanvas3D): ReactElement {
  console.log(name);

  return (
    <div className="bg-slate-100 h-full flex">
      <div className="w-3/6 h-3/6 m-auto">
        <Canvas>
          <ambientLight intensity={0.15} color="white" />
          {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} color="red" /> */}
          {/* <pointLight position={[-10, -10, -10]} /> */}
          <directionalLight castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]}>
            <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
          </directionalLight>
          <Object3D posX={0} posY={0} velocityX={0.025} velocityY={0.025} />
          <CoordinateSystem name="CoordinateSystem" />
        </Canvas>
      </div>
    </div>
  );
}

export default Canvas3D;
