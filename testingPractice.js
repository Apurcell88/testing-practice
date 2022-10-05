function capitalize(word) {
  const firstLetter = word[0].toUpperCase();
  const remainingString = word.slice(1);
  const capitalizedWord = firstLetter.concat(remainingString);

  return capitalizedWord;
}

export default capitalize;
