export default class SensorValue {
  private readonly valueInRadians: number;

  public static fromDegrees(degrees: number): SensorValue {
    const rads = (degrees * Math.PI) / 180;

    return new this(rads);
  }

  public static fromRadians(radians: number): SensorValue {
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

  public get inMultiplesOfPi(): number {
    return this.valueInRadians / Math.PI;
  }
}
