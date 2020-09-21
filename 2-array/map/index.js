export default function numberMapToWord(collection) {
  return collection.map(num => String.fromCharCode(num + 96));
}
