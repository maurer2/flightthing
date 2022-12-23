import { describe, expect, it } from 'vitest';

import SensorValue from '.';

describe('SensorValue', () => {
  it('converts degrees to rads correctly', () => {
    expect(
      Math.abs(SensorValue.fromDegrees(90).inRadians - Math.PI / 2) < Number.EPSILON,
    ).toBeTruthy();

    expect(
      Math.abs(SensorValue.fromDegrees(180).inRadians - Math.PI) < Number.EPSILON,
    ).toBeTruthy();

    expect(
      Math.abs(SensorValue.fromDegrees(270).inRadians - Math.PI * 1.5) < Number.EPSILON,
    ).toBeTruthy();

    expect(
      Math.abs(SensorValue.fromDegrees(360).inRadians - Math.PI * 2) < Number.EPSILON,
    ).toBeTruthy();
  });

  it('converts rads to degrees correctly', () => {
    expect(SensorValue.fromRadians(Math.PI / 2).inDegrees).toBe(90);
    expect(SensorValue.fromRadians(Math.PI).inDegrees).toBe(180);
    expect(SensorValue.fromRadians(Math.PI * 1.5).inDegrees).toBe(270);
    expect(SensorValue.fromRadians(Math.PI * 2).inDegrees).toBe(360);
  });

  it('returns values as multiple of Pi', () => {
    expect(SensorValue.fromRadians(Math.PI / 2).inMultiplesOfPi).toBe(0.5);
    expect(SensorValue.fromRadians(Math.PI).inMultiplesOfPi).toBe(1);
    expect(SensorValue.fromRadians(Math.PI * 1.5).inMultiplesOfPi).toBe(1.5);
    expect(SensorValue.fromRadians(Math.PI * 2).inMultiplesOfPi).toBe(2);
  });
});
