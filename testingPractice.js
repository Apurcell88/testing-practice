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

reverseString('the best');

export { capitalize, reverseString };
