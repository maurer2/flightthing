import type { ReactElement } from 'react';

import { Canvas } from '@react-three/fiber';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import type { RootState } from '../../../store';
import type { Sensor } from '../../../store/types';

import CoordinateSystem from '../CoordinateSystem';
import Object3D from '../Object3D';

function Canvas3D(): ReactElement {
  const sensorRotationYAxis = useSelector<RootState, Sensor>(
    (state) => state.sensors.rotationYAxis,
    shallowEqual,
  );
  const sensorRotationXAxis = useSelector<RootState, Sensor>(
    (state) => state.sensors.rotationXAxis,
    shallowEqual,
  );
  const sensorRotationZAxis = useSelector<RootState, Sensor>(
    (state) => state.sensors.rotationZAxis,
    shallowEqual,
  );

  return (
    <div className="bg-slate-100 h-full">
      <div className="flex h-full">
        <div className="w-3/6 h-3/6 m-auto">
          <Canvas>
            <directionalLight castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]}>
              <orthographicCamera args={[-10, 10, 10, -10]} attach="shadow-camera" />
            </directionalLight>
            <Object3D
              posX={0}
              posY={0}
              posZ={0}
              rotationX={sensorRotationXAxis.value}
              rotationY={sensorRotationYAxis.value}
              rotationZ={sensorRotationZAxis.value}
            />
            <CoordinateSystem name="CoordinateSystem" />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Canvas3D;
