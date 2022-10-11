function capitalize(word) {
  const firstLetter = word[0].toUpperCase();
  const remainingString = word.slice(1).toLowerCase();
  const capitalizedWord = firstLetter.concat(remainingString);

  return capitalizedWord;
}

function reverseString(word) {
  const wordArray = word.split('').reverse();
  const reversedWord = wordArray.join('');

  return reversedWord.toLowerCase();
}

function caesarCipher(string) {
  // takes a string and returns it with each character shifted by 1 letter
  // a=b, b=c, c=d, etc
  let shiftedString = '';
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const punctuation = [',', '.', "'", '!', '?'];
  // check where each letter in string matches in the alphabet array

  for (let i = 0; i < string.length; i++) { // string
    for (let k = 0; k < punctuation.length; k++) {
      if (string[i] === punctuation[k]) {
        throw new Error('punctuation is not allowed');
      }
    }

    for (let j = 0; j < alphabet.length; j++) { // alphabet
      if (string[i].toLowerCase() === alphabet[j]) {
        shiftedString += alphabet[j + 1];
      }

      if (string[i].toLowerCase() === alphabet[alphabet.length - 1]) {
        // if it is z, change it to a
        const lastLetter = alphabet.pop();
        alphabet.unshift(lastLetter);
        shiftedString += alphabet[j + 1];
      }
    }
  }

  return shiftedString;
}

export { capitalize, reverseString, caesarCipher };
