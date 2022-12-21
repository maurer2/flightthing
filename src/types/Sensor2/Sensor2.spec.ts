import { describe, expect, it } from 'vitest';

import Sensor2 from '.';

describe('Sensor2', () => {
  it('converts degrees to rads correctly', () => {
    expect(Math.abs(Sensor2.fromDegrees(90).inRadians - Math.PI / 2) < Number.EPSILON).toBeTruthy();

    expect(Math.abs(Sensor2.fromDegrees(180).inRadians - Math.PI) < Number.EPSILON).toBeTruthy();

    expect(
      Math.abs(Sensor2.fromDegrees(270).inRadians - Math.PI * 1.5) < Number.EPSILON,
    ).toBeTruthy();

    expect(
      Math.abs(Sensor2.fromDegrees(360).inRadians - Math.PI * 2) < Number.EPSILON,
    ).toBeTruthy();
  });

  it('converts rads to degrees correctly', () => {
    expect(Sensor2.fromRadians(Math.PI / 2).inDegrees).toBe(90);
    expect(Sensor2.fromRadians(Math.PI).inDegrees).toBe(180);
    expect(Sensor2.fromRadians(Math.PI * 1.5).inDegrees).toBe(270);
    expect(Sensor2.fromRadians(Math.PI * 2).inDegrees).toBe(360);
  });

  it.todo('returns values as multiple of PI');
});
