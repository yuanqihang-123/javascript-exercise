export default function collectCarNumberCount(collection) {
  return collection.filter(str => str.startsWith('粤A')).length;
}
