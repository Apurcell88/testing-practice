import { capitalize, reverseString } from './testingPractice';

// capitalized function testing
test('is this capitalized', () => {
  expect(capitalize('urie')).toMatch('Urie');
});

test('is this also capitalized', () => {
  expect(capitalize('adam')).toMatch('Adam');
});

test('is this not capitalized', () => {
  expect(capitalize('adam')).not.toMatch('adam');
});

test('all lowercase except first letter', () => {
  expect(capitalize('aDam')).toMatch('Adam');
});

// reverseString function testing
test('is this reversed', () => {
  expect(reverseString('lamb')).toMatch('bmal');
});

test('are multiple words reversed', () => {
  expect(reverseString('the best')).toMatch('tseb eht');
});

test('case insensitive', () => {
  expect(reverseString('tHe BeSt')).toMatch('tseb eht');
});
