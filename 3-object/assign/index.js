export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const assign = Object.assign({}, source);
  assign.serialNumber = '12345';
  assign.properties.status = 'processed';
  return assign;
}
