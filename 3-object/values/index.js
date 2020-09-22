export default function countTypesNumber(source) {
  // eslint-disable-next-line radix
  return Object.values(source).reduce((pre, num) => +pre + +num);
}
