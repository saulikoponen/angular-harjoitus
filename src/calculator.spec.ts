
import { Calculator } from './app/calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add two positive numbers', () => {
    expect(calculator.add(5, 3)).toBe(8);
  });

  it('should subtract numbers and return a negative result', () => {
    expect(calculator.subtract(3, 5)).toBe(-2);
  });

  it('should multiply by zero', () => {
    expect(calculator.multiply(10, 0)).toBe(0);
  });

  it('should multiply negative numbers', () => {
    expect(calculator.multiply(-4, 3)).toBe(-12);
  });

  it('should divide two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0))
      .toThrowError('Et voi jakaa nollalla');
  });

  it('should return the minimum value when input is too small', () => {
    expect(calculator.clamp(-5, 0, 100)).toBe(0);
  });

  it('should throw an error when minimum is greater than maximum', () => {
    expect(() => calculator.clamp(5, 10, 0))
      .toThrowError('Minimi ei voi olla maksimia suurempi');
  });
});
