import Person from './person';

export default class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.class = klass;
  }

  get klass() {
    return this.class;
  }

  introduce() {
    return `I am a Student. I am at Class ${this.class}.`;
  }
}
