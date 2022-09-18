import React from 'react';

import { Canvas } from '@react-three/fiber';

import Object3D from '../Object3D';

import type { ReactElement } from 'react';
import type { PropsCanvas3D } from './types';

function Canvas3D({ name }: PropsCanvas3D): ReactElement {
  console.log(name);

  return (
    <div className="bg-slate-100 h-full flex">
      <div className="w-3/6 h-3/6 m-auto">
        <Canvas>
          <ambientLight intensity={0.25} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} color="blue" />
          <pointLight position={[-10, -10, -10]} />
          <Object3D posX={0} posY={0} velocityX={0.025} velocityY={0.025} />
        </Canvas>
      </div>
    </div>
  );
}

export default Canvas3D;
