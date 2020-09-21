function chooseMultiplesOfThree(collection) {
  return collection.filter(num => num % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  return collection
    .sort((a, b) => a - b)
    .filter((num, index, arr) => {
      // eslint-disable-next-line eqeqeq
      return num != arr[index + 1];
    });
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
