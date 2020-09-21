export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const date = new Date();
  return collection.find(person => date.getFullYear() - person.age >= 2000).name;
}
