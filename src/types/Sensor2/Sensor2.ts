// import type { Sensor2 } from './types';

export default class Sensor2 {
  private readonly valueInRadians: number;

  public static fromDegrees(degrees: number): Sensor2 {
    const rads = (degrees * Math.PI) / 180;

    return new this(rads);
  }

  public static fromRadians(radians: number): Sensor2 {
    return new this(radians);
  }

  private constructor(valueInRadians: number) {
    this.valueInRadians = valueInRadians;
  }

  public get inRadians(): number {
    return this.valueInRadians;
  }

  public get inDegrees(): number {
    return this.valueInRadians * (180 / Math.PI);
  }

  // public get inMultiplesOfPi(): number {
  //   return 0;
  // }
}
