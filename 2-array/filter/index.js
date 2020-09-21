function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(num => num % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection
    .sort((a, b) => a - b)
    .filter((num, index, arr) => {
      // eslint-disable-next-line eqeqeq
      return num != arr[index + 1];
    });
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
