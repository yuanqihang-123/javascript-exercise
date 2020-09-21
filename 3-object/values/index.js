export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  // eslint-disable-next-line radix
  return Object.values(source).reduce((pre, num) => parseInt(pre) + parseInt(num));
}
