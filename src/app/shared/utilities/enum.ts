export class Enum {

  static toEnum(val: string): Enum {
    return new Enum(val);
  }

  protected value: string;

  constructor(value: string) {
    this.value = value;
  }

  toString(): string {
    return this.value;
  }
}
