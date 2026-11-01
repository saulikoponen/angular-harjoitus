
export class Calculator {

  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Et voi jakaa nollalla');
    }
    return a / b;
  }

  clamp(value: number, min: number, max: number): number {
    if (min > max) {
      throw new Error('Minimi ei voi olla maksimia suurempi');
    }
    return Math.min(Math.max(value, min), max);
  }
}
