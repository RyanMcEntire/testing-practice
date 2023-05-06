export function capitalize(input) {
  return input[0].toUpperCase() + input.slice(1);
}

export function reverseString(input) {
  let reversed = '';
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  return reversed;
}

export const calculator = {
  add: (n1, n2) => n1 + n2,
  subtract: (n1, n2) => n1 - n2,
  divide: (n1, n2) => n1 / n2,
  multiply: (n1, n2) => n1 * n2,
};

// vanilla letter abcdefghijklmnopqrstuvwxyz
// offset of -10  qrstuvwxyzabcdefghijklmnop

export function caesarCipher(string) {
  const origin = 'abcdefghijklmnopqrstuvwxyz';
  let offset = -10;
  let cipherText = '';

  for (let i = 0; i < string.length; i++) {
    if (!/^[a-zA-Z]$/.test(string[i])) {
      cipherText += string[i];
    } else {
      const isUpperCase = string[i] === string[i].toUpperCase();
      const char = isUpperCase ? string[i].toLowerCase() : string[i];
      const cipheredIndex =
        (origin.indexOf(char) + offset + origin.length) % origin.length;
      const newChar = origin[cipheredIndex];
      cipherText += isUpperCase ? newChar.toUpperCase() : newChar;
    }
  }
  return cipherText;
}

function average(arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });
  return sum / arr.length;
}

function min(arr) {
  return Math.min(...arr);
}

function max(arr) {
  return Math.max(...arr);
}

export function analyzeArray(arr) {
  return {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length,
  };
}
