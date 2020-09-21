export default function addSerialNumber(source) {
  const assign = Object.assign({}, source);
  assign.serialNumber = '12345';
  assign.properties.status = 'processed';
  return assign;
}
