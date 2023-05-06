import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
} from './testing-practice';

test('returns string with first letter capitalized', () => {
  expect(capitalize('always')).toBe('Always');
  expect(capitalize('forever')).toBe('Forever');
  expect(capitalize('forEVER')).toBe('ForEVER');
});

test('returns a reversed string', () => {
  expect(reverseString('always')).toBe('syawla');
  expect(reverseString('forever')).toBe('reverof');
  expect(reverseString('Space Jam')).toBe('maJ ecapS');
});

test('returns correct answer for the operation', () => {
  expect(calculator.add(33, 3)).toBe(36);
  expect(calculator.subtract(33, 3)).toBe(30);
  expect(calculator.divide(33, 3)).toBe(11);
  expect(calculator.multiply(33, 3)).toBe(99);
});

test('returns shifted text', () => {
  expect(caesarCipher('good')).toBe('weet');
  expect(caesarCipher('Good')).toBe('Weet');
  expect(caesarCipher('Good. Well done!')).toBe('Weet. Mubb tedu!');
});

test('returns object with properties from array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
})