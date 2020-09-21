import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.class = klass;
  }

  get klass() {
    return this.class;
  }

  introduce() {
    if (this.class == null) {
      return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
    return `${super.introduce()} I am a Teacher. I teach Class ${this.class}.`;
  }
}
