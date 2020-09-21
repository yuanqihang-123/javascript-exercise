export default function find00OldPerson(collection) {
  const date = new Date();
  return collection.find(person => date.getFullYear() - person.age >= 2000).name;
}
