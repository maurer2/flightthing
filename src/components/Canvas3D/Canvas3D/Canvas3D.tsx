import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { Canvas } from '@react-three/fiber';

import CoordinateSystem from '../CoordinateSystem';
import Object3D from '../Object3D';

// import type { PropsCanvas3D } from './types';
import type { ReactElement } from 'react';
import type { RootState } from '../../../store';
import type { Sensor } from '../../../store/types';

function Canvas3D(): ReactElement {
  const sensorRotationYAxis = useSelector<RootState, Sensor>(
    (state) => state.sensors.rotationYAxis,
    shallowEqual,
  );
  const sensorRotationXAxis = useSelector<RootState, Sensor>(
    (state) => state.sensors.rotationXAxis,
    shallowEqual,
  );

  return (
    <div className="bg-slate-100 h-full">
      <div className="flex h-full">
        <div className="w-3/6 h-3/6 m-auto">
          <Canvas>
            <directionalLight castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]}>
              <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
            </directionalLight>
            <Object3D
              posX={0}
              posY={0}
              velocityX={sensorRotationXAxis.value}
              velocityY={sensorRotationYAxis.value}
            />
            <CoordinateSystem name="CoordinateSystem" />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Canvas3D;
