import { capitalize, reverseString } from './testingPractice';

// // capitalized function testing
// test('is this capitalized', () => {
//   expect(capitalize('urie')).toMatch('Urie');
// });

// test('is this also capitalized', () => {
//   expect(capitalize('adam')).toMatch('Adam');
// });

// test('is this not capitalized', () => {
//   expect(capitalize('adam')).not.toMatch('adam');
// });

// test('all lowercase except first letter', () => {
//   expect(capitalize('aDam')).toMatch('Adam');
// });

// // reverseString function testing
// test('is this reversed', () => {
//   expect(reverseString('lamb')).toMatch('bmal');
// });

// test('are multiple words reversed', () => {
//   expect(reverseString('the best')).toMatch('tseb eht');
// });

// test('case insensitive', () => {
//   expect(reverseString('tHe BeSt')).toMatch('tseb eht');
// });

// calculator testing
test('do calculator calculations compute', () => {
  const calculator = {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return a / b;
    },
  };
  // adding
  expect(calculator.add(1, 1)).toEqual(2);
  // floating numbers
  expect(calculator.add(1.2, 1.1)).toBeCloseTo(2.3);

  // subtracting
  expect(calculator.subtract(5, 4)).toBe(1);
  // negative numbers
  expect(calculator.subtract(-1, 4)).toBe(-5);

  // multiplying
  expect(calculator.multiply(3, 4)).toBe(12);
  // negative numbers
  expect(calculator.multiply(-2, 4)).toBe(-8);
  expect(calculator.multiply(-2, -2)).toBe(4);
  // multiply by 0
  expect(calculator.multiply(0, 5)).toBe(0);
  // multiply floats
  expect(calculator.multiply(5.5, 4.3)).toBeCloseTo(23.65);

  // dividing
  expect(calculator.divide(4, 2)).toBe(2);
  // negative numbers
  expect(calculator.divide(4, -2)).toBe(-2);
  // floating numbers
  expect(calculator.divide(4, -2.3)).toBeCloseTo(-1.74);
});
